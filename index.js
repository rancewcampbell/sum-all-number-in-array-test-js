function sumItems(array) {
  let sum = 0;
  for (const item of array) {
    Array.isArray(item) ? (sum += sumItems(item)) : (sum += item);
  }
  return sum;
}

module.exports = sumItems;
