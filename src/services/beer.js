import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
})

const list = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/')
      .then(result => {
        const beers = result.data;
        resolve(beers);
      })
      .catch(reject);
  });

  const load = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/${id}`)
      .then(result => {
        const beer = result.data;
        resolve(beer);
      })
      .catch(reject);
  });


  export { list, load };