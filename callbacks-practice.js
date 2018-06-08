
// Callbacks Practice

// Consider this variable:
var sites = ["codepen.io", "codecademy.com", "coursera.org", "egghead.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]

// ----------------------------------------- First, lets start with some normal functions

// Exercise 1
// Declare a named function called dotCom that takes in one string as an argument and determines if that string contains ".com" (Should return either true or false). Test the function by looping over the sites array, and call your dotCom function on each item.

// Exercise 2
// Declare a named function called dotIo that takes in one string as an argument and determines if that string contains ".io". Test the function by looping over the sites array, and call your dotCom function on each item.

// Exercise 3
// Write a function called dotOrg that determines if a string contains .org. Notice how similar it is to Exercise 1 & 2? Not very DRY, but that's ok for now.

// Exercise 4
// Time to refactor. Create a HIGHER ORDER FUNCTION called loopOver that takes in two arguments, an array and a function. Your function should loop over each item in the array and call the function on each item. 

// Exercise 5
// Call your loopOver function to find all ".com" websites in the sites array.

// Exercise 6
// Call your loopOver function to find all ".io" websites in the sites array.

// Exercise 9
// Call your loopOver function to find all ".org" websites in the sites array.

// Exercise 10
// Now, instead of your home made loopOver function, use an array method that takes your dotCom function as a callback and returns the ".com" sites from the array. 


