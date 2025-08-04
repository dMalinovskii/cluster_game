import { IGameConfigModel } from "../../../domain";
import { createGameConfig } from "../../../factories/gameConfigFactory";
import { ColorsViewModel } from "../ColorsViewModel";

describe("ColorsViewModel", () => {
    let gameConfig: IGameConfigModel;
    let viewModel: ColorsViewModel;

    beforeEach(() => {
        gameConfig = createGameConfig();

        gameConfig.colors = 3;
        gameConfig.maxColors = 5;

        viewModel = new ColorsViewModel(gameConfig);
    });

    test("should initialize with correct values", () => {
        expect(viewModel.value).toBe(3);
        expect(viewModel.minValue).toBe(2);
        expect(viewModel.maxValue).toBe(5);
    });

    test("should update value when gameConfig.colors changes", () => {
        const spy = jest.fn();
        viewModel.$value.subscribe(spy);

        gameConfig.colors = 4;

        expect(spy).toHaveBeenCalledWith(4);
        expect(viewModel.value).toBe(4);
    });

    test("increment() should increase colors by 1", () => {
        viewModel.increment();
        expect(gameConfig.colors).toBe(4);
    });

    test("decrement() should decrease colors by 1", () => {
        viewModel.decrement();
        expect(gameConfig.colors).toBe(2);
    });

    test("should not increment beyond maxValue", () => {
        gameConfig.colors = 5;

        viewModel.increment();
        expect(gameConfig.colors).toBe(5);
    });

    test("should not decrement below minValue", () => {
        gameConfig.colors = 2;

        viewModel.decrement();
        expect(gameConfig.colors).toBe(2);
    });
});
