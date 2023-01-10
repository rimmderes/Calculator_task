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

  test('can multiple positive integer', () => {
    const expected = 96;
    const actual = calculator.multiply(12, 8);
    expect(actual).toBe(expected);
  });

  test('can multiple negative integers', () => {
    const expected = 49;
    const actual = calculator.multiply(-7, -7);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide positive integer', () => {
    const expected = 30;
    const actual = calculator.divide(90, 3);
    expect(actual).toBe(expected);
  });

  test('can divide negative integers', () => {
    const expected = 3;
    const actual = calculator.divide(-15, -5);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can find the modulus of two positive', () => {
    const expected = 1;
    const actual = calculator.modulus(9, 2);
    expect(actual).toBe(expected);
  });

  test('can divide negative integers', () => {
    const expected = -1;
    const actual = calculator.modulus(-11, -2);
    expect(actual).toBe(expected);

});
});

describe('even', () => {

});

describe('odd', () => {

});
