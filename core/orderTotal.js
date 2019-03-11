const orderTotal = orders => orders.items.reduce((acc, cur) => acc + cur.price, 0);


module.exports = orderTotal;
