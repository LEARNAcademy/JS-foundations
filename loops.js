// THE 4 TYPES OF LOOPS IN JAVASCRIPT

// 1. The classic for loop:

// This is the most common type of loop you will see used in javascript. It gives you the most control over how you are iterating over items by letting you define:

// 1. Where the count (index) starts 
// 2. When the function should end (a condition that at some point returns false)
// 3. What to do after each loop

// -------------------------- EXAMPLE 1 ----------------------------------------------------

// Can you guess what this loop will do?

// for(var i=0; i < 5; i++){
// 	console.log("Hello".repeat(i))
// }

// -------------------------- EXAMPLE 2 ----------------------------------------------------

// FOR loops can also leave off the last argument. Notice that examples 1 and 2 are functionally the same

// for(var i=0; i < 5;){
// 	console.log("Hello".repeat(i))
//  i++
// }

// ===========================================================================================

// The for in loop

// the for-in loop is specialized for iterating over the attributes of an object

// -------------------------- EXAMPLE 1 ----------------------------------------------------


// var spaceship = {
// 	captian: "Picard",
// 	firstMate: "Wesley",
// 	class: "Borg Cube",
// 	name: "Enterprise",
// 	capacity: 22100,
// 	currentIssues: ["Tribbles"]
// }
//
// for(let x in spaceship){ 
// 	console.log("this spaceship has a " + x + " " + spaceship[x])
// }

// ===========================================================================================

// The while loop

// repeats an action so long as a condition remains true

// -------------------------- EXAMPLE 1 ----------------------------------------------------

// var arr = []
//
// while(arr.length < 10) {
// 	arr.push("Waka "+i)
// 	i++
// }
//
// console.log("From the while loop: " + arr)

// ===========================================================================================

// The Do While loop

// -------------------------- EXAMPLE 1 ----------------------------------------------------

// var text;
// do {
// 	i++;
// 	text = "The number is " + i;
// 	console.log(text)
// }
// while(i < 10)
