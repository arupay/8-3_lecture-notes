const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const pokemon = getPokemonByID(event.target.id.value);
  return pokemon;
});

const getPokemonByID = (num) => {
  fetch(BASE_URL + num)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
