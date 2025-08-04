import { Container } from "pixi.js";

import { centralizeOnScreen } from "./lib/centralizePosition";

import {
    createApp,
    createClusterSizeCounter,
    createColorCounter,
    createDimentionCounter,
    createGameConfig,
    createGrid,
} from "./factories";
import { Button } from "./components/view";

(async () => {
    const app = createApp();
    const gridContainer = new Container();

    centralizeOnScreen(gridContainer, app);

    app.stage.addChild(gridContainer);

    const gameConfig = createGameConfig();

    const gridView = createGrid(gameConfig);

    const clusterSizeView = createClusterSizeCounter(gameConfig);

    const rowSizeView = createDimentionCounter("rows", gameConfig);
    const colSizeView = createDimentionCounter("cols", gameConfig);
    const colorsView = createColorCounter(gameConfig);

    app.stage.addChild(clusterSizeView);
    clusterSizeView.x = 100;
    clusterSizeView.y = 70;

    app.stage.addChild(rowSizeView);
    rowSizeView.x = 300;
    rowSizeView.y = 70;

    app.stage.addChild(colSizeView);
    colSizeView.x = 500;
    colSizeView.y = 70;

    app.stage.addChild(colorsView);
    colorsView.x = 700;
    colorsView.y = 70;

    const button = new Button({
        text: "Start",
        onClick: () => gridView.fill(),
    });

    button.x = app.view.width / 2;
    button.y = app.view.height - 75;

    app.stage.addChild(button);
    gridContainer.addChild(gridView);
})();
