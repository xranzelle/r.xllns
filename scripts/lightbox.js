let currentImageIndex = 0;
let images = document.querySelectorAll('.photo img');
let captions = document.querySelectorAll('.photo .caption');
let lightbox = document.getElementById('lightbox');
let lightboxImage = document.getElementById('lightbox-img');
let lightboxCaption = document.getElementById('lightbox-caption');

function openLightbox(index) {
    lightbox.style.display = 'flex';
    lightboxImage.src = images[index].src;
    lightboxCaption.textContent = captions[index].textContent;
    lightboxCaption.textAlign = center;
    currentImageIndex = index;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    lightboxImage.src = images[currentImageIndex].src;
    lightboxCaption.textContent = captions[currentImageIndex].textContent;
}

images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});