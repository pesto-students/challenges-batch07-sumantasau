const allPromises = items => new Promise((resolve, reject) => {
  const arrResult = [];
  let completed = 0;

  items.forEach((item, index) => {
    Promise.resolve(item).then(result => {
      arrResult[index] = result;
      completed += 1;

      if (completed === items.length) {
        resolve(arrResult);
      }
    }).catch(err => reject(err));
  });
});

export { allPromises };
