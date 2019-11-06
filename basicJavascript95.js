Basic JavaScript: Iterate Odd Numbers With a For Loop

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for(var num = 0; num < 10; num++){
  if (num%2 == 1){
    myArray.push(num);
  }
}