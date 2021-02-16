function balancedBraces(...args) {
  const stack = [];

  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === '(' || args[i] === '{' || args[i] === '[') {
      stack.push(args[i]);
    } else if (args[i] === ')' || args[i] === '}' || args[i] === ']') {
      stack.pop();
    }
  }
  if (stack.length !== 0) { return false; }

  return true;
}

export {
  balancedBraces,
};
