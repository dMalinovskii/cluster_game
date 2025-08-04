import { GameConfigModel, IGameConfigModel } from "../../../domain";
import { createGameConfig } from "../../../factories/gameConfigFactory";
import { ClusterSizeViewModel } from "../ClusterSizeViewModel";

describe("ClusterSizeViewModel", () => {
    let gameConfig: IGameConfigModel;
    let vm: ClusterSizeViewModel;

    beforeEach(() => {
        gameConfig = createGameConfig();

        vm = new ClusterSizeViewModel(gameConfig);
    });

    test("should return correct initial values", () => {
        expect(vm.value).toBe(3);
        expect(vm.minValue).toBe(1);
        expect(vm.maxValue).toBe(30);
    });

    test("should update $value when gameConfig.minClusterSize changes", () => {
        const spy = jest.fn();
        vm.$value.subscribe(spy);

        gameConfig.minClusterSize = 3;
        expect(spy).toHaveBeenCalledWith(3);
        expect(vm.value).toBe(3);
    });

    test("increment() should increase minClusterSize by 1", () => {
        gameConfig.minClusterSize = 3;
        vm.increment();
        expect(gameConfig.minClusterSize).toBe(4);
    });

    test("decrement() should decrease minClusterSize by 1", () => {
        gameConfig.minClusterSize = 3;
        vm.decrement();
        expect(gameConfig.minClusterSize).toBe(2);
    });

    test("should not decrement below minValue", () => {
        gameConfig.minClusterSize = 1;
        vm.decrement();
        expect(gameConfig.minClusterSize).toBe(1);
    });

    test("should not increment above maxValue", () => {
        gameConfig.minClusterSize = 30;
        vm.increment();
        expect(gameConfig.minClusterSize).toBe(30);
    });
});
