THE 4 TYPES OF LOOPS IN JAVASCRIPT

// 1. The classic for loop:

// -------------------------- EXAMPLE 1 ----------------------------------------------------

// for(var i=0; i < 5; i++){
// 	console.log("Hello".repeat(i))
// }

// -------------------------- EXAMPLE 2 ----------------------------------------------------
// FOR loops can also leave off the last argument

// for(var i=0; i < 5; i++){
// 	console.log("Hello".repeat(i))
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

// -------------------------- EXAMPLE 2 ----------------------------------------------------

// var books = ["Tale of Two Cities", "Bridge to Terebithia", "Sword in the Stone", "Peter Rabbit", ""]
//
// for(book in books){
// 	console.log(book)
// 	console.log(books[book] + " was a really good book")
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

var text;
do {
	i++;
	text = "The number is " + i;
	console.log(text)
}
while(i < 10)
