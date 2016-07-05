[![Build Status](https://travis-ci.org/andela-tbaraza/String-Class.svg?branch=develop)](https://travis-ci.org/andela-tbaraza/String-Class)
# String-Class Extension

This is an extension of the inbuilt String class. Basically it adds other methods to this class.The methods' execution is similar to the normal String class methods. The extension has been implemented using javascript prototypes concept.

***

#Usage
* Install [NodeJs](https://nodejs.org/en/)
* Install httpster `npm install -g httpster`
* Clone the [repository](https://github.com/andela-tbaraza/String-Class.git)

***

# Running the tests

* On your terminal change directory to the root project folder.
* Start the server `httpster`.
* Navigate to http://localhost:3333/jasmine/SpecRunner.html on your browser to run the tests and use the functions on the console.

***

# Featured methods

### hasVowels
`This method returns true if there is a vowels in a string and false for absence of vowels
'toni'.hasVowels()
// returns
true`

### toUpper
`Converts a string to uppercase format`

### toLower
`Converts a string to lowercase format`

### ucFirst
`Converts the first letter of a string to uppercase`

### isQuestion
`Checks if a string is a question`

### wordCount
`Gives the count of words in a string`

### toCurrency
`Returns a currency format of a string`

### fromCurrency
`Returns the number format of a string`
