const sumEvenArgs = (...args) => {
  let sumEven = 0;
  if (args <= 0) return 0;

  for (let k = 0; k < args.length; k += 1) {
    if (args[k] % 2 === 0) {
      // eslint-disable-next-line no-unused-vars
      sumEven += args[k];
    }
  }
  return sumEven;
};

export { sumEvenArgs };
