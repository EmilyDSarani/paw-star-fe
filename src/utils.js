//take in user and pet signs and return a message of compatibility.
export function compMessage(userSign, petSign) {
  let message = '';
  String(userSign) === String(petSign)
    ? (message =
        'You two should be feeling more connected than usual today! Try to take advantage of any downtime together.')
    : (message =
        'Today might test your connection. Give your furry friend an extra treat or some additional cuddle time.');
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
  return array.find((business) =>
    business.category.find((category) => category.alias === type)
  );
}

//return a random quote from a given array of quotes
export function getRandomQuote(array) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return array.find(
    (quote) =>
      quote.text.includes(randomCharacter) && quote.author !== 'Donald Trump'
  );
}

//return a random set of three words from a given array of words
export function getThreeWords(array) {
  let threeWords = [];
  for (let i = 0; i <= 2; i++) {
    threeWords.push(array[Math.floor(Math.random() * array.length)]);
  }
  return threeWords;
}

// returns a zodiac sign when given a month/day
// https://github.com/tindoductran/zodiac/blob/master/getZodiac2.html

export function getZodiac(month, day) {
  const datecode = month * 100 + day; //this will give us a number represent month and day
  if (datecode <= 120) {
    return 'Capricorn';
  } else if (datecode <= 219) {
    return 'Aquarius';
  } else if (datecode <= 320) {
    return 'Pisces';
  } else if (datecode <= 420) {
    return 'Aries';
  } else if (datecode <= 520) {
    return 'Taurus';
  } else if (datecode <= 621) {
    return 'Gemini';
  } else if (datecode <= 722) {
    return 'Cancer';
  } else if (datecode <= 822) {
    return 'Leo';
  } else if (datecode <= 921) {
    return 'Virgo';
  } else if (datecode <= 1022) {
    return 'Libra';
  } else if (datecode <= 1121) {
    return 'Scorpio';
  } else if (datecode <= 1221) {
    return 'Sagittarius';
  } else {
    return 'Capricorn';
  }
}
