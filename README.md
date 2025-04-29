Documentation for Sentence Analyzer Algorithm
This document describes an algorithm designed to analyze a sentence that ends with a period ('.') by processing it character by character. The algorithm determines the following properties of the sentence:

The total number of characters (length of the sentence).
The number of words in the sentence (assuming single spaces as word separators).
The number of vowels (a, e, i, o, u, and their uppercase counterparts) in the sentence.
Algorithm Description
The algorithm operates by iterating through the input sentence one character at a time until a period ('.') is encountered. It utilizes three separate counters to keep track of the desired properties.

Input: A sequence of characters forming a sentence that ends with a period ('.'). Each character is processed individually.

Output: The algorithm provides the following information:

Sentence Length: The total count of all characters in the sentence, including spaces and the final period.
Word Count: The number of words in the sentence, determined by counting the spaces between words and adding one for the initial word.
Vowel Count: The total number of vowel characters (a, e, i, o, u, A, E, I, O, U) present in the sentence.
Variables:

The algorithm employs three variables to act as counters:

character_count: Stores the total number of characters read so far. Initialized to 0.
word_count: Stores the number of words encountered. Initialized to 1 (to account for the first word).
vowel_count: Stores the number of vowels encountered. Initialized to 0.
Steps:

Initialization: Set character_count to 0, word_count to 1, and vowel_count to 0.
Read Character: Obtain the next character from the input sentence.
Check for End of Sentence:
If the read character is a period ('.'), proceed to step 6.
If not, continue to step 4.
Process Character:
Increment Character Count: Increase the character_count by 1.
Check for Space: If the character is a single space (' '), increment the word_count by 1.
Check for Vowel: If the character is one of the vowels (a, e, i, o, u, A, E, I, O, U), increment the vowel_count by 1.
Repeat: Go back to step 2 to read the next character.
Output Results: Once the period is encountered, the algorithm outputs the final values of character_count, word_count, and vowel_count as the length of the sentence, the number of words, and the number of vowels, respectively.
Assumptions:

The input sentence will always end with a single period ('.').
Words in the sentence are separated by a single space character.

Final Output:

Length of the sentence: 12
Number of words in the sentence: 3
Number of vowels in the sentence: 3
This documentation provides a clear understanding of the sentence analysis algorithm, its steps, and the variables it utilizes.
