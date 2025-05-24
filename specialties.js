/**
 * Functions related to medical specialties
 */

// Initialize the specialties section
function initSpecialties() {
  const specialtiesContainer = document.getElementById('specialtiesContainer');
  
  // Render all specialties
  renderSpecialties(specialtiesData);
}

// Render specialties list
function renderSpecialties(specialties) {
  const specialtiesContainer = document.getElementById('specialtiesContainer');
  specialtiesContainer.innerHTML = '';
  
  specialties.forEach(specialty => {
    const specialtyCard = createSpecialtyCard(specialty);
    specialtiesContainer.appendChild(specialtyCard);
  });
  
  // Add stagger animation
  const specialtyCards = document.querySelectorAll('.specialty-card');
  addStaggerAnimation(Array.from(specialtyCards));
}

// Create a specialty card element
function createSpecialtyCard(specialty) {
  const doctorCount = getDoctorCountBySpecialty(doctorsData, specialty.name);
  
  const specialtyCol = document.createElement('div');
  specialtyCol.className = 'col-md-6 col-lg-3';
  
  specialtyCol.innerHTML = `
    <div class="specialty-card hover-lift" data-specialty="${specialty.name}">
      <div class="specialty-icon">
        ${specialty.icon}
      </div>
      <h4 class="specialty-name">${specialty.name}</h4>
      <p class="specialty-desc">${specialty.description}</p>
      <p class="specialty-count">${doctorCount} Doctors</p>
    </div>
  `;
  
  // Add event listener to filter doctors by this specialty when clicked
  specialtyCol.querySelector('.specialty-card').addEventListener('click', function() {
    const specialtyName = this.getAttribute('data-specialty');
    
    // Set the specialty filter value
    document.getElementById('specialtyFilter').value = specialtyName;
    
    // Trigger change event to apply filter
    document.getElementById('specialtyFilter').dispatchEvent(new Event('change'));
    
    // Scroll to doctors section
    scrollToElement('doctors');
  });
  
  return specialtyCol;
}