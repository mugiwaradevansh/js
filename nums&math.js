// const score = 400;
// console.log(score);

// const balance = new Number("twenty");
// console.log(typeof(balance));
// console.log(balance.toString().length)
// console.log(typeof(score));


// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

// const hunds = 10000000000;
// console.log(hunds.toLocaleString('en-IN'));

// const randomNumber = Math.floor(Math.random() * 70) + 1;
// console.log(randomNumber);

function getRandomNumbers(min, max) {
    const randomNumbers = [];
  
    while (randomNumbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
      // Check if the random number is already in the array
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
  
    return randomNumbers;
  }
  
  // Example usage:
  const min = parseInt(prompt("Enter the minimum value:"));
  const max = parseInt(prompt("Enter the maximum value:"));
  
  const randomNumbers = getRandomNumbers(min, max);
  console.log(randomNumbers);