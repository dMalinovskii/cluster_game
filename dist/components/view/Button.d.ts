import { Container } from "pixi.js";
interface ButtonOptions {
    text: string;
    width?: number;
    height?: number;
    strokeColor?: number;
    strokeWidth?: number;
    backgroundColor?: number;
    textColor?: number;
    fontSize?: number;
    onClick?: () => void;
}
export declare class Button extends Container {
    private background;
    private label;
    private isDown;
    private isOver;
    constructor(options: ButtonOptions);
    private onButtonDown;
    private onButtonUp;
    private onButtonOver;
    private onButtonOut;
    setText(text: string): void;
}
export {};
//# sourceMappingURL=Button.d.ts.map