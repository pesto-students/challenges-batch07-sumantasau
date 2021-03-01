function allSettled(...args) {
  return new Promise((resolve) => {
    const arrStatus = [];
    let completed = 0;
    args.forEach((item, index) => {
      Promise.resolve(item).then(result => {
        arrStatus[index] = { status: 'fulfilled', result };
        completed += 1;
        if (completed === args.length) {
          resolve(arrStatus);
        }
      }).catch(err => {
        arrStatus[index] = { status: 'rejected', reason: `Error: ${err.message}` };
      });
    });
  });
}
export { allSettled };
