//Take in User and Pet signs and return a message of compatibility.

export function compMessage(userSign, petSign) {
  let message = '';
  String(userSign) === String(petSign) ? 
    message = 'You two should be feeling more connected than usual today! Try to take advantage of any downtime together.' : 
    message = 'Today might test your connection. Give your furry friend an extra treat or some additional cuddle time.'; 
  return message;
}


//Take in a string an if the string is Aries || Aquarius; make 'a' 'an'



//yelp function TBD