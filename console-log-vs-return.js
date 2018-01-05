// What is the difference between console.log and return?
// Take a look at these examples:

// We can console.log and return something from the same function.
// There can be as many console.logs as we want, but javascript only allows one return

var myfunc = function(){
	console.log("hi")
	return 1+1
}

// When we run this, we see both "hi" and 2

// So what's the difference?

// console.log is like a personal note.
// It is a way for you (the developer) to take a look at what's going on in your program.
// You can't save the value of a console.log to a variable,
// in fact your program can't use the value from a console.log at all

// return on the other hand, is accessible to the rest of your program.

// There are two really important things abour return:

// ------------------------------------ RETURN PART 1 -----------------------------------

// The first thing is that we can save the value returned from a function into a variable:

var savedvalue = myfunc()

// calling myfunc() generates a return, and the value of that return can be saved
// we can then log whats inside our new savedvalue:

console.log(savedvalue)

// ------------------------------------ RETURN PART 2 -----------------------------------

// the second really important thing about return is that it immediately ends a function.

var myfunc2 = function(){
	var num = 1
	return num + num
	num = 6
	console.log(num)
}

// nothing after the return will be read by javascript - lines 43 and 44 will not be computed
