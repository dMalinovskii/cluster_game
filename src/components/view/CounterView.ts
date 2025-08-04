import { Container, Graphics, IDestroyOptions, Text } from "pixi.js";
import { Color } from "../../constants/Color";
import { ReactiveValue, Subscription } from "../../lib/ReactiveValue";
import { Button } from "./Button";
export interface ICounterViewModel {
    $value: ReactiveValue<number>;
    value: number;
    minValue: number;
    maxValue: number;
    increment: () => void;
    decrement: () => void;
}
export class Counter extends Container {
    private valueText: Text;
    private labelText: Text;
    private _subscription: Subscription;

    constructor(private vm: ICounterViewModel, readonly headerText: string) {
        super();

        const minusButton = new Button({ text: "-", width: 40, height: 40 });
        minusButton.position.set(-40, 0);
        this.addChild(minusButton);

        this.valueText = new Text(this.vm.$value.value.toString(), {
            fontFamily: "Arial",
            fontSize: 24,
            fill: Color.BLACK,
        });
        this.labelText = new Text(this.headerText, {
            fontFamily: "Arial",
            fontSize: 24,
            fill: Color.BLACK,
        });
        this.labelText.y = -40;
        this.labelText.anchor.set(0.5);
        this.valueText.anchor.set(0.5);
        this.addChild(this.valueText);
        this.addChild(this.labelText);

        const plusButton = new Button({ text: "+", width: 40, height: 40 });

        plusButton.position.set(40, 0);
        this.addChild(plusButton);

        minusButton.on("pointerdown", () => this.decrement());
        plusButton.on("pointerdown", () => this.increment());

        this._subscription = this.vm.$value.subscribe(() => {
            this.updateValue();
        });
    }
    destroy(): void {
        super.destroy();
        this._subscription();
    }

    private increment(): void {
        if (this.vm.value < this.vm.maxValue) {
            this.vm.increment();
            this.updateValue();
        }
    }

    private decrement(): void {
        if (this.vm.value > this.vm.minValue) {
            this.vm.decrement();
            this.updateValue();
        }
    }

    private updateValue(): void {
        this.valueText.text = this.vm.value.toString();
    }
}
