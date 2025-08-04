import { Application } from "pixi.js";

export function createApp(): Application {
    const app = new Application({
        width: 800,
        height: 600,
        backgroundColor: 0x808080,
        antialias: true,
    });

    const gameContainer = document.getElementById("gameContainer");
    if (gameContainer) {
        gameContainer.appendChild(app.view as HTMLCanvasElement);
    }
    return app;
}
