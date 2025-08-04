import { Application, Container, DisplayObject } from "pixi.js";

export function centralizePivot(graphics: Container) {
    graphics.pivot.x = graphics.width / 2;
    graphics.pivot.y = graphics.height / 2;
}
export function centralizeOnScreen(container: Container, app: Application) {
    container.x = app.view.width / 2;
    container.y = app.view.height / 2;
}
