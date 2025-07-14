// server/tests/unit/utils.test.js
const { capitalize } = require('../../src/utils');

describe('capitalize utility', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  it('returns empty string for non-string input', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
    expect(capitalize(123)).toBe('');
  });
  it('returns empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });
}); 