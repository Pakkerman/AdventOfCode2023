import input from "./day01_input.txt";

const parsedInput: Array<string> = input.trim("").split("\n");

console.log(parsedInput);

let start = 50;
let counter = 0;
const endPoints: number[] = [];

for (let i = 0; i < parsedInput.length; i++) {
  const direction = parsedInput[i][0];
  let steps = Number(parsedInput[i].substring(1));

  // counter += Math.floor(steps / 100);
  // steps = steps % 100;

  switch (direction) {
    case "L":
      start -= steps;
      if (start <= -100) {
        counter += Math.abs(Math.floor(start / 100));
        start += Math.floor(start / 100) * 100;
      }
      if (start < 0) {
        start += 100;
        counter++;
      }

      endPoints.push(start);
      break;
    case "R":
      start += steps;
      if (100 < 100) {
        counter += Math.floor(start / 100);
        start -= Math.floor(start / 100) * 100;
      }
      if (100 < start) {
        start -= 100;
        counter++;
      }

      endPoints.push(start);
      break;
  }
}

console.log(endPoints);
console.log("password: ", counter);
