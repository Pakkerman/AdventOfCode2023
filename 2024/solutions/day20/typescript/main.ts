function parse(input: string): string[][] {
  return input
    .trim()
    .split("\n")
    .map((row) => row.split(""));
}

export function partOne(input: string): number {
  const grid = parse(input);
  let sx, sy, ex, ey;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "S") {
        sx = x;
        sy = y;
      }
      if (grid[y][x] === "E") {
        ex = x;
        ey = y;
      }
    }
  }

  console.log(sx, sy, ex, ey);
}

export function partTwo(input: string): number {}
