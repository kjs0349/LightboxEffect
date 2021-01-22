document.addEventListener('click', lightbox);

function lightbox(e) {
    e.preventDefault();
    console.log(e.target);
    const elem = e.target;
    const elemId = elem.getAttribute('id');
    const lightboxOverlay = document.querySelector('#lightbox-overlay');
    const lightboxImage = document.querySelector('#lightbox-image');

    if(elem.hasAttribute('data-lightboximg')) {
        lightboxOverlay.classList.add('visible');
        const newImage = elem.getAttribute('data-lightboximg');
        lightboxImage.setAttribute('src', newImage);
    }

}