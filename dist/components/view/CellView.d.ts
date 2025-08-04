import { Container } from "pixi.js";
import { Color } from "../../constants/Color";
export type CellOptions = {
    rowId: number;
    colId: number;
    x: number;
    y: number;
    width: number;
    height: number;
    color: Color;
};
export declare class Cell extends Container {
    readonly options: CellOptions;
    constructor(options: CellOptions);
    private graphics;
    highlight(): void;
}
//# sourceMappingURL=CellView.d.ts.map