// Experiment with anonymous functions and callbacks
// Author: Joey Longo & Chase Croy-Perrett
// Date: 5 Nov 2023

// Do you think regular math is too boring? With fan-favorite "Funny Numbers" (trademark pending)
// we can make any number the objectivley funniest version of itself!
function makeFunny(number) {
  var results = (number * 420)/69;
  return results;
}

//testing the function
console.log("3 made funny:", makeFunny(3));
makeFunny("7 made funny:", makeFunny(7));

//creating an array then printing
array = [9,1,32,69,420,24];
console.log("The array:", array);

//mapping function 1 onto the array
var result1 = array.map(makeFunny);
console.log("Array made funny by multiplying 420/69:", result1);

//mapping an anonymous function
var result2 = array.map(function(number){
    return number * Math.floor(69/420);
})
console.log("Array made funny by multiplying 69/420:", result2);



function main() {
  document.open();
  console.log("Main function started.");
  var orig = prompt("Please enter a number that you want to be made funnier!");
  // the code that makes everything happen
  document.writeln("The objectivley funnier version of your number, originally " + orig + ", now (multiplied by 420/69) is : "
  + makeFunny(orig) + " !");
}


main();