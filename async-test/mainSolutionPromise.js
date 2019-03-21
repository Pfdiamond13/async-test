/*
get a random number less than 10,
wait three seconds
write the number to the hard drive
Then, once all that is done, console log "I'm done!"

CONSTRAINTS
- No using setTimeout (must use waitOneSecond)
- No editing any file except main.js
*/

const { getNumLessThanTenAsync } = require('./getNumLessThan.js');
const { waitOneSecondAsync } = require('./waitOneSecond');
const { writeToFileAsync } = require('./writeToFile');

// TODO Add Error Checking with .catch()
const func = () => getNumLessThanTenAsync()
  .then(num => waitOneSecondAsync()
    .then((result) => {
      console.log(result);
      // need to pass num to the next sequence in chain
      return num;
    }))
  .then(num => waitOneSecondAsync()
    .then((result) => {
      console.log(result);
      // need to pass num to the next sequence in chain
      return num;
    }))
  .then(num => waitOneSecondAsync()
    .then((result) => {
      console.log(result);
      return writeToFileAsync(num);
    }));

func()
  .then(() => console.log('I am finised'));
