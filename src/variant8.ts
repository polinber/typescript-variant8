const a: number = 1.2;
const b: number = 0.48;

function safeAcos(x: number): number | null {
  if (x < -1 || x > 1) return null;
  return Math.acos(x);
}

function y(x: number): number | null {
  const numerator = b ** 3 + Math.sin(a * x) ** 2;
  const acosArg = b * x * x;
  const acosVal = safeAcos(acosArg);
  if (acosVal === null) return null;
  const denominator = acosVal + Math.exp(-x / 2);
  return numerator / denominator;
}

console.log("=== Задача А ===");
for (let x = 0.7; x <= 2.2 + 1e-9; x += 0.3) {
  const val = y(x);
  if (val === null) {
    console.log(`x = ${x.toFixed(4)}\tне определено`);
  } else {
    console.log(`x = ${x.toFixed(4)}\t y = ${val.toFixed(6)}`);
  }
}

console.log("\n=== Задача Б ===");
const points = [0.25, 0.36, 0.56, 0.94, 1.28];
for (const x of points) {
  const val = y(x);
  if (val === null) {
    console.log(`x = ${x.toFixed(4)}\tне определено`);
  } else {
    console.log(`x = ${x.toFixed(4)}\t y = ${val.toFixed(6)}`);
  }
}
export { y };
