require('../src/string-class');
describe('test hasVowels method', () => {
  it('should return true if the string has vowels', () => {
    expect('TONIDA HAS ORANGES'.hasVowels()).toBeTrue();
    expect('TonidA'.hasVowels()).toBeTrue();
    expect('M37@i*, exp'.hasVowels()).toBeTrue();
    expect('mabishi'.hasVowels()).toBeTrue();
  });

  it('should return false if the string has no vowels', () => {
    expect('TBNRTY'.hasVowels()).toBeFalse();
    expect('tbnrty'.hasVowels()).toBeFalse();
    expect('245Gy'.hasVowels()).toBeFalse();
    expect('Thy'.hasVowels()).toBeFalse();
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
    expect('tonida'.toUpper()).toBeString();
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
    expect('orthography'.toLower()).toBeString();
  });

  it('should check the inbuilt toLowerCase method has not called', () => {
    spyOn(String.prototype, 'toLowerCase');
    const fake2 = 'SUPERAROGOTORY';
    fake2.toLower();
    expect(String.prototype.toLowerCase).not.toHaveBeenCalled();
  });
});

describe('test ucFirst method', () => {
  it('should return a lowercase form of the string passed', () => {
    expect('tonida'.ucFirst()).toEqual('Tonida');
    expect('TONIDA'.ucFirst()).toEqual('TONIDA');
    expect('this is good'.ucFirst()).toEqual('This is good');
    expect('34th day of the month'.ucFirst()).toEqual('34th day of the month');
  });

  it('should check the type of results to be a string', () => {
    expect('tonida'.ucFirst()).toBeString();
  });
});

describe('test isQuestion method', () => {
  it('should return true if the string is a question', () => {
    expect('TONIDA HAS ORANGES?'.isQuestion()).toBeTrue();
    expect('TonidA?'.isQuestion()).toBeTrue();
    expect('M37@i*, exp?'.isQuestion()).toBeTrue();
    expect('mabishi?'.isQuestion()).toBeTrue();
  });

  it('should return false if the string is not a question', () => {
    expect('TBNRTY'.isQuestion()).toBeFalse();
    expect('tbnrty'.isQuestion()).toBeFalse();
    expect('245Gy'.isQuestion()).toBeFalse();
    expect('Thy'.isQuestion()).toBeFalse();
  });
});

describe('test words function', () => {
  it('should return an array of the string provided', () => {
    expect('tonida'.words()).toEqual(['tonida']);
    expect('Angel:,Gabriel,is going home'.words())
    .toEqual(['Angel', 'Gabriel', 'is', 'going', 'home']);
    expect('Today,tomorrow'.words()).toEqual(['Today', 'tomorrow']);
    expect(''.words()).toEqual(null);
    expect('This is Andela'.words()).toEqual(['This', 'is', 'Andela']);
    expect(' '.words()).toEqual(['', '']);
  });

  it('should check that the type of results is an object', () => {
    expect(typeof('tonida'.words())).toEqual('object');
  });

  it('should check the results to be an instance of an array', () => {
    expect(('Andela is 100% awesome'.words())).toBeArray();
    expect('Andela'.words()).toBeArrayOfStrings();
  });
});

describe('test wordCount method', () => {
  it('should count the number of words in a string', () => {
    expect('America'.wordCount()).toEqual(1);
    expect('This really sucks'.wordCount()).toEqual(3);
    expect('I:love, GOD'.wordCount()).toEqual(3);
    expect(' '.wordCount()).toEqual(2);
  });

  it('should check type of the results to be number', () => {
    expect('America'.wordCount()).toBeNumber();
  });
});

describe('test toCurrency method', () => {
  it('should return a currency representation of the string', () => {
    expect('12364'.toCurrency()).toEqual('12,364.00');
    expect('450425.97'.toCurrency()).toEqual('450,425.97');
    expect('8670'.toCurrency()).toEqual('8,670.00');
    expect('56'.toCurrency()).toEqual('56.00');
  });

  it('should check the type of results to be a string', () => {
    expect('12364'.toCurrency()).toBeString();
  });
});

describe('test fromCurrency method', () => {
  it('should return a number format of the string', () => {
    expect('11,111.11'.fromCurrency()).toEqual(11111.11);
    expect('1,111.00'.fromCurrency()).toEqual(1111.00);
    expect('1,111'.fromCurrency()).toEqual(1111);
  });

  it('should check the type of results to be number', () => {
    expect('11,111.11'.fromCurrency()).toBeNumber();
  });
});

describe('test numberWords method', () => {
  it('should return the numbers in words', () => {
    expect('345'.numberWords()).toEqual('three four five');
    expect('1947'.numberWords()).toEqual('one nine four seven');
    expect('2648.00'.numberWords()).toEqual('two six four eight .zero zero');
  });
});

describe('test startWith method', () => {
  it('should affirm if a string starts with the specified input', () => {
    expect('This is great'.startWith('This')).toBeTrue();
    expect('@super does ABC'.startWith('@super')).toBeTrue();
    expect('reason and knowledge'.startWith('no')).toBeFalse();
  });
});

describe('test endWith method', () => {
  it('should affirm if a string ends with the specified input', () => {
    expect('It is highly expected'.endWith('expected')).toBeTrue();
    expect('I am super excited!!!'.endWith('super')).toBeFalse();
  });
});

describe('test alternatingCase method', () => {
  it('should alternate cases in a string', () => {
    expect('tonida'.alternatingCase()).toEqual('tOnIdA');
    expect('#$tniAB788dr7da'.alternatingCase()).toEqual('#$tNiAb788Dr7Da');
  });
});

describe('test inverseCase method', () => {
  it('should output inverse cases of the string', () => {
    expect('eish No way'.inverseCase()).toEqual('EISH nO WAY');
    expect('*BGH54#rth'.inverseCase()).toEqual('*bgh54#RTH');
  });
});

describe('test countLowerCase method', () => {
  it('should give the count of lowercase letters in a string', () => {
    expect('Jacky is awesome'.countLowerCase()).toEqual(13);
    expect('NOTHING'.countLowerCase()).toEqual(0);
    expect('578(*&)'.countLowerCase()).toEqual(0);
    expect('dfhggeug'.countLowerCase()).toBeNumber();
  });
});

describe('test countUpperCase method', () => {
  it('should give the count of uppercase letters', () => {
    expect('look'.countUpperCase()).toEqual(0);
    expect('This HAS 34s buses'.countUpperCase()).toEqual(4);
    expect('567#@889'.countUpperCase()).toEqual(0);
    expect('gfdjhf45SD5'.countUpperCase()).toBeNumber();
  });
});
