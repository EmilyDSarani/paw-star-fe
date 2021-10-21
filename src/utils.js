//Take in User and Pet signs and return a message of compatibility.
export function compMessage(userSign, petSign) {
  let message = '';
  String(userSign) === String(petSign) ? 
    message = 'You two should be feeling more connected than usual today! Try to take advantage of any downtime together.' : 
    message = 'Today might test your connection. Give your furry friend an extra treat or some additional cuddle time.'; 
  return message;
}


//Take in a string an if the string is Aries || Aquarius; make 'a' 'an'
// export function signArticle(sign) {

//   let article = 'a';
//   sign === 'Aries' || 'Aquarius' &&
//     article = 'an';
//   return article; 
// }


export function findBusiness(array, type) {
  return array.find(business => business.category.find(category => category.alias === type));
}

export function getRandomQuote(array) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return array.find(quote => quote.text.includes(randomCharacter) && quote.author !== 'Donald Trump');
}

export function getThreeWords(array){
  let threeWords = [];
  for (let i = 0; i <= 2; i++){
    threeWords.push(array[Math.floor(Math.random() * array.length)]);
  }
  return threeWords;
}

