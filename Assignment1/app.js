
// Initialize the visible slide to the first slide
let visibleSlide = 0;

//selects all the elements in the class Card and turns them into an array
const slides = Array.from(document.querySelectorAll(".card"));


// Selects the "next" and "previous" buttons
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// Remove the "hidden" class from the first slide to make it visible
slides[0].classList.remove("hidden");

// Select the indicator element 
const indicator = document.getElementById("indicator");

// Adds a click event listener to the "next" button, calling the "moveNext" function
next.addEventListener("click", moveNext);

// Adds a click event listener to the "previous" button, calling the "movePrev" function
prev.addEventListener("click", movePrev);

// Update the indicator text to display the current slide number and total number of slides
updateIndicator();





// Hide the current slide
function moveNext()
{

  slides[visibleSlide].classList.add("hidden");

    // Increment the visible slide index
  visibleSlide++;

  // Check  it goes beyond the last slide and wrap around if necessary
  if (visibleSlide > slides.length - 1) {
    //this creates a loop and sets the index to zero again
    visibleSlide = 0;
  }

  // Display the new current slide and update the indicator
  slides[visibleSlide].classList.remove("hidden");
  updateIndicator();
}







  // Hides the current slide
function movePrev() {
  slides[visibleSlide].classList.add("hidden");
  visibleSlide--;

  // Check if it goes before the first slide and wrap around if necessary
  if (visibleSlide < 0) {
    visibleSlide = slides.length - 1;
  }

  // Display the new current slide and update the indicator
  slides[visibleSlide].classList.remove("hidden");
  updateIndicator();
}






// Function to update the indicator text
function updateIndicator() {
  indicator.innerText = `${visibleSlide + 1} / ${slides.length}`;
}