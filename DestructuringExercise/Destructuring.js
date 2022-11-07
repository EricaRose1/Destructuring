// object destructuring 1
// what does the follwing code print?

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// Object destructuring 2
// what does the following code print?
let planetFacts = {
  numberPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numberPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//destructuring 3
//what does the following code print

function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // 'Your name is Alejandro and you like purple'
getUserData({ firstName: "Melissa" }); //'your name is Melissa and you like green'
getUserData({}); // 'your name is undefined and you like green'
