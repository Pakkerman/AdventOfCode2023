import input from "./input.txt";
import example from "./example.txt";

// part2: if the paper roll can be access, also it can be removed.

const parsedInput = input.trim().split("\n");
const matrix = Array.from({ length: parsedInput.length }, (_, i) =>
  parsedInput[i].split(""),
);

const dirs = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

let totalRemoved = 0;
let checkRemovableNextIteration = true;
while (checkRemovableNextIteration) {
  let totalRemovedThisIteration = 0;

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const curr = matrix[y][x];
      if (curr === ".") continue;
      let paperRollCount = 4;

      for (let d = 0; d < dirs.length; d++) {
        if (paperRollCount <= 0) break;

        const [yoff, xoff] = dirs[d];

        const scanX = x + xoff;
        const scanY = y + yoff;
        const scanTarget = matrix?.[scanY]?.[scanX];
        if (!scanTarget) continue;

        if (scanTarget === "@") {
          paperRollCount--;
        }
      }

      if (paperRollCount) {
        matrix[y][x] = ".";
        totalRemoved++;
        totalRemovedThisIteration++;
      }
    }
  }
  console.log("removed: ", totalRemoved);

  if (!totalRemovedThisIteration) {
    checkRemovableNextIteration = false;
  }
}

console.log("total paper rolls removed: ", totalRemoved);
