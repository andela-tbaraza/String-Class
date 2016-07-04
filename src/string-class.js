String.prototype.hasVowels = function() {
  const vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this) ? true : false;
};

String.prototype.toUpper = function () {
  var newString = '';
  const upper = new RegExp('[a-z]');
  for (let index = 0; index < this.length; index++) {
    upper.test(this[index]) ?
    newString += String.fromCharCode((this.charCodeAt(index)) - 32) :
    newString += this[index];
  }
  return newString;
};

String.prototype.toLower = function () {
  var newString = '';
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
  var last = new RegExp(/\?$/);
  console.log(last)
  return last.test(this) ? true : false;
};

console.log('try?'.isQuestion())
