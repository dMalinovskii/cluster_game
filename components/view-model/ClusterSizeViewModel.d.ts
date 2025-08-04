import { IGameConfigModel } from "../../domain";
import { ReactiveValue } from "../../lib/ReactiveValue";
import { ICounterViewModel } from "../view/CounterView";
export declare class ClusterSizeViewModel implements ICounterViewModel {
    private gameConfig;
    constructor(gameConfig: IGameConfigModel);
    readonly $value: ReactiveValue<number>;
    private _minValue;
    get value(): number;
    get minValue(): number;
    get maxValue(): number;
    increment(): void;
    decrement(): void;
}
//# sourceMappingURL=ClusterSizeViewModel.d.ts.map