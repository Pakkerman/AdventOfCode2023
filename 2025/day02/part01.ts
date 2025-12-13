import example from "./example.txt";
import input from "./input.txt";

const parsedInput = input.trim().split(",");

let sum = 0;
for (let i = 0; i < parsedInput.length; i++) {
  sum += invalidInputs(parsedInput[i]).reduce((acc, curr) => acc + curr, 0);
}

console.log(sum);

function invalidInputs(input: string): number[] {
  const lo = input.split("-")[0];
  const hi = input.split("-")[1];

  const output: number[] = [];
  for (let i = +lo; i <= +hi; i++) {
    const str = String(i);
    // console.log(str);
    if (str.length % 2 === 0) {
      const mid = str.length / 2;
      const first = str.substring(0, mid);
      const second = str.substring(mid);
      if (first === second) output.push(i);
    }
  }
  return output;
}
