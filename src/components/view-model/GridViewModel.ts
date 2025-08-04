import {
    Cluster,
    findCluster,
    IGameConfigModel,
    Screen,
    ScreenGenerator,
} from "../../domain";
import { CELLID_TO_COLORS, CellIdToColors } from "../../constants/Color";
import { Color } from "../../constants/Color";
import { IGridViewModel } from "../view/GridView";

export class GridViewModel implements IGridViewModel {
    constructor(
        private screenGenerator: ScreenGenerator,
        private gameSettigs: IGameConfigModel,
        private cellIdToColors: CellIdToColors = CELLID_TO_COLORS,
        private findClusterFunction: (
            grid: number[][],
            minClusterSize: number
        ) => Cluster[] = findCluster
    ) {}

    private _screen: Screen = [];
    get screen(): Screen {
        return this._screen;
    }
    private _cluster: Cluster[] = [];

    get cluster(): Cluster[] {
        return this._cluster;
    }

    idToColor(id: number): Color {
        return this.cellIdToColors[id];
    }

    generateGrid() {
        this._screen = this.screenGenerator(
            this.gameSettigs.rows,
            this.gameSettigs.cols,
            this.gameSettigs.colors
        );

        this._cluster = this.findClusterFunction(
            this._screen,
            this.gameSettigs.minClusterSize
        );
    }
}
