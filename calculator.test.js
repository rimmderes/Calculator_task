const {Calculator} = require("./calculator");

let calculator;

beforeEach(() => {
    calculator = new Calculator();
})


describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    const expected = 5;
    const actual = calculator.sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    const expected = 1289;
    const actual = calculator.sum(659, 630);
    expect(actual).toBe(expected);
  });

  test.skip('can add two negative numbers', () => {
    
  });

  test.skip('can add zero', () => {
    
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
