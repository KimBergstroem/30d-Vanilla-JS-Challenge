const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
  console.log(topOfNav);
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px"; // setting the navbar height and adding padding to the content.
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener("scroll", fixNav);
