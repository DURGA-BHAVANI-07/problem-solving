// function countWords(wordsArray) {
//   const wordCount = {}; 

//   wordsArray.forEach(word => {
//     if (wordCount[word]) {
//       wordCount[word] += 1;  
//     } else {
//       wordCount[word] = 1;  
//     }
//   });

//   return wordCount;  
// }
// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const result = countWords(words);
// console.log(result);



// function countVowels(word) {
//   const vowels = "aeiouAEIOU"; 
//   let vowelCount = 0;

//   for (let char of word) {
//     if (vowels.includes(char)) {
//       vowelCount += 1;
//     }
//   }

//   return vowelCount;
// }
// function countVowelsInWords(wordsArray) {
//   return wordsArray.map((word) => {
//     return {
//       word: word,
//       vowelCount: countVowels(word),
//     };
//   });
// }

// const words = ["apple", "banana", "orange", "grape"];
// const result = countVowelsInWords(words);
// console.log(result);


function countConsonants(word) {
  const vowels = 'aeiouAEIOU';  
  let consonantCount = 0;

  
  for (let char of word) {
  
    if (char.match(/[a-zA-Z]/) && !vowels.includes(char)) {
      consonantCount += 1;
    }
  }

  return consonantCount;  
}

function countConsonantsInWords(wordsArray) {
  return wordsArray.map(word => {
    return {
      word: word,
      consonantCount: countConsonants(word)
    };
  });
}

const words = ['apple', 'banana', 'orange', 'grape'];
const result = countConsonantsInWords(words);
console.log(result);

