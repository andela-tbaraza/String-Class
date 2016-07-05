String.prototype.hasVowels = function() {
  const vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this) ? true : false;
};

String.prototype.toUpper = function () {
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
  return [this.charAt(0).toUpper(), this.slice(1)].join('');
};

String.prototype.isQuestion = function () {
  const question = new RegExp(/\?$/);
  return question.test(this) ? true : false;
};

String.prototype.words = function () {
  const boundary = new RegExp(/\W+/);
  return this.split(boundary);
};

String.prototype.wordCount = function () {
  let count = 0;
  const newArray = this.words();
  newArray.forEach(() => {
    count += 1;
  });
  return count;
};

String.prototype.toCurrency = function () {
  let floatString = parseFloat(this);
  let currencyString = floatString.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return currencyString;
};

String.prototype.fromCurrency = function () {
  return Number(this.replace(/\,/g, ''));
};
