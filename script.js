// Select all action buttons
const buttons = document.querySelectorAll('.action-btn');

// Loop through each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the icon inside the clicked button
        const icon = this.querySelector('ion-icon');

        // Check if the icon is a heart
        if (icon.getAttribute('name') === 'heart-outline') {
            icon.setAttribute('name', 'heart'); // Change to filled heart
            icon.classList.add('heart-filled'); // Apply red color
        } else if (icon.getAttribute('name') === 'heart') {
            icon.setAttribute('name', 'heart-outline'); // Change back to outline
            icon.classList.remove('heart-filled'); // Remove red color
        }
    });
});



document.addEventListener("click", function(e){
    const clickedStar = e.target;
  
    if (clickedStar.classList.contains('rating-stars')) {
        const rating = clickedStar.getAttribute('data-index');
        
       
        const ratingWrapper = clickedStar.closest('.rating-wrapper');
        
       
        ratingWrapper.querySelectorAll('.rating-stars').forEach(star => {
          if (star.getAttribute('data-index') <= rating) {
            star.setAttribute('name', 'star');  
          } else {
            star.setAttribute('name', 'star-outline'); 
          }
        });
      }
  });

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const totalSlides = slides.length;

function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > totalSlides) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    
    // Ensure video starts playing when visible
    Array.from(slides).forEach((slide, index) => {
        const videos = slide.getElementsByTagName('video');
        if (index === slideIndex - 1) {
            Array.from(videos).forEach(video => video.play());
        } else {
            Array.from(videos).forEach(video => video.pause());
        }
    });

    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > totalSlides) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = totalSlides }
    showSlides();
}

document.addEventListener("DOMContentLoaded", showSlides);


