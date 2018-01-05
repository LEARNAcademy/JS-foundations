// var

// An all purpose variable where you can store values

var array = [1, 2, 3, 4, 5, 6]

for(var i = 0; i < array.length; i++){
	console.log(array[i])
}

console.log(i) // I can log the value of i outside of the for loop, because it is in the global scope

// ==================================================================================================================

// let

// A locally scoped variable, useful in loops and conditionals

var array = [1, 2, 3, 4, 5, 6]

for(let i = 0; i < array.length; i++){
	console.log(array[i])
}

console.log(i) // this will return an error, since i was scoped to the for loop using let

// ==================================================================================================================

// const

// A locally scoped variable who's value cannot be re-assigned after you set it. 
// It will protect you from accidently changing the type or value of a variable.

const num = 5;
var str = "3";

// this returns an error because you can't re-assign a const value:
num = 6; 

// BUT....
// if const is of type object, it cannot be re-assigned to a new type
// but the attributes or values INSIDE of it can be changed. See below:

const car = {
	doors: 4,
	wheels: 4
}

// I can change the value of car.doors: 

car.doors = 5 

console.log(car.doors)

// I can't change car from an object to an array

car = [1, 2, 3] 
