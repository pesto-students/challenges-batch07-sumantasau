function rot13(args) {
  let str = '';
  const codeA = 'A'.charCodeAt(0);
  const codeZ = 'Z'.charCodeAt(0);

  for (let k = 0; k < args.length; k += 1) {
    let chCode = args.charCodeAt(k);

    if (chCode >= codeA && chCode <= codeZ) {
      chCode = ((chCode - codeA + 13) % 26) + codeA;
    }
    str += String.fromCharCode(chCode);
  }
  return str;
}

export {
  rot13,
};
