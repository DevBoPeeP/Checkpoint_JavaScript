// String Manipulation Function
// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example
const originalString = "JavaScript guru!";
const reversedString = reverseString(originalString);
console.log(reversedString);

// length of strings
function countCharacters(sentence) {
  var length = sentence.length;
  return length;
}
var countCharactersresult = countCharacters("imagination");
console.log(countCharactersresult);

function capitalizeFirstLetterOfEachWord(sentence) {
  // Split the sentence into an array of words
  let words = sentence.split(" ");

  // Map through each word in the array
  let capitalizedWords = words.map((word) => {
    // Capitalize the first letter of each word
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the array of capitalized words back into a single string
  let capitalizedSentence = capitalizedWords.join(" ");

  return capitalizedSentence;
}

// Example
let sentence = "hello javascript! this is a test sentence.";
let result = capitalizeFirstLetterOfEachWord(sentence);

// Array function
// Function to find the maximum value in an array
function findMax(arr) {
  if (arr.length === 0) {
    return null; // Return null if the array is empty
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function to find the minimum value in an array
function findMin(arr) {
  if (arr.length === 0) {
    return null; // Return null if the array is empty
  }
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Array sum
function sumArray(arr) {
  // Initialize a variable to hold the sum
  let sum = 0;

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Add the current element to the sum
    sum += arr[i];
  }

  return sum;
}

// Example
let array = [1, 2, 3, 4, 5];
console.log(sumArray(array));

// Array filter
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Example
const numbers = [1, 2, 3, 4, 5, 6];

// Filter out even numbers
const oddNumbers = filterArray(numbers, (num) => num % 2 !== 0);

// Mathematical Functions
// factorial Calculation
function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Verify prime numbers
function isPrime(n) {
  if (n <= 1) {
    return false; // 0 and 1 are not prime numbers
  }
  if (n <= 3) {
    return true; // 2 and 3 are prime numbers
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false; // multiples of 2 and 3 are not prime
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

// Fibonacci sequence
function generateFibonacci(numTerms) {
  if (numTerms <= 0) {
    return "Number of terms must be a positive integer.";
  }

  let fibonacciSequence = [];

  for (let i = 0; i < numTerms; i++) {
    if (i === 0) {
      fibonacciSequence.push(0);
    } else if (i === 1) {
      fibonacciSequence.push(1);
    } else {
      fibonacciSequence.push(
        fibonacciSequence[i - 1] + fibonacciSequence[i - 2]
      );
    }
  }

  return fibonacciSequence;
}
