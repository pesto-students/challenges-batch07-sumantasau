const allPromises = args => new Promise((resolve, reject) => {
  const arrResult = [];
  let completed = 0;

  args.forEach((item, index) => {
    Promise.resolve(item).then(result => {
      arrResult[index] = result;
      completed += 1;

      if (completed === args.length) {
        resolve(arrResult);
      }
    }).catch(err => reject(err));
  });
});

export { allPromises };
