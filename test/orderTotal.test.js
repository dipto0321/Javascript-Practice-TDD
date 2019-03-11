const orderTotal = require('../core/orderTotal');

const testCases = {
  test1: {
    items: [{
      itemName: 'Fish',
      price: 120,
    },
    {
      itemName: 'Meat',
      price: 180,
    },
    {
      itemName: 'Vegetables',
      price: 100,
    },
    ],
    total: 400,
  },
  test2: {
    items: [{
      itemName: 'Fish',
      price: 250,
    },
    {
      itemName: 'Meat',
      price: 300,
    },
    {
      itemName: 'Vegetables',
      price: 150,
    },
    ],
    total: 700,
  },
};

test('should calculate order total', () => {
  expect(orderTotal(testCases.test1)).toEqual(testCases.test1.total);
});
