function parse(input: string): Record<string, number>[] {
  return input
    .trim()
    .split("\n\n")
    .map((item) => item.split("\n"))
    .map((item) => {
      const a = item[0].match(/\d+/g)!.map((item) => +item);
      const b = item[1].match(/\d+/g)!.map((item) => +item);
      const p = item[2].match(/\d+/g)!.map((item) => +item);
      return { ax: a[0], ay: a[1], bx: b[0], by: b[1], px: p[0], py: p[1] };
    });
}

export function partOne(input: string): number {
  const machines = parse(input);

  let out = 0;
  for (let i = 0; i < machines.length; i++) {
    const { ax, ay, bx, by, px, py } = machines[i];
    if (px % gcd(ax, bx) !== 0 || py % gcd(ay, by) !== 0) continue;
    // console.log("processing", machines[i]);
    let min = Infinity;
    for (let k = 0; k <= 100; k++) {
      for (let j = 0; j <= 100; j++) {
        const x = ax * k + bx * j;
        const y = ay * k + by * j;
        if (x === px && y === py) {
          // console.log(x, y, px, py);
          min = Math.min(min, k * 3 + j);
          // console.log(min);
        }
      }
    }

    if (min === Infinity) continue;
    out += min;
  }

  return out;
}

export function partTwo(input: string): number {
  const machines = parse(input);

  for (const m of machines) {
    m.px += 1e13;
    m.py += 1e13;
  }

  let out = 0;
  for (let i = 0; i < machines.length; i++) {
    const { ax, ay, bx, by, px, py } = machines[i];
    console.log(px, gcd(ax, bx), px % gcd(ax, bx));
    console.log(py, gcd(ay, by), py % gcd(ay, by));
    if (px % gcd(ax, bx) !== 0 || py % gcd(ay, by) !== 0) continue;
    console.log("processing", machines[i]);
    let min = Infinity;
    for (let k = 0; k <= 100; k++) {
      for (let j = 0; j <= 100; j++) {
        const x = ax * k + bx * j;
        const y = ay * k + by * j;
        if (x === px && y === py) {
          console.log(x, y, px, py);
          min = Math.min(min, k * 3 + j);
          console.log(min);
        }
      }
    }

    if (min === Infinity) continue;
    out += min;
  }

  return out;
}

function gcd(a: number, b: number): number {
  for (let i = Math.min(a, b); i > 0; i--) {
    if (a % i === 0 && b % i === 0) return i;
  }
  return 0;
}
