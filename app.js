/**
 * Main application initialization
 */

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize doctors section
  initDoctors();
  
  // Initialize specialties section
  initSpecialties();
  
  // Initialize search functionality
  initSearch();
  
  // Initialize appointments section
  initAppointments();
  
  // Initialize smooth scrolling for navigation links
  initSmoothScrolling();
  
  // Initialize navbar scroll behavior
  initNavbarScroll();
  
  // Initialize animations
  initAnimations();
});

// Initialize smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link, .navbar-brand');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only process internal links
      const href = this.getAttribute('href');
      if (href.startsWith('#') && href !== '#') {
        e.preventDefault();
        
        const targetId = href.substring(1);
        scrollToElement(targetId);
      }
    });
  });
}

// Initialize navbar scroll behavior
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('navbar-scrolled', 'shadow-sm');
    } else {
      navbar.classList.remove('navbar-scrolled', 'shadow-sm');
    }
  });
}

// Initialize animations
function initAnimations() {
  // Animate stats on scroll
  const statElements = document.querySelectorAll('.stat-number');
  
  // Initial animation if stats are in viewport
  statElements.forEach(stat => {
    if (isInViewport(stat)) {
      animateCounter(stat, parseInt(stat.textContent), 2000);
    }
  });
  
  // Animate stats when they come into viewport
  window.addEventListener('scroll', function() {
    statElements.forEach(stat => {
      if (isInViewport(stat) && !stat.classList.contains('counter-visible')) {
        stat.classList.add('counter-visible');
        animateCounter(stat, parseInt(stat.textContent), 2000);
      }
    });
  });
  
  // Add animation classes to doctor cards
  const doctorCards = document.querySelectorAll('.doctor-card');
  doctorCards.forEach(card => {
    card.classList.add('hover-lift');
  });
  
  // Add animation classes to specialty cards
  const specialtyCards = document.querySelectorAll('.specialty-card');
  specialtyCards.forEach(card => {
    card.classList.add('hover-lift');
  });
}