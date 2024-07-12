const steps = 8;
const path = "DDUUUUDD";

function countingValleys(steps, path) {
  const splittedSteps = path.split("");
  let valleys = 0;
  let seaLevel = 0;

  for (let i = 0; i < splittedSteps.length; i++) {
    if (splittedSteps[i] === "U") {
      seaLevel++;
    } else {
      seaLevel--;
    }
    if (seaLevel === 0 && splittedSteps[i] === "U") {
      valleys++;
    }
  }

  return valleys;
}

console.log(countingValleys(steps, path));
