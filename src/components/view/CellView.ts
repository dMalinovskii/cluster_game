import { Container, Graphics, Text } from "pixi.js";
import { Color, LIGHT_COLORS } from "../../constants/Color";
import { centralizePivot } from "../../lib/centralizePosition";

export type CellOptions = {
    rowId: number;
    colId: number;
    x: number;
    y: number;
    width: number;
    height: number;
    color: Color;
};

export class Cell extends Container {
    constructor(readonly options: CellOptions) {
        super();
        this.graphics = new Graphics();

        this.graphics
            .lineStyle({ color: Color.BLACK, width: 1 })
            .beginFill(this.options.color)
            .drawRect(0, 0, this.options.width, this.options.height)
            .endFill();
        this.graphics.x = this.options.x;
        this.graphics.y = this.options.y;

        this.addChild(this.graphics);
    }

    private graphics!: Graphics;

    highlight() {
        const text = new Text("!");

        const fill = LIGHT_COLORS.includes(this.options.color)
            ? Color.BLACK
            : Color.WHITE;

        text.style = {
            fontFamily: "Arial",
            fontSize: 20,
            fill: fill,
        };
        text.x = this.options.width / 2;
        text.y = this.options.height / 2;
        centralizePivot(text);
        this.graphics.addChild(text);
    }
}
