/* eslint-disable no-extend-native */

String.prototype.hasVowels = function hasVowels() {
  /* This method returns true if there is a vowels
     in a string and false for absence of vowels
  */
  const vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};

String.prototype.toUpper = function toUpper() {
  /* Converts a string to uppercase format */
  let newString = '';
  const lower = new RegExp('[a-z]');
  for (let index = 0; index < this.length; index++) {
    if (lower.test(this[index])) {
      newString += String.fromCharCode((this.charCodeAt(index)) - 32);
    } else {
      newString += this[index];
    }
  }
  return newString;
};

String.prototype.toLower = function toLower() {
  /* Converts a string to lowercase format */
  let newString = '';
  const upper = new RegExp('[A-Z]');
  for (let index = 0; index < this.length; index++) {
    if (upper.test(this[index])) {
      newString += String.fromCharCode((this.charCodeAt(index)) + 32);
    } else {
      newString += this[index];
    }
  }
  return newString;
};

String.prototype.ucFirst = function ucFirst() {
  /* Converts the first letter of a string to uppercase */
  return [this.charAt(0).toUpper(), this.slice(1)].join('');
};

String.prototype.isQuestion = function isQuestion() {
  /* Checks if a string is a question */
  const question = new RegExp(/\?$/);
  return question.test(this);
};

String.prototype.words = function words() {
  /* Makes an array out of a string */
  const boundary = new RegExp(/\W+/);
  return this.split(boundary);
};

String.prototype.wordCount = function wordCount() {
  /* Gives the count of words in a string */
  let count = 0;
  const newArray = this.words();
  newArray.forEach(() => {
    count += 1;
  });
  return count;
};

String.prototype.toCurrency = function toCurrency() {
  /* Returns a currency format of a string */
  const floatString = parseFloat(this);
  const currencyString = floatString.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return currencyString;
};

String.prototype.fromCurrency = function fromCurrency() {
  /* Returns the number format of a string */
  return Number(this.replace(/,/, ''));
};
