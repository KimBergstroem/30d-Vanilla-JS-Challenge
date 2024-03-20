const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Console stuff

// Regular
console.log("hello");

// Interpolated %s
console.log("Hello I am %s", "asdad");

// Styled %c
console.log("%c Iam some great text", "font-size: 50px");

// warning!
console.warn("OH NOO!");

// Error :|
console.error("shit!");

// Info
console.info("crocodiles eat 3-4 ppl per year");

// Testing make a statement
const p = document.querySelector("p");
console.assert(p.classList.contains("eat"), "That is wrong!");
console.assert(1 === 2, "Thats is wrong!");

// clearing
console.clear();

// Viewing DOM Elements
console.log("p");
console.dir("p"); // Opens all elements within the selected elemtn

// Grouping together and put it in the console
dogs.forEach((dog) => {
  console.groupCollapsed(dog.name); // make every object to a nice dropdown
  console.log(`this is ${dog.name}`);
  console.log(`this is ${dog.age}`);
  console.groupEnd(dog.name); // make every object to a nice dropdown
});

// counting
console.count("wes");
console.count("wes");
console.count("wes");
console.count("steve");

// timing
console.time("fetching data");
fetch("https://github.com/users/KimBergstroem")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// Display an array as a table in console
console.table(dogs);
