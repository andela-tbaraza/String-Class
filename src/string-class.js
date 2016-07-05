String.prototype.hasVowels = function() {
  /* this method returns true if there is a vowels
     in a string and false for absence of vowels
  */
  const vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this) ? true : false;
};

String.prototype.toUpper = function () {
  /* converts a string to uppercase format */
  let newString = '';
  const upper = new RegExp('[a-z]');
  for (let index = 0; index < this.length; index++) {
    upper.test(this[index]) ?
    newString += String.fromCharCode((this.charCodeAt(index)) - 32) :
    newString += this[index];
  }
  return newString;
};

String.prototype.toLower = function () {
  /* converts a string to lowercase format */
  let newString = '';
  const upper = new RegExp('[A-Z]');
  for (let index = 0; index < this.length; index++) {
    upper.test(this[index]) ?
    newString += String.fromCharCode((this.charCodeAt(index)) + 32) :
    newString += this[index];
  }
  return newString;
};

String.prototype.ucFirst = function () {
  /* converts the forst letter of a string to uppercase */
  return [this.charAt(0).toUpper(), this.slice(1)].join('');
};

String.prototype.isQuestion = function () {
  /* checks if a string is a question */
  const question = new RegExp(/\?$/);
  return question.test(this) ? true : false;
};

String.prototype.words = function () {
  /* makes an array out of a string */
  const boundary = new RegExp(/\W+/);
  return this.split(boundary);
};

String.prototype.wordCount = function () {
  /* gives the count of words in a string */
  let count = 0;
  const newArray = this.words();
  newArray.forEach(() => {
    count += 1;
  });
  return count;
};

String.prototype.toCurrency = function () {
  /* returns a currency format of a string */
  let floatString = parseFloat(this);
  let currencyString = floatString.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return currencyString;
};

String.prototype.fromCurrency = function () {
  /* returns the number format of a string */
  return Number(this.replace(/\,/g, ''));
};
