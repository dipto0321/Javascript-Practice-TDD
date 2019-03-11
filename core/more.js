const axios = require('axios');

const testObj = {
  isNull: () => null,
  checkValue: x => x,
  createUser: (firstName, lastName) => ({
    firstName,
    lastName,
  }),
  role: ['admin', 'hr', 'manager'],
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(error => error),
};

module.exports = testObj;