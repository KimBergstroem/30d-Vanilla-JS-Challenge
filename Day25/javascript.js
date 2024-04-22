const divs = document.querySelectorAll('div');

// Can be helpful, when using once, as this trigger a example
// a button for only click once. Ecommerce, BUY button

function logText(e) {
    console.log(this.classList.value);
    //e.stopPropagation(); // stop bubbling!
}

divs.forEach(div => div.addEventListener('click', logText,{
    capture: false,
    once: true
}));