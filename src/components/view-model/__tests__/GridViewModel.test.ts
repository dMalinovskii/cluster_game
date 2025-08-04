import { CELLID_TO_COLORS } from "../../../constants/Color";
import { Cluster, IGameConfigModel, ScreenGenerator } from "../../../domain";
import { createGameConfig } from "../../../factories/gameConfigFactory";
import { GridViewModel } from "../GridViewModel";

describe("GridViewModel", () => {
    let findCluster: (grid: number[][], minClusterSize: number) => Cluster[];
    const screen = [
        [3, 6, 8, 9, 6],
        [0, 4, 7, 4, 9],
        [8, 9, 11, 4, 2],
        [6, 3, 5, 2, 2],
        [11, 7, 6, 3, 2],
        [6, 0, 10, 10, 10],
    ];
    const cluster = [
        [
            {
                y: 2,
                x: 4,
            },
            {
                y: 3,
                x: 4,
            },
            {
                y: 4,
                x: 4,
            },
            {
                y: 3,
                x: 3,
            },
        ],
        [
            {
                y: 5,
                x: 2,
            },
            {
                y: 5,
                x: 3,
            },
            {
                y: 5,
                x: 4,
            },
        ],
    ];

    let screenGenerator: ScreenGenerator;
    let gameConfig: IGameConfigModel;

    let viewModel: GridViewModel;

    beforeEach(() => {
        gameConfig = createGameConfig();
        screenGenerator = () => screen;
        findCluster = () => cluster;

        viewModel = new GridViewModel(
            screenGenerator,
            gameConfig,
            CELLID_TO_COLORS,
            findCluster
        );
    });
    test("should set screen and cluster", () => {
        viewModel.generateGrid();

        expect(viewModel.screen).toEqual(screen);
        expect(viewModel.cluster).toEqual(cluster);
    });
});
