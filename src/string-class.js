/* eslint-disable no-extend-native */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-template */

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
    return String.fromCharCode(letter.charCodeAt() - 32);
  }));
};

String.prototype.toLower = function toLower() {
  /* Converts a string to lowercase format */
  const upper = /[A-Z]/g;
  return this.replace(upper, letter => {
    return String.fromCharCode(letter.charCodeAt() + 32);
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
  return floatString.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};

String.prototype.fromCurrency = function fromCurrency() {
  /* Returns the number format of a string */
  return Number(this.replace(/,/, ''));
};

String.prototype.numberWords = function numberWords() {
  /* returns the numbers in words*/
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return this.replace(/[0-9]/g, (digit => {
    return words[digit] + ' ';
  })).trim();
};

String.prototype.startWith = function startWith(start) {
  /* affirms if the string starts with the specified input returns false if not */
  const match = new RegExp(/^\S+/i.exec(this)[0]);
  return match.test(start);
};

String.prototype.endWith = function endWith(end) {
  /* affirms if the string ends with a specified input returns false if not */
  return new RegExp(end + '$', 'i').test(this);
};

String.prototype.alternatingCase = function alternatingCase() {
  /* returns each letter in a string in alternating cases */
  let count = 0;
  const testCase = /([a-z])/gi;
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
  const testCase = /([a-z])/gi;
  let final = '';

  for (const letter of this) {
    if (letter.match(testCase)) {
      final = final.concat(letter.charCodeAt() > 96 && letter.charCodeAt() < 123
      ? letter.toUpper() : letter.toLower());
    } else {
      final = final.concat(letter);
    }
  }
  return final;
};
