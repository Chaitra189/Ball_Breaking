document.querySelector('.animated-figure').addEventListener('click', function() {
    const bubble = document.querySelector('.thought-bubble');
    bubble.classList.toggle('visible'); // Toggle visibility of the thought bubble
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var images = document.querySelectorAll('.gallery-item img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through each image in the gallery
images.forEach(function(image) {
  image.onclick = function() {
    modal.style.display = "block";  // Show the modal
    modalImg.src = this.src;  // Set the image source to the clicked image
    captionText.innerHTML = this.alt;  // Set the caption (optional)
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
