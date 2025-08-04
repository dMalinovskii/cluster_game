import { generateScreen } from "../generateScreen";

describe("generateScreen", () => {
    test("should return correct screen", () => {
        const screen = generateScreen(3, 3, 3);
        expect(screen.length).toBe(3);
        screen.forEach((row) => {
            expect(row.length).toBe(3);
            row.forEach((cell) => {
                expect(cell).toBeGreaterThanOrEqual(0);
                expect(cell).toBeLessThan(3);
            });
        });
    });
});
