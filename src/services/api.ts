import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://douglas-site-com-br.umbler.net',
  baseURL: 'https://api-proffy-douglas.herokuapp.com',
  //  baseURL: 'http://localhost:3333',
});

export default api;