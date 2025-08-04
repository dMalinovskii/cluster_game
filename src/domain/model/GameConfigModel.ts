import { clamp } from "../../lib/clamp";
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

export class GameConfigModel implements IGameConfigModel {
    constructor(private gameConfig: GameConfigOptions) {
        this.$rows = new ReactiveValue(gameConfig.rows);
        this.$cols = new ReactiveValue(gameConfig.cols);
        this.$maxColors = new ReactiveValue(gameConfig.maxColors);
        this.$minClusterSize = new ReactiveValue(gameConfig.minClusterSize);
        this.$colors = new ReactiveValue(gameConfig.colors);
    }

    readonly $rows;
    readonly $cols;
    readonly $maxColors;
    readonly $minClusterSize;
    readonly $colors;

    get colors(): number {
        return this.$colors.value;
    }
    set colors(value: number) {
        this.$colors.value = clamp(value, 2, this.maxColors);
    }
    get rows(): number {
        return this.$rows.value;
    }

    get cols(): number {
        return this.$cols.value;
    }

    get maxColors(): number {
        return this.$maxColors.value;
    }

    get minClusterSize(): number {
        return this.$minClusterSize.value;
    }

    set rows(value: number) {
        this.$rows.value = clamp(value, 1, this.maxRowsValue);
        this.computeMinClusterSize();
    }

    set cols(value: number) {
        this.$cols.value = clamp(value, 1, this.maxColsValue);
        this.computeMinClusterSize();
    }

    set maxColors(value: number) {
        this.$maxColors.value = value;
    }

    set minClusterSize(value: number) {
        this.$minClusterSize.value = clamp(value, 1, this.maxClusterSizeValue);
    }
    private computeMinClusterSize() {
        const value = clamp(this.minClusterSize, 1, this.maxClusterSizeValue);
        if (value !== this.minClusterSize) {
            this.minClusterSize = value;
        }
    }

    readonly maxRowsValue = 15;
    readonly maxColsValue = 15;

    get maxClusterSizeValue(): number {
        return this.rows * this.cols;
    }
}
