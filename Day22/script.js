const trigger = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink(){   
    // To get the elements position and size on a page exactly
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    // Attaach the values to the empty string we created before
    const coords = {
        // Add the scroll Y and X into the actual top and left variables
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }

    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

trigger.forEach(a => a.addEventListener('mouseenter', highlightLink));
