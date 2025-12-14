import input from "./input.txt";
import example from "./example.txt";

const parsedInput = input.trim().split("\n");
const totalJolts: number[] = [];
const cellsToCollect = 12;

for (let i = 0; i < parsedInput.length; i++) {
  const cells: string[] = parsedInput[i].split("");
  console.log("searching: ", cells.join(""));

  // start from the right with current offset, 12 digits
  // and find the largest, there are a tie, use the leftest
  // record the idx, and on the next iteration start from
  // idx and digits - 1, its essentially a shrinking window

  let lo = 0;
  let hi = cells.length - 12;
  const collectedCells: number[] = [];

  // console.log(cells.slice(lo, hi));

  for (let r = 0; r < cellsToCollect; r++) {
    let maxCellIdx = hi;
    let maxCellJolt = -Infinity;

    // console.log("scanning: ", cells.slice(lo, hi));
    for (let j = hi; lo <= j; j--) {
      const jolt = +cells[j];
      if (jolt < maxCellJolt) continue;

      maxCellJolt = jolt;
      maxCellIdx = j;
    }

    collectedCells.push(maxCellJolt * Math.pow(10, cellsToCollect - r - 1));
    lo = maxCellIdx + 1;
    hi++;
  }

  const cellJolts = collectedCells.reduce((acc, curr) => acc + curr, 0);
  console.log("cell jolts:", cellJolts);
  totalJolts.push(cellJolts);
}

const sumOfJolts = totalJolts.reduce((acc, curr) => acc + curr, 0);
console.log("sum of all batteries: ", sumOfJolts);
