//take in user and pet signs and return a message of compatibility.
export function compMessage(userSign, petSign) {
  return String(userSign) === String(petSign) 
    ? 'You two should be feeling more connected than usual today! Try to take advantage of any downtime together.' 
    : 'Today might test your connection. Give your furry friend an extra treat or some additional cuddle time.'; 
}

//provide correct article if sign starts with a vowel
// a crucial util function!
export function correctArticle(sign) {
  return sign.toLowerCase().startsWith('a') 
    ? 'an' 
    : 'a';
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
  return Array(3).fill(null).map(item => array[Math.floor(Math.random() * array.length)])
}

