function removeFalsyValues(array) {
  if (array.length <= 0) return array;
  const newArr = [];
  for (let k = 0; k < array.length; k += 1) {
    if (Boolean(array[k]) === true) {
      // eslint-disable-next-line no-unused-vars
      newArr.push(array[k]);
    }
  }
  return newArr;
}

export {
  removeFalsyValues,
};
