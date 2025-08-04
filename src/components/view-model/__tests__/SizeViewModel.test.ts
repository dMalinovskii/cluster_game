import { IGameConfigModel } from "../../../domain";
import { createGameConfig } from "../../../factories/gameConfigFactory";
import { ColorsViewModel } from "../ColorsViewModel";
import { SizeViewModel } from "../SizeViewModel";

describe("ColorsViewModel", () => {
    let gameConfig: IGameConfigModel;
    let viewModel: SizeViewModel;

    beforeEach(() => {
        gameConfig = createGameConfig();

        gameConfig.rows = 3;

        viewModel = new SizeViewModel(gameConfig, "rows");
    });

    test("should initialize with correct values", () => {
        expect(viewModel.value).toBe(3);
        expect(viewModel.minValue).toBe(1);
        expect(viewModel.maxValue).toBe(15);
    });

    test("should update value when gameConfig.colors changes", () => {
        const spy = jest.fn();
        viewModel.$value.subscribe(spy);

        gameConfig.rows = 4;

        expect(spy).toHaveBeenCalledWith(4);
        expect(viewModel.value).toBe(4);
    });

    test("increment() should increase colors by 1", () => {
        viewModel.increment();
        expect(gameConfig.rows).toBe(4);
    });

    test("decrement() should decrease colors by 1", () => {
        viewModel.decrement();
        expect(gameConfig.rows).toBe(2);
    });

    test("should not increment beyond maxValue", () => {
        gameConfig.rows = 15;

        viewModel.increment();
        expect(gameConfig.rows).toBe(15);
    });

    test("should not decrement below minValue", () => {
        gameConfig.rows = 1;

        viewModel.decrement();
        expect(gameConfig.rows).toBe(1);
    });
});
