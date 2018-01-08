// Map is a very common method in modern javascript.
// But what does it do and how can you think about it?
// This file will show a for loop and map function that do the same thing

var people = [
	{
		name: "Larry",
		age: 5
	},
	{
		name: "Bob",
		age: 55
	},
	{
		name: "Leonard",
		age: 42
	},
	{
		name: "Sheldon",
		age: 80
	}
]

// If we just want to iterate through this list of people, we could do this:

// for(let i=0; i < people.length; i++){
// 	var person = people[i]
// 	console.log(person.name)
// }

// not too hard, but now....

// ======================================================================================

// If we wanted to programmaticaly make a change to every item in the people array, we could do something like this:

// var findBirthYear = function(input){
// 	var currentYear = new Date().getFullYear()
// 	// console.log( currentYear - input.age)
// 	input.birthYear = currentYear - input.age
// }
//
// for(let i=0; i < people.length; i++){
// 	var person = people[i]
// 	findBirthYear(person)
// 	console.log(person)
// }

// Here we have created a function to find the year each person was born by subtracting their age from the current year.
// We are calling that function inside the for loop and adding a birthYear attribute to each person in the people array.

// =======================================================================================

// Now lets take that exact same functionality and write it with Map

people.map(function(person){
	var currentYear = new Date().getFullYear()
	person.birthYear = currentYear - person.age
	console.log(person)
})

// Cleaner isn't it? Certainly fewer lines of code. The map method allows us to define a function and run that function on every item in an array, all in one step.

// Some more about Map:

// in map - the first argument passed is a placeholder for the item in the array at the current index.
// the second argument is the loop index
// consider this code:

// people.map(function(person, index){
// 	console.log(index)
// 	console.log(person)
// })

// running this code, we see the index increment from 0 to people.length -1
// person will show us the equivalent of people[index], this is one of the great things available to us when we use Map
