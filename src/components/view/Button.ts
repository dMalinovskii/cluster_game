import { Container, Graphics, Text } from "pixi.js";
import { Color } from "../../constants/Color";

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

export class Button extends Container {
    private background: Graphics;
    private label: Text;
    private isDown: boolean = false;
    private isOver: boolean = false;

    constructor(options: ButtonOptions) {
        super();
        options.width = options.width || 150;
        options.height = options.height || 50;

        this.background = new Graphics();

        this.background.lineStyle({
            color: options.strokeColor || Color.BLACK,
            width: options.strokeWidth || 1,
        });

        this.background.beginFill(options.backgroundColor || Color.WHITE);
        this.background.drawRoundedRect(
            -(options.width / 2),
            -(options.height / 2),
            options.width,
            options.height,
            10
        );
        this.background.endFill();
        this.addChild(this.background);

        this.label = new Text(options.text, {
            fill: options.textColor || Color.BLACK,
            fontSize: options.fontSize || 16,
            fontWeight: "bold",
        });

        this.label.anchor.set(0.5);

        this.addChild(this.label);

        this.interactive = true;
        this.buttonMode = true;

        this.on("pointerdown", this.onButtonDown)
            .on("pointerup", this.onButtonUp)
            .on("pointerupoutside", this.onButtonUp)
            .on("pointerover", this.onButtonOver)
            .on("pointerout", this.onButtonOut);

        if (options.onClick) {
            this.on("pointertap", options.onClick);
        }
    }

    private onButtonDown(): void {
        this.isDown = true;
        this.background.tint = Color.DARK_GREY;
    }

    private onButtonUp(): void {
        this.isDown = false;
        if (this.isOver) {
            this.background.tint = Color.VERY_LIGHT_GREY;
        } else {
            this.background.tint = Color.WHITE;
        }
    }

    private onButtonOver(): void {
        this.isOver = true;
        if (!this.isDown) {
            this.background.tint = Color.VERY_LIGHT_GREY;
        }
    }

    private onButtonOut(): void {
        this.isOver = false;
        if (!this.isDown) {
            this.background.tint = Color.WHITE;
        }
    }

    public setText(text: string): void {
        this.label.text = text;
    }
}
