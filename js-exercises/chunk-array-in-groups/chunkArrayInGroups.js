function chunkArrayInGroups(array, chunkSize) {
  const arrStack = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i % chunkSize === 0) {
      arrStack.push(array.slice(i, chunkSize + i));
    }
  }
  return arrStack;
}

export {
  chunkArrayInGroups,
};
