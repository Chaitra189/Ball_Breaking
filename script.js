document.querySelector('.animated-figure').addEventListener('click', function() {
    const bubble = document.querySelector('.thought-bubble');
    bubble.classList.toggle('visible'); // Toggle visibility of the thought bubble
});


document.addEventListener("DOMContentLoaded", () => {
  // Modal functionality
  const modal = document.getElementById("myModal");
  const images = document.querySelectorAll('.gallery-item img');
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");

  images.forEach(image => {
      image.onclick = function() {
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
      };
  });

  const span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
      modal.style.display = "none";
  };

  // IntersectionObserver for gallery item animation
  const galleryItems = document.querySelectorAll('.gallery-item');
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  galleryItems.forEach(item => observer.observe(item));
});

