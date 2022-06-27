// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

describe("byThree", () => {
    it("takes in a number as an argument and returns if the number is divisible by three or not", () => {
        expect(byThree(num1)).toEqual("15 is divisible by three")
        expect(byThree(num2)).toEqual("0 is divisible by three")
        expect(byThree(num3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.

//Pseudo Code:
// This program will allow the user to check if a number is divisible by three and return the result.
// Create a function expression (byThree())
// Create an if statement that evaluates if a given parameter is divisible by three
// Have the function return the string interpolation `${number} is divisible by three
/// Create an else if statement that evaluates if a given parameter is not divisible by three
// Have the function return the string interpolation `${number} is not divisible by three
// console log new function with challenge parameters

let byThree = (number) => {
    if(number % 3 == 0) {
        return `${number} is divisible by three`
    }else if(number % 3 !== 0) {
        return `${number} is not divisible by three`
    }
}

console.log(byThree(num1))
console.log(byThree(num2))
console.log(byThree(num3))

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("upCase", () => {
    it("takes in an array as an argument and returns an array with all strings capitalized", () => {
        expect(upCase(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(upCase(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// b) Create the function that makes the test pass.

// Pseudo Code:
// This program will allow the user to input an array of strings and return the array with the strings capitalized.
// Create a function expression. (upCase)
// Utilize a method on the parameter to return a new array (.map())
    // Within .map, utilize a method on the value parameter that will return a string object's index value. (charAt())
    // Within .map, utilize a method on the aforementioned method that will convert the casing of a string object to uppercase letters. (toUpperCase())
    // Within .map, utilize a method on a separated copy of the value parameter that will return the substring of a string by index value parameter. (.substr())
    // Within .map, utilize an operator to merge and return the two value parameters for the .map value. (+)
// Console log the new function with the challenge parameters. 


let upCase = (object) => {
    return object.map(x => {
        return x.charAt(0).toUpperCase() + x.substr(1)
    })
}

console.log(upCase(randomNouns1))
console.log(upCase(randomNouns2))

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("theVowel", () => {
    it("takes in a string as an argument and returns the index of the first vowel of the string", () => {
        expect(theVowel(vowelTester1)).toEqual(1)
        expect(theVowel(vowelTester2)).toEqual(0)
        expect(theVowel(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.

// Pseudo Code:
// This program will allow the user to enter a string and return the index of the first vowel of the string.
// Create a function expression. (theVowel)
// Create a variable that represents vowels. (v)
// Create a for statement within the function, that will begin at the 0 index, end at the index length of a given string, and will count up by 1 increment.
    // Within for, create a for statement that will begin at the 0 index, end at the index length of v, and will count up by 1 increment. 
        // Within for, create an if statement that will evaluate if the given index value of a string is equivalent to an index value of the variable. 
        // Have the function return the index of the given value if the evaluation is true. 
// Console log the new function with the challenge parameters.

let theVowel = (string) => {
    let v = ["a","e","i","o","u"]
    for(i = 0; i < string.length; i++) {
        for(j = 0; j < v.length; j++) {
            if(string[i] == v[j]) {
            return i
            }
        }
    }
}

console.log(theVowel(vowelTester1))
console.log(theVowel(vowelTester2))
console.log(theVowel(vowelTester3))