<<<<<<< HEAD
const heading = document.querySelector("h1");
=======
const headings = document.querySelectorAll('h1');

const printEventDetails = (e) => {
  console.log('event happened!');
  console.log('type: ', e.type);
  const target = e.target;
  console.log('target: ', target);
  console.log('target text content: ', target.textContent);
};

for (heading of headings) {
  heading.addEventListener('mouseover', printEventDetails);
}
>>>>>>> bf405c341378c9c4c0c0a66a347a6d8a71f97e12
