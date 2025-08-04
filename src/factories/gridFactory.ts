import { Grid } from "../components/view";
import { GridViewModel } from "../components/view-model";
import { IGameConfigModel } from "../domain";
import { CELLID_TO_COLORS } from "../constants/Color";
import { generateScreen } from "../domain/generateScreen";

export function createGrid(gameConfig: IGameConfigModel): Grid {
    const gridPresenter = new GridViewModel(
        generateScreen,
        gameConfig,
        CELLID_TO_COLORS
    );
    const gridView = new Grid(gridPresenter);
    return gridView;
}
