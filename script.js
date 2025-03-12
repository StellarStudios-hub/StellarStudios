// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // Handle Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger'); // The hamburger icon/button
  const menu = document.querySelector('.menu'); // The menu container (the list of buttons/links)
  
  // Add click event to toggle menu visibility
  hamburger.addEventListener('click', function() {
    menu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
  });

  // Close the menu when a link is clicked (for better UX)
  const menuLinks = document.querySelectorAll('.menu a'); // Select all anchor tags in the menu
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menu.classList.remove('active'); // Close the menu when a link is clicked
    });
  });

  // Optionally, add smooth scrolling when clicking on anchor links (if you are using hashes for navigation)
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

});
