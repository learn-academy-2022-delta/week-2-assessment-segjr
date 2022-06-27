// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
console.log(cohort.split(""))

// a) Your answer: ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '2']
// b) Verify and explain: My initial answer was correct because the split method is used to split a string into a substring array. Using ("") as an arguement for the method separates the everything within double quotations. Since the variable is one string within double quotations, the return will split each index, including the space, into an array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"))

// a) Your answer: syntax error
// b) Verify and explain: My initial answer was incorrect because the function returned undefined. My intial thought was that there would be an error, due to there being no statement to execute the string interpolation. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: My initial answer is correct becase the .map method will make a new array from a given array, with the same index lenth. Since the value in .map method is being multiplied by 2, it will be applied to each index value of the array in ordance with the arrow function in the .map method. 


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: My initial answer is correct because the .filter method will take an array and make a new array based on the evaluation passed through it. In this case, each value was evaluated to see if it was not evenly divisible by 2. If it was not, it would be returned in the new array. 


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: My initial answer is correct because the "." works as a path from the object (myCodingSkills) to one of the keys (languages), and the brackets indicate an index value that will be applied to said key. Since computers count from 0, the 0 index will be the first value of the key:value pair. That first value is JavaScript. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn {student: "George", cohort: "Bravo", year: 2022}
// b) Verify and explain: My initial answer is correct because the constructor method takes the given parameter and uses it as the name within the method when it returns the object created from the key:value pairs. The above method uses [this.] to reference the keys within the Learn class. The constructor method is used to create a new object. Since it is within the Learn class, Learn will be returned to associate the object with a class. Learn will work as a function to produce an object with the values assigned from the constructor keys. 
