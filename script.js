// Create a scroll-to-top button dynamically
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '↑';
scrollToTopButton.id = 'scrollToTop';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px 15px';
scrollToTopButton.style.fontSize = '18px';
scrollToTopButton.style.backgroundColor = '#824606';
scrollToTopButton.style.color = 'white';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.display = 'none'; // Initially hidden
scrollToTopButton.style.zIndex = '1000';
document.body.appendChild(scrollToTopButton);

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
} else {
    scrollToTopButton.style.display = 'none';
}
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});