// This is only working in a local server as npm install
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (error) => {
    console.error(error);
    alert('HEY! YOU GOTTA ALOW THAT TO HAPPEN!!!!');
});