/*
get a random number less than 10,
wait three seconds
write the number to the hard drive
Then, once all that is done, console log "I'm done!"

CONSTRAINTS
- No using setTimeout (must use waitOneSecond)
- No editing any file except main.js
*/

const { getNumLessThanTen } = require('./getNumLessThan.js');
const { waitOneSecond } = require('./waitOneSecond');
const { writeToFile } = require('./writeToFile');


const func = (callback) => {
  getNumLessThanTen((err, randomNumber) => {
    if (err) {
      return callback(err);
    }
    waitOneSecond((err, result) => {
      if (err) {
        return callback(err);
      }
      console.log(result);
      waitOneSecond((err, result) => {
        if (err) {
          return callback(err);
        }
        console.log(result);
        waitOneSecond((err, result) => {
          if (err) {
            return callback(err);
          }
          console.log(result);
          writeToFile(randomNumber, (err) => {
            if (err) {
              return callback(err);
            }
            callback(null, "I'm Finished");
          });
        });
      });
    });
  });
};

func((err, result) => {
  if (err) {
    // do something when an error happens/
    console.error(err);
  } else {
    // do something when you succeed.
    console.log(result);
  }
});
