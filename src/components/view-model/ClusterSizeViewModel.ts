import { IGameConfigModel } from "../../domain";
import { ReactiveValue } from "../../lib/ReactiveValue";
import { ICounterViewModel } from "../view/CounterView";

export class ClusterSizeViewModel implements ICounterViewModel {
    constructor(private gameConfig: IGameConfigModel) {
        this.gameConfig.$minClusterSize.subscribe((value) => {
            this.$value.value = value;
        });
        this.$value.value = this.gameConfig.minClusterSize;
    }

    readonly $value: ReactiveValue<number> = new ReactiveValue(0);
    private _minValue: number = 1;

    get value(): number {
        return this.$value.value;
    }
    get minValue(): number {
        return this._minValue;
    }
    get maxValue(): number {
        return this.gameConfig.cols * this.gameConfig.rows;
    }

    increment(): void {
        this.gameConfig.minClusterSize += 1;
    }
    decrement(): void {
        this.gameConfig.minClusterSize -= 1;
    }
}
