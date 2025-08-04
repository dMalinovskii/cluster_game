import { Container } from "pixi.js";
import { Color } from "../../constants/Color";
import { Cluster } from "../../domain";
export interface IGridViewModel {
    screen: number[][];
    idToColor: (id: number) => Color;
    generateGrid: () => void;
    cluster: Cluster[];
}
export declare class Grid extends Container {
    private vm;
    private cells;
    private gridContainer;
    private maxWidth;
    private maxHeight;
    private cellWidth;
    constructor(vm: IGridViewModel);
    clear(): void;
    fill(): void;
    private createCells;
    private highlightCells;
    private resize;
}
//# sourceMappingURL=GridView.d.ts.map