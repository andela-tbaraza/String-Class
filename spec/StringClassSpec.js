require('../src/string-class');
describe('test hasVowels method', () => {
  it('should return true if the string has vowels', () => {
    expect('TONIDA HAS ORANGES'.hasVowels()).toBeTruthy();
    expect('TonidA'.hasVowels()).toBeTruthy();
    expect('M37@i*, exp'.hasVowels()).toBeTruthy();
    expect('mabishi'.hasVowels()).toBeTruthy();
  });

  it('should return false if the string has no vowels', () => {
    expect('TBNRTY'.hasVowels()).toBeFalsy();
    expect('tbnrty'.hasVowels()).toBeFalsy();
    expect('245Gy'.hasVowels()).toBeFalsy();
    expect('Thy'.hasVowels()).toBeFalsy();
  });

  it('should check the type of results to be boolean', () => {
    expect(typeof('mabishi'.hasVowels())).toBe('boolean');
    expect(typeof('TBNRTY'.hasVowels())).toBe('boolean');
  });
});

describe('test toUpper method', () => {
  it('should return an uppercase form of the string passed', () => {
    expect('tonida'.toUpper()).toEqual('TONIDA');
    expect('ToNida'.toUpper()).toEqual('TONIDA');
    expect('347tr, T&*()'.toUpper()).toEqual('347TR, T&*()');
    expect('This is good'.toUpper()).toEqual('THIS IS GOOD');
  });

  it('should check the type of results to be a string', () => {
    expect(typeof('tonida'.toUpper())).toBe('string');
  });

  it('should check the inbuilt toUpper method has not called', () => {
    spyOn(String.prototype, 'toUpperCase');
    const fake = 'ambassador';
    fake.toUpper();
    expect(String.prototype.toUpperCase).not.toHaveBeenCalled();
  });
});

describe('test toLower method', () => {
  it('should return a lowercase form of the string passed', () => {
    expect('TONIDA'.toLower()).toEqual('tonida');
    expect('TONIDA'.toLower()).toEqual('tonida');
    expect('347TR, T&*()'.toLower()).toEqual('347tr, t&*()');
    expect('THIS IS GOOD'.toLower()).toEqual('this is good');
  });

  it('should check the type of results to be a string', () => {
    expect(typeof('orthography'.toLower())).toBe('string');
  });

  it('should check the inbuilt toLowerCae method has not called', () => {
    spyOn(String.prototype, 'toLowerCase');
    const fake = 'superarogatory';
    fake.toUpper();
    expect(String.prototype.toLowerCase).not.toHaveBeenCalled();
  });
});

describe('test ucFirst method', () => {
  it('should return a lowercase form of the string passed', () => {
    expect('tonida'.ucFirst()).toEqual('Tonida');
    expect('TONIDA'.ucFirst()).toEqual('TONIDA');
    expect('347tr, t&*()'.ucFirst()).toEqual('347tr, t&*()');
    expect('this is good'.ucFirst()).toEqual('This is good');
  });

  it('should check the type of results to be a string', () => {
    expect(typeof('tonida'.ucFirst())).toBe('string');
  });
});

describe('test isQuestion method', () => {
  it('should return true if the string is a question', () => {
    expect('TONIDA HAS ORANGES?'.isQuestion()).toBeTruthy();
    expect('TonidA?'.isQuestion()).toBeTruthy();
    expect('M37@i*, exp?'.isQuestion()).toBeTruthy();
    expect('mabishi?'.isQuestion()).toBeTruthy();
  });

  it('should return false if the string is not a question', () => {
    expect('TBNRTY'.isQuestion()).toBeFalsy();
    expect('tbnrty'.isQuestion()).toBeFalsy();
    expect('245Gy'.isQuestion()).toBeFalsy();
    expect('Thy'.isQuestion()).toBeFalsy();
  });

  it('should check the type of results to be boolean', () => {
    expect(typeof('mabishi?'.isQuestion())).toBe('boolean');
    expect(typeof('TBNRTY'.isQuestion())).toBe('boolean');
  });
});

describe('test words function', () => {
  it('should return an array of the string provided', () => {
    expect('tonida'.words()).toEqual(['tonida']);
    expect('Angel:Gabriel,is going home'.words())
    .toEqual(['Angel', 'Gabriel', 'is', 'going', 'home']);
    expect('Today,tomorrow'.words()).toEqual(['Today', 'tomorrow']);
    expect(''.words()).toEqual(['']);
    expect('This is Andela'.words()).toEqual(['This', 'is', 'Andela']);
  });

  it('should check that the type of results is an object', () => {
    expect(typeof('tonida'.words())).toEqual('object');
  });

  it('should check the results to be an instance of an array', () => {
    expect(Array.isArray('Andela'.words())).toBeTruthy();
  });
});

describe('test wordCount method', () => {
  it('should count the number of words in a string', () => {
    expect('America'.wordCount()).toEqual(1);
    expect('This really sucks'.wordCount()).toEqual(3);
    expect('I:love, GOD'.wordCount()).toEqual(3);
  });

  it('should check type of the results to be number', () => {
    expect(typeof('America'.wordCount())).toBe('number');
  });
});

describe('test toCurrency method', () => {
  it('should return a currency representation of the string', () => {
    expect('12364'.toCurrency()).toEqual('12,364.00');
    expect('450425.97'.toCurrency()).toEqual('450,425.97');
    expect('8670'.toCurrency()).toEqual('8,670.00');
  });

  it('should check the type of results to be a string', () => {
    expect(typeof('12364'.toCurrency())).toBe('string');
  });
});

describe('test fromCurrency method', () => {
  it('should return a number format of the string', () => {
    expect('11,111.11'.fromCurrency()).toEqual(11111.11);
    expect('1,111.00'.fromCurrency()).toEqual(1111.00);
    expect('1,111'.fromCurrency()).toEqual(1111);
  });

  it('should check the type of results to be number', () => {
    expect(typeof('11,111.11'.fromCurrency())).toBe('number');
  });
});