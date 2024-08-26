import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const errorElement = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');
const catImage = document.querySelector('.cat-info img');
const breedName = document.querySelector('.breed-name');
const description = document.querySelector('.description');
const temperament = document.querySelector('.temperament');
new SlimSelect({
  select: '.breed-select',
});
function populateBreeds() {
  loader.style.display = 'block';
  breedSelect.style.display = 'none';
  errorElement.style.display = 'none';
  fetchBreeds()
    .then(breeds => {
      const breedOptions = breeds
        .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
        .join('');
      breedSelect.innerHTML = breedOptions;
      loader.style.display = 'none';
      breedSelect.style.display = 'block';
    })
    .catch(() => {
      loader.style.display = 'none';
      errorElement.style.display = 'block';
    });
}
function showCatInfo(breedId) {
  loader.style.display = 'block';
  catInfo.style.display = 'none';
  errorElement.style.display = 'none';

  fetchCatByBreed(breedId)
    .then(catData => {
      catImage.src = catData.url;
      breedName.textContent = catData.breeds[0].name;
      description.textContent = catData.breeds[0].description;
      temperament.textContent = `Temperament: ${catData.breeds[0].temperament}`;
      loader.style.display = 'none';
      catInfo.style.display = 'block';
    })
    .catch(() => {
      loader.style.display = 'none';
      errorElement.style.display = 'block';
    });
}

breedSelect.addEventListener('change', event => {
  const selectedBreedId = event.target.value;
  if (selectedBreedId) {
    showCatInfo(selectedBreedId);
  }
});

populateBreeds();
