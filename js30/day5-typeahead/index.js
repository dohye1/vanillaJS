const URL =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const cities = [];

function findMatches(wordToMatch) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value);
  const html = matchArray.map((place) => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(
      regex,
      `<span class="hl">${this.value}</span>`
    );
    const stateName = place.state.replace(
      regex,
      `<span class="hl">${this.value}</span>`
    );

    return `<li><span class="name">${cityName}, ${stateName}</span><span class="population">${place.population}</span></li>`;
  });

  suggestions.innerHTML = html.join('');
}

function init() {
  fetch(URL)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data));
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);
}

init();
