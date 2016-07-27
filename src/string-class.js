/* eslint-disable no-extend-native*/
/* eslint-disable prefer-template*/

String.prototype.hasVowels = function hasVowels() {
  /* This method returns true if there are vowels
     in a string and false for absence of vowels
  */
  const vowels = /[aeiou]/i;
  return vowels.test(this);
};

String.prototype.toUpper = function toUpper() {
  /* Converts a string to uppercase format*/
  const lower = /[a-z]/g;
  return this.replace(lower, letter => String.fromCharCode(letter.charCodeAt() - 32));
};

String.prototype.toLower = function toLower() {
  /* Converts a string to lowercase format*/
  const upper = /[A-Z]/g;
  return this.replace(upper, letter => String.fromCharCode(letter.charCodeAt() + 32));
};

String.prototype.ucFirst = function ucFirst() {
  /* Converts the first letter of a string to uppercase*/
  const first = /^[a-z]/i;
  return first.test(this) ? this[0].toUpper() + this.slice(1) : this;
};

String.prototype.isQuestion = function isQuestion() {
  /* Checks if a string is a question*/
  const question = /\?$/;
  return question.test(this);
};

String.prototype.words = function words() {
  /* creates an array of the string*/
  const testCase = /^\w/;
  return testCase.test(this) ? this.trim().split(' ') : [];
};

String.prototype.wordCount = function wordCount() {
  /* Gives the count of words in a string*/
  return this.words().length;
};

String.prototype.toCurrency = function toCurrency() {
  /* Returns a currency format of a string */
  return /[0-9]/.test(this) ? parseFloat(this).toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,') : 'NaN';
};

String.prototype.fromCurrency = function fromCurrency() {
  /* Returns the number format of a string*/
  return Number(this.replace(/,/, ''));
};

String.prototype.numberWords = function numberWords() {
  /* returns the numbers in words*/
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return this.replace(/[0-9]/g, (digit => words[digit] + ' ')).trim();
};

String.prototype.startWith = function startWith(start) {
  /* affirms if the string starts with the specified input returns false if not*/
  const match = /(^)(\S+)/i.exec(this);
  return match.includes(start);
};

String.prototype.endWith = function endWith(end) {
  /* affirms if the string ends with a specified input returns false if not*/
  const match = /(\S+)($)/i.exec(this);
  return match.includes(end);
};

String.prototype.alternatingCase = function alternatingCase() {
  /* returns each letter in a string in alternating cases*/
  let count = 0;
  const testCase = /[a-z]/gi;
  let final = '';

  for (const letter of this) {
    if (letter.match(testCase)) {
      final = final.concat(count % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase());
      count++;
    } else {
      final = final.concat(letter);
    }
  }
  return final;
};

String.prototype.inverseCase = function inverseCase() {
  /* returns each letter in a string in inverse of its original case*/
  const testCase = /[a-z]/gi;
  let final = '';

  for (const letter of this) {
    if (letter.match(testCase)) {
      final = final.concat(letter.charCodeAt() > 96 && letter.charCodeAt() < 123 ?
        letter.toUpper() : letter.toLower());
    } else {
      final = final.concat(letter);
    }
  }
  return final;
};

String.prototype.countLowerCase = function countLowerCase() {
  /* returns the count of lowercase letters in a string*/
  return this.replace(/[^a-z]/g, '').length;
};

String.prototype.countUpperCase = function countUpperCase() {
  /* returns the count of uppercase letters in a string*/
  return this.replace(/[^A-Z]/g, '').length;
};

String.prototype.getMiddle = function getMiddle() {
  return this.substr(Math.ceil(this.length / 2 - 1), this.length % 2 === 0 ? 2 : 1);
};
