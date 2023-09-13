let message = "There is no war in Ba Sing Se";

function count_words(string) {
  // trim the message to remove the white spaces from both ends (this is not a necessary step in this challenge but it's a good practise)
  trimmed_message = message.trim();

  // if the message is blank then return 0
  if (trimmed_message === "") {
    return 0;
  }

  // split the message into words separated by whitespaces
  words = trimmed_message.split(" ");

  // the length of words is the number of words
  return words.length;
}

// call the function for our message
console.log(count_words(message));
