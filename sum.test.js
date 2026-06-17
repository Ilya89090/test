const sum = require('./sum');

test('2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('0 + 0 = 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('negative numbers', () => {
  expect(sum(-2, -3)).toBe(-5);
});
