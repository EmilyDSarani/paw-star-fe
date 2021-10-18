import request from 'superagent';

const URL = 'https://shielded-savannah-39977.herokuapp.com/';

//sign up
export async function signUp(email, password, sign, zipcode) {
  const response = await request 
    .post(`${URL}auth/signup`)
    .send({ email, password, sign, zipcode });
  return response.body;
}

//login
export async function logIn(email, password) {
  const response = await request 
    .post(`${URL}auth/signin`)
    .send({ 'email': email, 'password': password });
  return response.body;
}

//get pets
export async function getPets(token) {
  const response = await request
    .get(`${URL}api/pets`)
    .set('Authorization', token);
  return response.body;
}

//post pet
export async function createPet(pet, token) {
  const response = await request
    .post(`${URL}api/pets`)
    .set('Authorization', token)
    .send(pet);
  return response.body;
}

//delete pet
export async function deletePet(id, token) {
  const response = await request
    .delete(`${URL}api/pets/${id}`)
    .set('Authorization', token);
  return response.body;
}


//update pet...update is an object {name: blah, sign:blah}
export async function updatePet(id, update, token) {
  const response = await request
    .put(`${URL}api/pets/${id}`)
    .set('Authorization', token)
    .send({
      'id': id,
      'name': update.name,
      'sign': update.sign
    });
  return response.body;
}

//get sign
export async function getSign(birthday){
  const response = await request 
    .get(`${URL}sign?date=${birthday}`);
  return response.body;
}

//get horoscope
export async function getHoroscope(sign){
  const response = await request 
    .post(`${URL}horoscope?sign=${sign}`);
  return response.body;
}

//yet yelp data
export async function getYelpData(location){
  const response = await request 
    .get(`${URL}yelp?location=${location}`);
  return response.body;
}

//add stuff for getting and updating PS user profile info (name, location, birthday, sign)