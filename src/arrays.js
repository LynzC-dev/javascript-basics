const getNthElement = (index, array) => {
  // your code here
  return array[index%array.length];
 
};

const arrayToCSVString = array => {
  // your code here
   return array.toString();
};

const csvStringToArray = string => {
  // your code here
  return string.split(",");
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);

};

const removeNthElement = (index, array) => {
  // your code here - splice?
  array.splice(index, 1);
  
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map(number => String(number));
  
}

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(letters => letters.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(word => word.split("").reverse().join(""));
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
  const removespace = (string) => string.split (' ').join('');
  

};

const sumNumbers = numbers => {
  // your code here
 
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
