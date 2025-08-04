import { Container } from "pixi.js";
import { Color } from "../../constants/Color";
import { Cell } from "./CellView";
import { Cluster } from "../../domain";

export interface IGridViewModel {
    screen: number[][]; // row, col
    idToColor: (id: number) => Color;
    generateGrid: () => void;
    cluster: Cluster[];
}

export class Grid extends Container {
    private cells: Cell[] = [];
    private gridContainer!: Container;
    private maxWidth = 600;
    private maxHeight = 340;
    private cellWidth = 50;

    constructor(private vm: IGridViewModel) {
        super();
    }

    clear() {
        this.gridContainer?.destroy();
        this.cells = [];
    }

    fill() {
        this.clear();
        this.vm.generateGrid();

        this.gridContainer = new Container();
        this.createCells();
        this.cells.forEach((c) => this.gridContainer.addChild(c));

        this.resize();

        this.addChild(this.gridContainer);
        this.highlightCells();
    }

    private createCells() {
        const screen = this.vm.screen;
        for (let row = 0; row < screen.length; row++) {
            for (let col = 0; col < screen[row].length; col++) {
                const cellId = screen[row][col];
                const cell = new Cell({
                    rowId: row,
                    colId: col,
                    x: col * this.cellWidth,
                    y: row * this.cellWidth,
                    width: this.cellWidth,
                    height: this.cellWidth,
                    color: this.vm.idToColor(cellId),
                });
                this.cells.push(cell);
            }
        }
    }

    private highlightCells() {
        for (const cluster of this.vm.cluster) {
            for (const pos of cluster) {
                this.cells.forEach((c) => {
                    if (
                        c.options.colId === pos.x &&
                        c.options.rowId === pos.y
                    ) {
                        c.highlight();
                    }
                });
            }
        }
    }
    private resize() {
        const oldWidth = this.gridContainer.width;
        const oldHeight = this.gridContainer.height;
        const widthRatio = this.maxWidth / this.gridContainer.width;
        const heightRatio = this.maxHeight / this.gridContainer.height;
        const ratio = Math.min(widthRatio, heightRatio);
        this.gridContainer.scale.x = ratio;
        this.gridContainer.scale.y = ratio;
        this.gridContainer.pivot.x = oldWidth / 2;
        this.gridContainer.pivot.y = oldHeight / 2;
    }
}
