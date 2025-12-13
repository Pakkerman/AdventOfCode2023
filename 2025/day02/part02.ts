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
  outer: for (let i = +lo; i <= +hi; i++) {
    const str = String(i);
    for (let k = 1; k < str.length; k++) {
      if (str.length % k != 0) continue;

      const splittedStr: string[] = [];
      for (let j = 0; j < str.length; j += k) {
        splittedStr.push(str.substring(j, j + k));
      }

      if (splittedStr.every((item) => item === splittedStr[0])) {
        output.push(i);
        continue outer;
      }
    }
  }
  return output;
}
