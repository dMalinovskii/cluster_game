import { Counter } from "../components/view";
import {
    ClusterSizeViewModel,
    ColorsViewModel,
    SizeViewModel,
} from "../components/view-model";
import { IGameConfigModel } from "../domain";

export function createDimentionCounter(
    dimension: "rows" | "cols",
    gameConfig: IGameConfigModel
): Counter {
    const sizePresenter = new SizeViewModel(gameConfig, dimension);
    return new Counter(
        sizePresenter,
        dimension === "rows" ? "Rows" : "Columns"
    );
}

export function createColorCounter(gameConfig: IGameConfigModel): Counter {
    const sizePresenter = new ColorsViewModel(gameConfig);
    return new Counter(sizePresenter, "Colors");
}

export function createClusterSizeCounter(
    gameConfig: IGameConfigModel
): Counter {
    const sizePresenter = new ClusterSizeViewModel(gameConfig);
    return new Counter(sizePresenter, "Colors");
}
