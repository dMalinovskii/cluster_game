import { IGameConfigModel } from "../../domain";
import { ReactiveValue } from "../../lib/ReactiveValue";
import { ICounterViewModel } from "../view/CounterView";
export declare class SizeViewModel implements ICounterViewModel {
    private gameConfig;
    private key;
    private _minValue;
    private _maxValue;
    constructor(gameConfig: IGameConfigModel, key: "rows" | "cols");
    readonly $value: ReactiveValue<number>;
    get value(): number;
    get minValue(): number;
    get maxValue(): number;
    increment(): void;
    decrement(): void;
}
//# sourceMappingURL=SizeViewModel.d.ts.map