/* eslint-disable no-extend-native */

String.prototype.hasVowels = function hasVowels() {
  /* This method returns true if there are vowels
     in a string and false for absence of vowels
  */
  const vowels = /[aeiou]/i;
  return vowels.test(this);
};

String.prototype.toUpper = function toUpper() {
  /* Converts a string to uppercase format */
  const lower = /[a-z]/g;
  return this.replace(lower, (letter => {
    return String.fromCharCode(letter.charCodeAt(0) - 32);
  }));
};

String.prototype.toLower = function toLower() {
  /* Converts a string to lowercase format */
  const upper = /[A-Z]/g;
  return this.replace(upper, letter => {
    return String.fromCharCode(letter.charCodeAt(0) + 32);
  });
};

String.prototype.ucFirst = function ucFirst() {
  /* Converts the first letter of a string to uppercase */
  const first = /^[a-z]/i;
  return first.exec(this)[0].toUpper() + this.slice(1);
};

String.prototype.isQuestion = function isQuestion() {
  /* Checks if a string is a question */
  const question = /\?$/;
  return question.test(this);
};

String.prototype.words = function words() {
  /* creates an array of the string */
  const boundary = /\W+/;
  return boundary.test(this) ? this.split(boundary) : this.match(/\S+/g);
};

String.prototype.wordCount = function wordCount() {
  /* Gives the count of words in a string */
  return this.words().length;
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
