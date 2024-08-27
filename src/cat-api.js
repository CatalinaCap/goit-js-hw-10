import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_uDb0QnEofrCH99KzNogjGjFJEiLbTOGn9xtKxn2yZvg3WOqLhGGfvewfnCwHa5HC';

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
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return axios
    .get(url)
    .then(response => {
      if (response.status === 200 && response.data.length > 0) {
        return response.data[0];
      } else {
        throw new Error('No data found for this breed ID');
      }
    })
    .catch(error => {
      console.error('Error fetching cat by breed:', error);
      throw error;
    });
}
