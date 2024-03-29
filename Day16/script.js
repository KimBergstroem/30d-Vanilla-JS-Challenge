const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500; // 100px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;

  text.style.textShadow = `
  ${xWalk}10px ${yWalk}10px 0 red,
  ${xWalk * -1}10px ${yWalk}10px 0 green,
  ${xWalk}10px ${yWalk * -1}10px 0 blue`;
}

hero.addEventListener("mousemove", shadow);
