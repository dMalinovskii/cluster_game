import { Container } from "pixi.js";
import { ReactiveValue } from "../../lib/ReactiveValue";
export interface ICounterViewModel {
    $value: ReactiveValue<number>;
    value: number;
    minValue: number;
    maxValue: number;
    increment: () => void;
    decrement: () => void;
}
export declare class Counter extends Container {
    private vm;
    readonly headerText: string;
    private valueText;
    private labelText;
    private _subscription;
    constructor(vm: ICounterViewModel, headerText: string);
    destroy(): void;
    private increment;
    private decrement;
    private updateValue;
}
//# sourceMappingURL=CounterView.d.ts.map