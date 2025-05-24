/**
 * Functions related to search functionality
 */

// Initialize search functionality
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  
  // Function to handle search
  function handleSearch() {
    const searchTerm = searchInput.value.trim();
    
    // Filter doctors based on search term
    const filteredDoctors = filterDoctors(doctorsData, 'all', 'all', searchTerm);
    
    // Apply any active filters
    const specialty = document.getElementById('specialtyFilter').value;
    const availability = document.getElementById('availabilityFilter').value;
    const sortOption = document.getElementById('sortFilter').value;
    
    // Filter and sort doctors
    const finalFilteredDoctors = filterDoctors(filteredDoctors, specialty, availability);
    const sortedDoctors = sortDoctors(finalFilteredDoctors, sortOption);
    
    // Render the filtered and sorted doctors
    renderDoctors(sortedDoctors);
    
    // Scroll to doctors section
    scrollToElement('doctors');
  }
  
  // Add event listener to search button
  searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    handleSearch();
  });
  
  // Add event listener to search input for Enter key
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  });
  
  // Add autocomplete suggestions (in a real app, this would be connected to a backend)
  searchInput.addEventListener('input', function() {
    // This would typically make an API call for autocomplete suggestions
    // For this demo, we'll just log to console
    console.log('Searching for:', this.value);
  });
}