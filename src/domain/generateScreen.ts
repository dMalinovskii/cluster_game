import { random } from "../lib/random";

export function generateScreen(rows: number, cols: number, colors: number) {
    const grid: number[][] = [];
    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < cols; j++) {
            grid[i][j] = random(0, colors - 1);
        }
    }
    return grid;
}

export type Screen = number[][];

export type ScreenGenerator = typeof generateScreen;
