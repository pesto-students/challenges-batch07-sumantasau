function abbreviateString(str) {
  const arrStr = str.split(' ');
  let retVal = '';
  if (arrStr.length > 0) {
    retVal = `${arrStr[0]} ${arrStr[arrStr.length - 1].substr(0, 1).toUpperCase()}.`;
  }
  return retVal;
}

export { abbreviateString };
