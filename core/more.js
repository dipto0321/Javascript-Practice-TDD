const testObj = {
  isNull: () => null,
  checkValue: x => x,
  createUser: (firstName, lastName) => ({
    firstName,
    lastName,
  }),
  role: ['admin', 'hr', 'manager'],
};

module.exports = testObj;
