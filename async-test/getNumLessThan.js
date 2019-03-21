const generateRandomNum = (num) => {
  return (Math.random() * num);
};

const generateRandomDelay = () => {
  return generateRandomNum(10) * 100;
};

const getNumLessThanTen = (callback) => {
  const randomDelay = generateRandomDelay();

  setTimeout(() => {
    const randNum = generateRandomNum(10);
    callback(null, randNum);
  }, randomDelay);
};

const getNumLessThanTenAsync = () => {
  return new Promise((resolve, reject) => {
    getNumLessThanTen((err, num) => {
      if (err) {
        reject(err);
      } else {
        resolve(num);
      }
    });
  });
};

module.exports = { getNumLessThanTen, getNumLessThanTenAsync };
