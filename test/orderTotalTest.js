const testCases = {
  test1: {
    items: [{
        itemName: "Fish",
        price: 120
      },
      {
        itemName: "Meat",
        price: 180
      },
      {
        itemName: "Vegetables",
        price: 100
      },
    ],
    total: 400,
  },
  test2: {
    items: [{
        itemName: "Fish",
        price: 250
      },
      {
        itemName: "Meat",
        price: 300
      },
      {
        itemName: "Vegetables",
        price: 150
      },
    ],
    total: 700,
  },
};

import {
  orderTotal
} from '../orderTotal';




for (const testKey in testCases) {
  console.log(orderTotal(testCases[testKey]));
}