import { Heap } from "heap-js";

function parse(input: string): string[][] {
  return input
    .trim()
    .split("\n")
    .map((row) => row.split("").map((item) => item));
}

export function partOne(input: string): number {
  console.log(input);
  const grid = parse(input);

  let sx, sy;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const tile = grid[y][x];
      if (tile !== "S") continue;
      [sx, sy] = [x, y];
      break;
    }
  }

  const minHeap = new Heap<number[]>((a, b) => a[0] - b[0]);
  minHeap.init([[0, sx, sy, 1, 0]]);
  const seen = new Set<string>();
  seen.add(`${sx}-${sy}-0-1`);

  while (minHeap.length) {
    const [cost, x, y, dx, dy] = minHeap.pop()!;
    seen.add(`${x}-${y}-${dx}-${dy}`);
    if (grid[y][x] === "E") {
      console.log(cost, x, y, dx, dy);
      while (minHeap.length) console.log(minHeap.pop()[0]);
      return cost;
    }

    // console.log("visiting", cost, x, y);
    grid[y][x] = "x";
    for (const next of [
      [cost + 1, x + dx, y + dy, dx, dy],
      [cost + 1000, x, y, dy, -dx],
      [cost + 1000, x, y, -dy, dx],
    ]) {
      const [nextCost, nx, ny, ndx, ndy] = next;
      if (grid[ny][nx] === "#") continue;
      if (seen.has(`${nx}-${ny}-${ndx}-${ndy}`)) continue;

      minHeap.push([nextCost, nx, ny, ndx, ndy]);
    }
  }

  return 69;
}

const dirs = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

export function partTwo(input: string): number {}
