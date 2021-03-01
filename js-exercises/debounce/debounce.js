function debounce(fn, timeInMs) {
  let timeOut;
  return () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(fn, timeInMs);
  };
}

export { debounce };
