import { ReactiveValue } from "../../lib/ReactiveValue";
export type GameConfigOptions = {
    rows: number;
    cols: number;
    colors: number;
    maxColors: number;
    minClusterSize: number;
};
export interface IGameConfigModel {
    readonly $rows: ReactiveValue<number>;
    readonly $cols: ReactiveValue<number>;
    readonly $maxColors: ReactiveValue<number>;
    readonly $minClusterSize: ReactiveValue<number>;
    readonly $colors: ReactiveValue<number>;
    readonly maxRowsValue: number;
    readonly maxColsValue: number;
    get colors(): number;
    get rows(): number;
    get cols(): number;
    get maxColors(): number;
    get minClusterSize(): number;
    get maxClusterSizeValue(): number;
    set colors(value: number);
    set rows(value: number);
    set cols(value: number);
    set maxColors(value: number);
    set minClusterSize(value: number);
}
export declare class GameConfigModel implements IGameConfigModel {
    private gameConfig;
    constructor(gameConfig: GameConfigOptions);
    readonly $rows: ReactiveValue<number>;
    readonly $cols: ReactiveValue<number>;
    readonly $maxColors: ReactiveValue<number>;
    readonly $minClusterSize: ReactiveValue<number>;
    readonly $colors: ReactiveValue<number>;
    get colors(): number;
    set colors(value: number);
    get rows(): number;
    get cols(): number;
    get maxColors(): number;
    get minClusterSize(): number;
    set rows(value: number);
    set cols(value: number);
    set maxColors(value: number);
    set minClusterSize(value: number);
    private computeMinClusterSize;
    readonly maxRowsValue = 15;
    readonly maxColsValue = 15;
    get maxClusterSizeValue(): number;
}
//# sourceMappingURL=GameConfigModel.d.ts.map