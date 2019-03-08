const orderTotal = orders => {
  return orders.items.reduce((acc, cur) => acc + cur.price, 0);
};



export default orderTotal;