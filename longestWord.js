function longestWord(sentence) {
    // Initialize variables to store the longest word and its properties
    let longestWord = '';
    let longestLength = 0;
    let mostVowels = 0;
  
    // Define a function to count vowels in a word
    function countVowels(word) {
      const vowels = 'aeiouAEIOU';
      let vowelCount = 0;
      for (let char of word) {
        if (vowels.includes(char)) {
          vowelCount++;
        }
      }
      return vowelCount;
    }
  
    // Split the sentence into words and process each word
    const words = sentence.split(' ');
    for (let word of words) {
      // Remove non-English letters (letters other than a-z and A-Z)
      word = word.replace(/[^a-zA-Z]/g, '');
  
      // Calculate the length and vowel count of the word
      const length = word.length;
      const vowels = countVowels(word);
  
      // Check if the current word is longer or has more vowels
      if (length > longestLength || (length === longestLength && vowels > mostVowels)) {
        longestWord = word;
        longestLength = length;
        mostVowels = vowels;
      }
    }
  
    return `${longestWord} is the longest word with ${longestLength} letters and ${mostVowels} vowels`;
  }
  
  //Test cases
  const sentence1 = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
  const sentence2 = "Smart people learn from everything@ and everyo@@ne, average people from their expe//rience, stupid people already, have all the answers";
  const sentence3 = "Smart people learn from everythi@ng and everyone, average people from their experience, stupid people already, have all the answers!!!!13";
  const sentence4 = "This quote has been written by Socrates";
  const sentence5 = "Longest word at the start"


  console.log(longestWord(sentence1))
  console.log(longestWord(sentence2))
  console.log(longestWord(sentence3))
  console.log(longestWord(sentence4))
  console.log(longestWord(sentence5))
