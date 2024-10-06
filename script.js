let currentImageIndex = 0;
let images = document.querySelectorAll('.gallery img');

function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");

    currentImageIndex = Array.from(images).indexOf(img);

    modal.style.display = "flex";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    modalImg.src = images[currentImageIndex].src;
    captionText.innerHTML = images[currentImageIndex].alt;
}

// Add event listeners to all images to open modal
images.forEach(image => {
    image.addEventListener('click', () => openModal(image));
});
