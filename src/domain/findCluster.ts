export type Cluster = Position[];
export type Position = {
    x: number;
    y: number;
};

export function findCluster(
    grid: number[][],
    minClusterSize: number
): Cluster[] {
    const alreadyChecked = new Set<string>();
    const clusters: Cluster[] = [];

    const inCluster = (col: number, row: number, ogId: number): boolean => {
        const id = grid[row][col];
        return id === ogId;
    };

    const getNeighbors = (
        col: number,
        row: number
    ): { x: number; y: number }[] => {
        const neighbors: Position[] = [];
        if (col > 0) neighbors.push({ y: row, x: col - 1 });
        if (col < grid[row].length - 1) neighbors.push({ y: row, x: col + 1 });
        if (row > 0) neighbors.push({ y: row - 1, x: col });
        if (row < grid.length - 1) neighbors.push({ y: row + 1, x: col });

        return neighbors;
    };

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const positionKey = `${row},${col}`;

            if (alreadyChecked.has(positionKey)) continue;

            const id = grid[row][col];

            const stack: Position[] = [{ y: row, x: col }];
            const currentCluster: Position[] = [];
            alreadyChecked.add(positionKey);

            while (stack.length > 0) {
                const pos = stack.pop()!;
                currentCluster.push(pos);

                for (const neighborPos of getNeighbors(pos.x, pos.y)) {
                    const neighborKey = `${neighborPos.y},${neighborPos.x}`;

                    if (
                        !alreadyChecked.has(neighborKey) &&
                        inCluster(neighborPos.x, neighborPos.y, id)
                    ) {
                        alreadyChecked.add(neighborKey);
                        stack.push(neighborPos);
                    }
                }
            }

            if (currentCluster.length >= minClusterSize) {
                clusters.push(currentCluster);
            }
        }
    }

    return clusters;
}
