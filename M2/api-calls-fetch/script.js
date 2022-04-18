const BASE_URL = "https://randomuser.me/api";
// create a function to display dom elements from the api response

const displayUser = ({ results }) => {
  console.log(results);
  const [person] = results;
  const { title, first, last } = person.name;
  const { email, picture } = person;
  console.log(title, first, last, email);

  const section = document.createElement("section");
  section.classList.add("card");

  const h2 = document.createElement("h2");
  h2.textContent = `${title} ${first} ${last}`;

  const img = document.createElement("img");
  img.setAttribute("src", picture.large);

  const p = document.createElement("p");
  p.textContent = email;

  section.append(img, h2, p);
  document.querySelector(".people").append(section);
};

// create a function to display errors from the api response

const displayError = (e) => {
  const section = document.querySelector("section.error");
  section.getElementsByClassName.display = "block";

  const p = document.createElement("p");
  p.textContent = "Something went wrong";

  const eMsg = document.createElement("p");
  eMsg.textContent = error;
};

// Fetch data from base url using fetch and promises

const button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch(BASE_URL)
    .then((response) => {
      return response.json();
    })
    .then(displayUser)
    .catch(displayError);
});
