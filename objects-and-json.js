// plain javascript object

// - is a data type
// - information is stored in "attributes" - which are made up of a key - value pairs
// - attributes can store any type of value: strings, numbers, functions, arrays etc...
// - you will also hear them referred to object literals

// ----------------------------- EXAMPLE 1 ----------------------------------------------------
var car = {
	doors: 4,
	model: "Nissan",
	drive: function(name){
		console.log("go fast, " + name + this.doors)
	}
}

car.drive("bob")

console.log(car)

// ----------------------------- EXAMPLE 2 ----------------------------------------------------

// var user = {
// 	firstName: "Sharon",
// 	lastName: "Farmer",
// 	fullName: function(){
// 		return this.firstName + " " + this.lastName
// 	},
// 	status: "active",
// 	toggleStatus: function(){
// 		if(this.status === "active"){
// 			this.status = "inactive"
// 		} else {
// 			this.status = "active"
// 		}
// 	}
// }
//
// console.log(user.fullName())
//
// console.log(user.status)
//
// user.toggleStatus()
//
// console.log(user.status)

// ============================================================================================

// JSON
// - is a lightweight data transfer syntax in string form
// - shares a common structure with Javascript objects
// - information is stored in "attributes" - which are made up of a key - value pairs
// - attributes can store strings, numbers, other objects, and arrays  - BUT NOT functions
// - relies on a nested structure to provide quick access to data

// ----------------------------- EXAMPLE 1 ----------------------------------------------------

// var car = {
// 	"doors": 4,
// 	"model": "Nissan",
// 	"year": 1999,
// 	"gear": ["roofrack", "stereo"],
// 	"previousOwners": {
// 		"name": "bob",
// 		"years": "1999-2008",
// 		"maintenance": [
// 			{"brakes": "2000"}
// 		]
// 	}
// }
//
// console.log(car)
