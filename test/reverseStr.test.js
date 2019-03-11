const {
  reverseString,
} = require('../core/reverseStr');

test('should defined reverseString', () => {
  expect(reverseString).toBeDefined();
});

test('should reverse dipto to otpid ', () => {
  expect(reverseString('dipto')).toBe('otpid');
});