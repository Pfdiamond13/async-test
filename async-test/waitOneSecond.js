const waitOneSecond = (callback) => {
  setTimeout(() => {
    callback(null, 'waited one second');
  }, 1000);
};

const waitOneSecondAsync = () => {
  return new Promise((resolve, reject) => {
    waitOneSecond((err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = { waitOneSecond, waitOneSecondAsync };
