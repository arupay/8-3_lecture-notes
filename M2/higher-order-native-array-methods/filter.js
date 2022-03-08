fans = [
  { name: "tony", age: 22 },
  { name: "jack", age: 24 },
  { name: "schnookum", age: 15 },
];

// const pubFans = fans.map(function (fan) {
//   if (fan.age > 18) {
//     return fan;
//   }
// });

let legalFans = fans.filter(function (fan) {
  return fan.age > 18;
});

console.log(legalFans);

// do not edit the comics object
const comics = [
  { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
  { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
  { title: "Nancy", author: "Olivia James", kind: "print" },
  { title: "False Knees", author: "Joshua Barkman", kind: "web" },
];

/**
 * 1
 *
 * Mentally evaluate the code below before running it. What do you think will be logged out? Why?
 */

function isPrintComic(comic) {
  return comic.kind === "print";
}

const isPrintComicResult = comics.filter(isPrintComic);
console.log(isPrintComicResult);

/**
 * 2
 *
 * What would happen if the callback function had the code below instead? Why?
 */

function isPrintComic(comic) {
  return comic.kind;
}

/**
 * 3
 *
 * `type` is not a key on each comic object. Keeping that in mind, would happen if the callback function had the code below instead? Why?
 */

function isPrintComic(comic) {
  return comic.type;
}
