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
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((_, item) => item !== index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => {
    return (
      string[0] === "a" ||
      string[0] === "e" ||
      string[0] === "i" ||
      string[0] === "o" ||
      string[0] === "u" ||
      string[0] === "A" ||
      string[0] === "E" ||
      string[0] === "I" ||
      string[0] === "O" ||
      string[0] === "U"
    );
  });
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers =>
  numbers.reduce((acc, number) => {
    return acc + number;
  }, 0);


const sortByLastLetter = strings => {
  const reverse = strings.map(string => {
    return string
      .split("")
      .reverse()
      .join("");
  });
  const reverseSorted = reverse.sort();
  const finalArray = reverseSorted.map(string => {
    return string
      .split("")
      .reverse()
      .join("");
  });
  return finalArray;
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
