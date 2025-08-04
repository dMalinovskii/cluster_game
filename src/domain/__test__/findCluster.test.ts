import { findCluster } from "../findCluster";

describe("findCluster", () => {
    test("should return correct clusters", () => {
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

        expect(findCluster(screen, 3)).toEqual(cluster);
    });
});
