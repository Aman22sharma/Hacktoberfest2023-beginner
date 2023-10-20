function printDiamondPattern(n) {
  if (n % 2 === 0) {
    n++; // Make sure n is odd for a symmetric diamond
  }

  const midpoint = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 0; j < n; j++) {
      if (j >= midpoint - i && j <= midpoint + i) {
        line += '*';
      } else {
        line += ' ';
      }
    }

    console.log(line);
  }
}

// Change the value of n to adjust the size of the diamond
const n = 7;
printDiamondPattern(n);
