// Number of gifts in Twelve Days of Christmas

const { Console } = require("console");

var n = 0; // day number 1..12
var noDayPresents = 0;
var totalNoPresents = 0;

for (n=1; n <= 12; n++) {
  noDayPresents = n * (12 - n + 1);
  console.log("On day " + n + ", there were " 
    + noDayPresents + " presents");
    totalNoPresents += noDayPresents;
}

console.log("The total number of presents is: " 
  + totalNoPresents);

  // Output
  /*
  On day 1, there were 12 presents
On day 2, there were 22 presents
On day 3, there were 30 presents
On day 4, there were 36 presents
On day 5, there were 40 presents
On day 6, there were 42 presents
On day 7, there were 42 presents
On day 8, there were 40 presents
On day 9, there were 36 presents
On day 10, there were 30 presents
On day 11, there were 22 presents
On day 12, there were 12 presents
The total number of presents is: 364
*/
