const fs = require('fs');

const writeToFile = (num, callback) => {
  fs.writeFile('numFile.txt', num, 'utf8', (err) => {
    if (err) {
      console.log(err);
    } else {
      callback();
    }
  });
};

const writeToFileAsync = (num) => {
  return new Promise((resolve, reject) => {
    writeToFile(num, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = { writeToFile, writeToFileAsync };
