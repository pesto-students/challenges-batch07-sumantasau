function rangeIter(lb, ub) {
  /* let arrVal = [];
    for(let value=lb; value<=ub;value++){
        arrVal.push(value);
    }
    return arrVal; */

  /* for(let value=lb; value<=ub;value++){
        yield value;
    } */
  let nextIndex = lb;

  return {
    [Symbol.iterator]() {
      const rangeIterator = {
        next() {
          let result;
          if (nextIndex <= ub) {
            result = { value: nextIndex, done: false };
            nextIndex += 1;
            return result;
          }
          return { value: lb, done: true };
        },
      };
      return rangeIterator;
    },
  };
}

export { rangeIter };
