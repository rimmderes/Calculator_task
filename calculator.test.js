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

  test('can add two negative numbers', () => {
    const expected = -26;
    const actual = calculator.sum(-9, -17);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    const expected = 87;
    const actual = calculator.sum(87, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    const expected = 10;
    const actual = calculator.subtract(25, 15);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    const expected = 789;
    const actual = calculator.subtract(1286, 497);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    const expected = -76;
    const actual = calculator.subtract(-123, -47);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    const expected = 67;
    const actual = calculator.subtract(67, 0);
    expect(actual).toBe(expected);
});

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
