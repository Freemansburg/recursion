function isPalindrome(word) {
  // Stop condition: an empty word or a word containing a single character is a palindrome
  if (word.length === 0 || word.length === 1) {
    return true;
  }

  // Compare the characters located at the ends of the word
  if (word[0] === word[word.length - 1]) {
    // If equality, recursively test the rest of the word
    return isPalindrome(word.slice(1, word.length - 1));
  } else {
    // If difference, it's not a palindrome
    return false;
  }
}
