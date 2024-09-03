// Array of image paths
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg'
];

let currentImageIndex = 0;
const imgElement = document.getElementById('slider-img');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// Display the first image when the page loads
window.onload = function() {
    imgElement.src = images[currentImageIndex];
};

// Function to show the next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElement.src = images[currentImageIndex];
}

// Function to show the previous image
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentImageIndex];
}

// Automatic slideshow
function startSlideshow() {
    setInterval(showNextImage, 3000); // Change image every 3 seconds
}

// Event listeners for buttons
nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

// Start the automatic slideshow
startSlideshow();
