const limitFunctionCallCount = (callbackFn, maxFnCount) => {
  let fnCount = 0;

  return (...items) => {
    if (fnCount < maxFnCount) {
      fnCount += 1;
      return callbackFn(...items);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};
