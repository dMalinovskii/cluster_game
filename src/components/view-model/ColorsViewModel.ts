import { IGameConfigModel } from "../../domain";
import { ReactiveValue } from "../../lib/ReactiveValue";
import { ICounterViewModel } from "../view/CounterView";

export class ColorsViewModel implements ICounterViewModel {
    constructor(private gameConfig: IGameConfigModel) {
        this.gameConfig.$colors.subscribe((value) => {
            this.$value.value = value;
        });
    }

    readonly $value: ReactiveValue<number> = new ReactiveValue(0);

    private _minValue: number = 2;

    get value(): number {
        return this.$value.value;
    }
    get minValue(): number {
        return this._minValue;
    }
    get maxValue(): number {
        return this.gameConfig.maxColors;
    }

    increment(): void {
        this.gameConfig.colors += 1;
    }
    decrement(): void {
        this.gameConfig.colors -= 1;
    }
}
