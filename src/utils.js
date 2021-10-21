//take in user and pet signs and return a message of compatibility.
export function compMessage(userSign, petSign) {
  let message = '';
  String(userSign) === String(petSign) ? 
    message = 'You two should be feeling more connected than usual today! Try to take advantage of any downtime together.' : 
    message = 'Today might test your connection. Give your furry friend an extra treat or some additional cuddle time.'; 
  return message;
}

//provide correct article if sign starts with a vowel
export function correctArticle(sign) {
  let article = 'a';
  const startswA = sign.toLowerCase().startsWith('a');
  if (startswA) article = 'an';
  return article;
}

//return a business within a certain category
export function findBusiness(array, type) {
  return array.find(business => business.category.find(category => category.alias === type));
}

//return a random quote from a given array of quotes
export function getRandomQuote(array) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return array.find(quote => quote.text.includes(randomCharacter) && quote.author !== 'Donald Trump');
}

//return a random set of three words from a given array of words
export function getThreeWords(array){
  let threeWords = [];
  for (let i = 0; i <= 2; i++){
    threeWords.push(array[Math.floor(Math.random() * array.length)]);
  }
  return threeWords;
}

