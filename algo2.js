var list = [
  [0, 1, 5, 2],
  [7, 8, 9, 3],
  [4, 5, 6, 2],
  [6, 4, 2, 1],
  [5, 7, 7, 5]
];

var totalFives = 0;
var largestNumber = Number.MIN_SAFE_INTEGER; // Initialize with the smallest possible integer

for (var i = 0; i < list.length; i++) {
  for (var j = 0; j < list[i].length; j++) {
      if (list[i][j] === 5) {
          totalFives++;
      }

      if (list[i][j] > largestNumber) {
          largestNumber = list[i][j];
      }
  }
}

console.log("Total number of 5:", totalFives);
console.log("Largest number in the array:", largestNumber);
