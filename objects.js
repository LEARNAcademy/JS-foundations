// INTRO TO JS OBJECTS

// Objects are a data type in javascript, just like strings, numbers, and booleans

// You can recognise Objects because they are put inside of curly brackets {} and saved inside a variable (exactly the way we do with strings and numbers).

// Objects look a little more complex than just strings and numbers though, because they contain lots of information, instead of just one peice of info at a time.

// Objects organize the information inside them using key: value pairs. The keys of an object never change, but the values associated with each key can change.

// In this scooter object, we see many key: value pairs. You will see that the value associated with a key can be any js type - number, string, array, function, etc ...

var scooter = {
	wheels: 2,
	color: "red",
	gear: ["high performance exhaust", "saddle bags", "red helmet", "cool mirrors", "radio"],
	speed: 60,
	maxPassengers: 2,
	passengersList: [],
	// this accelerate attribute holds a function. When a function belongs to an attribute, we call it a "method"
	accelerate: function(){
		if(this.speed <= 70){
			this.speed += 10;
			return this.speed
		} else if(this.speed >= 80) {
			console.log("scooter can't")
		} else {
			console.log("there was an issue")
		}
	},

	spaceLeft: function(numPeople){
		if(numPeople > this.maxPassengers){
			console.log("no room")
			return false
		} else {
			console.log(this.maxPassengers - numPeople + " spots remaining")
			return true
		}
	}
}

// ACCESSING INFORMATION FROM Objects

// ....great. We've made a beatiful red scooter object with lots of attributes. But what can we do with it? How can we use the information we've stored in it?

// We can access information stored in an object using what is called "dot notation". Like this:

console.log(scooter.color);

// the above logs "red". What did we just do? We located the scooter object and then found the attribute key called "color". The key "color" held the string "red", so that is what we get.

// You can try this with any attribute we stored in the scooter object - try putting different keys into the console log below, what do you get when the attribute holds a string? What happends when the attribute holds a method?

console.log()

// INTERACTING WITH OBJECTS

// We have our scooter object, and we can run the methods we stored in it, but how can we interact with the object from the outside? Consider the following functions to see how objects can behave as part of a larger program that finds rides for people:

var riderQue = ["Leonard", "Sheldon", "Amy", "Penny", "Bob"]

function assignRiders(vehicle, riders){
	for(rider in riders){
		if(vehicle.passengersList.length < vehicle.maxPassengers ){
			vehicle.passengersList.push(riders.shift())
		} else {
			console.log("vehicle: " + vehicle.passengersList + " Que: " + riders);
			return
		}
	}
}

assignRiders(scooter, riderQue)
