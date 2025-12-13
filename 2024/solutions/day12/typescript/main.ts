function parse(input: string): string[][] {
  return input
    .trim()
    .split("\n")
    .map((row) => row.split(""));
}

export function partOne(input: string): number {
  const grid = parse(input);
  const rows = grid.length;
  const cols = grid[0].length;

  const regions = [];
  const seen: boolean[][] = Array.from({ length: rows }, () =>
    new Array(cols).fill(false),
  );

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (seen[y][x]) continue;

      seen[y][x] = true;
      const region = new Set<string>();
      const queue = [[y, x]];
      const tile = grid[y][x];
      while (queue.length) {
        const [cy, cx] = queue.shift()!;
        for (const [ny, nx] of [
          [cy - 1, cx],
          [cy + 1, cx],
          [cy, cx - 1],
          [cy, cx + 1],
        ]) {
          if (ny < 0 || rows <= ny) continue;
          if (nx < 0 || cols <= nx) continue;
          if (tile !== grid[ny][nx]) continue;
          if (region.has(`${ny},${nx}`)) continue;

          region.add(`${ny},${nx}`);
          queue.push([ny, nx]);
        }
        for (const id of region.values()) {
          const [y, x] = id.split(",");
          seen[y][x] = true;
        }
      }
    }
  }

  console.log(seen);
  return 0;
}

export function partTwo(input: string): number {}
