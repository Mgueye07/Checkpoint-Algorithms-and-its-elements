function analyzeSentence() {
  let sentence = "";
  let charCount = 0;
  let wordCount = 1; // Initialize to 1 because the first word doesn't have a preceding space
  let vowelCount = 0;
  const vowels = "aeiouAEIOU";

  console.log("Please enter a sentence ending with a period ('.') character by character:");

  const processCharacter = (char) => {
    if (char.length !== 1) {
      console.log("Please enter only one character at a time.");
      return;
    }

    sentence += char;
    charCount++;

    if (char === '.') {
      console.log("\n--- Sentence Analysis ---");
      console.log(`Length of the sentence: ${charCount}`);
      console.log(`Number of words in the sentence: ${wordCount}`);
      console.log(`Number of vowels in the sentence: ${vowelCount}`);
      // We've reached the end, so we can stop further input (if needed in a browser context)
      // For a simple console application, the process will naturally end here.
    } else if (char === ' ') {
      wordCount++;
    } else if (vowels.includes(char)) {
      vowelCount++;
    }
  };

  // In a browser environment, you would typically attach an event listener to an input field
  // to capture each character as it's entered. For a simple console-based example,
  // we'll simulate character-by-character input using prompts.

  function getInputCharacter() {
    const inputChar = prompt("Enter the next character:");
    if (inputChar !== null) {
      processCharacter(inputChar);
      if (inputChar !== '.') {
        getInputCharacter(); // Continue prompting for the next character
      }
    }
  }

  getInputCharacter();
}

// Run the analysis
analyzeSentence();
