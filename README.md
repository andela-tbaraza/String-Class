[![Build Status](https://travis-ci.org/andela-tbaraza/String-Class.svg?branch=develop)](https://travis-ci.org/andela-tbaraza/String-Class)
[![Coverage Status](https://coveralls.io/repos/github/andela-tbaraza/String-Class/badge.svg?branch=develop)](https://coveralls.io/github/andela-tbaraza/String-Class?branch=develop)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bd92ddbee7404039bb176d0a3aa6fcca)](https://www.codacy.com/app/tonida-baraza/String-Class?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=andela-tbaraza/String-Class&amp;utm_campaign=Badge_Grade)

# String-Class Extension

This is an extension of the inbuilt String class. Basically it adds other methods to this class.The methods' execution is similar to the normal String class methods. The extension has been implemented using javascript prototypes concept.

***

#Usage
* Install [NodeJs](https://nodejs.org/en/)
* Clone the [repository](https://github.com/andela-tbaraza/String-Class.git)
* Install the dependencies `$ npm install`


# Running on Node
* Get the node environment ` $ node`
* Require the source file
`> require('./src/string-class.js')`
* Use the various methods as specified in the featured     methods example


***

# Running the tests

* On your terminal change directory to the root project folder.
* Run `$ npm test`

***

# Featured methods

### hasVowels
```javascript
let try1 = 'toni'.hasVowels() // returns true
let try2 = 'rtty'.hasVowels() returns false
```

### toUpper
```javascript
let try1 = 'toni'.toUpper() returns 'TONI'
let try2 = 'My day'.toUpper() returns 'MY DAY'
```

### toLower
```javascript
let try1 = 'LORD'.toLower() returns 'lord'
let try2 = '#1FBI Investigates'.toLower() returns '#1fbi Investigates'
```
### ucFirst
```javascript
let try1 = 'toni'.ucFirst() returns 'Toni'
let try2 = '33street'.ucFirst() returns '33street'
```
### isQuestion
```javascript
let try1 = 'toni?'.isQuestion() returns true
let try2 = 'rtty'.isQuestion() returns false

```
### words
```javascript
let try1 = 'true, love'.words() returns ['true', 'love']
let try2 = 'forget'.words() returns ['forget']
```

### wordCount
```javascript
let try1 = 'God, is good'.wordCount() returns 3
let try2 = 'yeah'.wordCount() returns 1
```
### toCurrency
```javascript
let try1 = '12387'.toCurrency() returns '12,387.00'
let try2 = '34'.toCurrency() returns '34.00'
```
### fromCurrency
```javascript
let try1 = '5,673,392'.hasVowels() returns 5673392
let try2 = '4,696.56'.hasVowels() returns 4696.56
```
