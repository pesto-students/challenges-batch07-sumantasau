function duplicateLetters(args) {
  const str = args;
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    let k = 0;
    for (let j = i + 1; j < str.length; j += 1) {
      if (str[i] === str[j]) {
        k += 1;
      }
    }
    if (k > count) {
      count = k + 1;
    }
  }
  return count > 0 ? count : false;
}
export {
  duplicateLetters,
};
