import { Cluster, IGameConfigModel, Screen, ScreenGenerator } from "../../domain";
import { CellIdToColors } from "../../constants/Color";
import { Color } from "../../constants/Color";
import { IGridViewModel } from "../view/GridView";
export declare class GridViewModel implements IGridViewModel {
    private screenGenerator;
    private gameSettigs;
    private cellIdToColors;
    private findClusterFunction;
    constructor(screenGenerator: ScreenGenerator, gameSettigs: IGameConfigModel, cellIdToColors?: CellIdToColors, findClusterFunction?: (grid: number[][], minClusterSize: number) => Cluster[]);
    private _screen;
    get screen(): Screen;
    private _cluster;
    get cluster(): Cluster[];
    idToColor(id: number): Color;
    generateGrid(): void;
}
//# sourceMappingURL=GridViewModel.d.ts.map