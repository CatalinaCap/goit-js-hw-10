import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const errorText = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

document.addEventListener('DOMContentLoaded', () => {
  loader.classList.remove('hidden');
  breedSelect.classList.add('hidden');
  errorText.classList.add('hidden');

  fetchBreeds()
    .then(breeds => {
      populateBreedsSelect(breeds);
      breedSelect.classList.remove('hidden');
    })
    .catch(error => {
      errorText.classList.remove('hidden');
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
});

breedSelect.addEventListener('change', event => {
  const breedId = event.target.value;
  if (!breedId) return;

  loader.classList.remove('hidden');
  catInfo.classList.add('hidden');
  errorText.classList.add('hidden');

  fetchCatByBreed(breedId)
    .then(cat => {
      displayCatInfo(cat);
      catInfo.classList.remove('hidden');
    })
    .catch(error => {
      errorText.classList.remove('hidden');
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
});

function populateBreedsSelect(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

function displayCatInfo(cat) {
  const { url, breeds } = cat;
  const { name, description, temperament } = breeds[0];

  catInfo.innerHTML = `
  <div class="cat-container">
      <div class="cat-image">
        <img src="${url}" alt="${name}" width="400">
      </div>
      <div class="cat-details">
        <h2>${name}</h2>
        <p>${description}</p>
        <p><strong>Temperament:</strong> ${temperament}</p>
      </div>
    </div>
  `;
  catInfo.classList.remove('hidden');
}
