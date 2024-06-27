function isBigEnough(value) {
    return value >= 10;
  }

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

console.log(filtered);