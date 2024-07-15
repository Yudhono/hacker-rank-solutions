function getMoneySpent(keyboards, drives, b) {
  let maxSpend = -1;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const currentSpend = keyboards[i] + drives[j];
      if (currentSpend <= b && currentSpend > maxSpend) {
        maxSpend = currentSpend;
      }
    }
  }

  return maxSpend;
}
