// server/tests/unit/sample.unit.test.js
const sum = (a, b) => a + b;

describe('sum utility', () => {
  it('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
}); 