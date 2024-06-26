const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function strip(bandName) {
  return bandName.replace(/^(a |the |an)/i, "").trim();
}

const sortedArray = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

console.log(sortedArray);

document.querySelector("#bands").innerHTML = sortedArray
  .map((band) => `<li><strong>${band}</srtong></li>`)
  .join(""); // join is removing the "," and space between.
