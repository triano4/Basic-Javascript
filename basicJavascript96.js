Basic JavaScript: Count Backwards With a For Loop

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for(var num=9; num > 0; num--){
  if(num%2 == 1){
    myArray.push(num);

  }
}