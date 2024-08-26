import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_6Fv0e9Eh8ZiLKUbrFmBn8Ms2QkBfm54x7uw0SlzZitFIRWPvMAlKBWvUEzmdm4xR';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => {
      console.error('Error fetching cat by breed:', error);
      throw error;
    });
}
