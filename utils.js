/**
 * Utility functions for the application
 */

// Format date to display in a user-friendly format
function formatDate(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
}

// Generate star rating HTML based on rating value
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  let starsHTML = '';
  
  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04" stroke="#FBBC04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  }
  
  // Add half star if needed
  if (halfStar) {
    starsHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04" stroke="#FBBC04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-half"><path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"/></svg>';
  }
  
  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBBC04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  }
  
  return starsHTML;
}

// Count available doctors
function countAvailableDoctors(doctors) {
  return doctors.filter(doctor => doctor.isAvailable).length;
}

// Filter doctors by specialty, availability, and search term
function filterDoctors(doctors, specialty = 'all', availability = 'all', searchTerm = '') {
  return doctors.filter(doctor => {
    // Filter by specialty
    const matchesSpecialty = specialty === 'all' || doctor.specialty === specialty;
    
    // Filter by availability
    const matchesAvailability = 
      availability === 'all' || 
      (availability === 'available' && doctor.isAvailable) || 
      (availability === 'unavailable' && !doctor.isAvailable);
    
    // Filter by search term
    const matchesSearchTerm = 
      searchTerm === '' || 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSpecialty && matchesAvailability && matchesSearchTerm;
  });
}

// Sort doctors based on selected sorting option
function sortDoctors(doctors, sortOption = 'default') {
  const sortedDoctors = [...doctors];
  
  switch (sortOption) {
    case 'name-asc':
      sortedDoctors.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      sortedDoctors.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'rating-desc':
      sortedDoctors.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Default sorting: available doctors first, then by rating
      sortedDoctors.sort((a, b) => {
        if (a.isAvailable !== b.isAvailable) {
          return a.isAvailable ? -1 : 1;
        }
        return b.rating - a.rating;
      });
  }
  
  return sortedDoctors;
}

// Get count of doctors by specialty
function getDoctorCountBySpecialty(doctors, specialtyName) {
  return doctors.filter(doctor => doctor.specialty === specialtyName).length;
}

// Format a time string (convert from 24h to 12h format)
function formatTimeString(timeString) {
  return timeString;
}

// Animate counting for statistics
function animateCounter(element, targetValue, duration = 2000) {
  let startValue = 0;
  const startTime = performance.now();
  
  function updateCounter(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    
    const currentValue = Math.floor(progress * targetValue);
    
    if (currentValue !== startValue) {
      element.textContent = currentValue;
      startValue = currentValue;
    }
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = targetValue;
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Show success message using modal
function showSuccessMessage(title, message) {
  const successModal = document.getElementById('successModal');
  const successModalTitle = document.getElementById('successModalTitle');
  const successModalMessage = document.getElementById('successModalMessage');
  
  // Set modal content
  successModalTitle.textContent = title;
  successModalMessage.textContent = message;
  
  // Show the modal
  const modal = new bootstrap.Modal(successModal);
  modal.show();
}

// Initialize tooltip for Bootstrap
function initTooltips() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

// Format day of week
function formatDayOfWeek(day) {
  return day;
}

// Get current day of week
function getCurrentDayOfWeek() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date().getDay()];
}

// Scroll to element smoothly
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add stagger animation to elements
function addStaggerAnimation(elements, baseDelay = 100) {
  elements.forEach((element, index) => {
    element.classList.add('stagger-item');
    element.style.animationDelay = `${baseDelay * index}ms`;
  });
}