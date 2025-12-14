import input from "./input.txt";
import example from "./example.txt";

const parsedInput = input.trim().split("\n");
const jolts: number[] = [];

for (let i = 0; i < parsedInput.length; i++) {
  const cells: string[] = parsedInput[i].split("");
  console.log(cells);

  // get the largest
  let largest = 0;
  let largestIdx = -1;
  for (let k = 0; k < cells.length - 1; k++) {
    if (+cells[k] <= largest) continue;
    largest = +cells[k];
    largestIdx = k;
  }

  console.log(largest, largestIdx);

  let largestSecondDigit = 0;
  for (let j = largestIdx + 1; j < cells.length; j++) {
    if (+cells[j] <= largestSecondDigit) continue;

    largestSecondDigit = +cells[j];
  }

  const joltage = largest * 10 + largestSecondDigit;
  console.log(joltage);
  jolts.push(joltage);
}

console.log(jolts.reduce((acc, curr) => acc + curr, 0));
