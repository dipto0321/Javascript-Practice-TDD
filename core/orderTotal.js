const orderTotal = orders => {
  return orders.items.reduce((acc, cur) => acc + cur.price, 0);
};



module.exports = orderTotal;