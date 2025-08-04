import { IGameConfigModel } from "../../domain";
import { ReactiveValue } from "../../lib/ReactiveValue";
import { ICounterViewModel } from "../view/CounterView";

export class SizeViewModel implements ICounterViewModel {
    private _minValue: number = 1;
    private _maxValue: number;

    constructor(
        private gameConfig: IGameConfigModel,
        private key: "rows" | "cols"
    ) {
        const $value =
            this.key === "rows" ? this.gameConfig.$rows : this.gameConfig.$cols;

        $value.subscribe((value) => {
            this.$value.value = value;
        });

        this._maxValue =
            this.key === "rows"
                ? this.gameConfig.maxRowsValue
                : this.gameConfig.maxColsValue;
    }

    readonly $value: ReactiveValue<number> = new ReactiveValue(0);

    get value(): number {
        return this.$value.value;
    }
    get minValue(): number {
        return this._minValue;
    }
    get maxValue(): number {
        return this._maxValue;
    }
    increment(): void {
        this.gameConfig[this.key] += 1;
    }
    decrement(): void {
        this.gameConfig[this.key] -= 1;
    }
}
