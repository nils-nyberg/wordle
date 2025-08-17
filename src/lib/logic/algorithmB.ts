export default function wordSelection(
  arr: string[],
  wordLength: number,
  allowRepetition: boolean
) {
  const randomWord = (item: string[]) => {
    return item[Math.floor(Math.random() * item.length)].toLowerCase();
  };

  if (!wordLength && !allowRepetition) {
    return randomWord(arr);
  }

  // If repetition with letters is allowed, pick words with specified length
  if (allowRepetition === true) {
    arr = arr.filter((word) => wordLength === word.length);
    return randomWord(arr);
  }
  // If all letters in a word should be unique, pick words with specified length
  else {
    const wordArray: string[] = [];
    arr.forEach((word: string) => {
      const letters = word.split("");
      if (wordLength === word.length) {
        try {
          if (new Set(letters).size === letters.length) {
            wordArray.push(word); // Unique letters
          } else {
            wordArray.push(word);
          }
        } catch {
          console.error("DID NOT FIND A WORD WITH UNIQUE LETTERS!");
        }
      }
    });
    // If no words with specified length are found, but has unique letters
    if (!wordArray.length) {
      arr.forEach((word) => {
        const letters = word.split("");
        if (new Set(letters).size === letters.length) {
          try {
            wordArray.push(word); // Only unique letters
          } catch {
            console.error("DID NOT FIND A WORD WITH THE CORRECT LENGTH!");
          }
        }
      });
    }
    return randomWord(wordArray);
  }
}
