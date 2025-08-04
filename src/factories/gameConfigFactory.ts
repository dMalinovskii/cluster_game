import { CELLID_TO_COLORS } from "../constants/Color";
import { GameConfigModel, IGameConfigModel } from "../domain";

export function createGameConfig(): IGameConfigModel {
    const gameConfig = new GameConfigModel({
        rows: 6,
        cols: 5,
        maxColors: Object.keys(CELLID_TO_COLORS).length - 1,
        colors: (Object.keys(CELLID_TO_COLORS).length - 1) / 2,
        minClusterSize: 3,
    });

    return gameConfig;
}
