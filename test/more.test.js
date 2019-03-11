const testObj = require('../core/more');

it('should isNull return null', () => {
  expect(testObj.isNull()).toBeNull();
});

it('should check falsy value', () => {
  expect(testObj.checkValue(undefined)).toBeFalsy();
});

test('should create user Dipto Karmakar', () => {
  expect(testObj.createUser('Dipto', 'Karmakar')).toEqual({
    firstName: 'Dipto',
    lastName: 'Karmakar',
  });
});

// Less than, greater than and than or equal test

test('should less then 2000', () => {
  const load1 = 900;
  const load2 = 950;
  expect(load1 + load2).toBeLessThan(2000);
});

test('should greater then 2000', () => {
  const load1 = 1500;
  const load2 = 950;
  expect(load1 + load2).toBeGreaterThan(2000);
});

test('should less then or equal 2000', () => {
  const load1 = 1050;
  const load2 = 950;
  expect(load1 + load2).toBeGreaterThanOrEqual(2000);
});

// REGX

test("should 'te' in team", () => {
  expect('Team').toMatch(/te/i);
});

test("should no 'B' in danger", () => {
  expect('danger').not.toMatch(/B/);
});

// Array test

test('should include admin in roles array', () => {
  expect(testObj.role).toContain('admin');
});