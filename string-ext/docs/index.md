# String Class Extension

This is an extension of the inbuilt String class. Basically it adds other methods to this class.The methods' execution is similar to the normal String class methods. The extension has been implemented using javascript prototypes concept.


#Usage
* Install [NodeJs](https://nodejs.org/en/)
* Clone the [repository](https://github.com/andela-tbaraza/String-Class.git)
* Install the dependencies `$ npm install`

# Running on Node
* Get the node environment ` $ node`
* Require the source file
`> require('./src/string-class.js')`
* Use the various methods as specified in the featured     methods example

# Featured methods

### hasVowels
```javascript
let try1 = 'toni'.hasVowels() // returns true
let try2 = 'rtty'.hasVowels() // returns false
```

### toUpper
```javascript
let try1 = 'toni'.toUpper() // returns 'TONI'
let try2 = 'My day'.toUpper() // returns 'MY DAY'
```

### toLower
```javascript
let try1 = 'LORD'.toLower() // returns 'lord'
let try2 = '#1FBI Investigates'.toLower() // returns '#1fbi Investigates'
```
### ucFirst
```javascript
let try1 = 'toni'.ucFirst() // returns 'Toni'
let try2 = '33street'.ucFirst() // returns '33street'
```
### isQuestion
```javascript
let try1 = 'toni?'.isQuestion() // returns true
let try2 = 'rtty'.isQuestion() // returns false

```
### words
```javascript
let try1 = 'true, love'.words() returns // ['true', 'love']
let try2 = 'forget'.words() returns // ['forget']
```

### wordCount
```javascript
let try1 = 'God, is good'.wordCount() // returns 3
let try2 = 'yeah'.wordCount() // returns 1
```
### toCurrency
```javascript
let try1 = '12387'.toCurrency() // returns '12,387.00'
let try2 = '34'.toCurrency() // returns '34.00'
```
### fromCurrency
```javascript
let try1 = '5,673,392'.fromCurrency() // returns 5673392
let try2 = '4,696.56'.fromCurrency() // returns 4696.56
```

# Running the tests

* On your terminal change directory to the root project folder.
* Run `$ npm test`out
