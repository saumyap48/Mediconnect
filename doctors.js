/**
 * Functions related to doctor display and interaction
 */

// Initialize the doctors section
function initDoctors() {
  const doctorsContainer = document.getElementById('doctorsContainer');
  const availableDoctorsCount = document.getElementById('availableDoctorsCount');
  
  // Update available doctors count
  const availableCount = countAvailableDoctors(doctorsData);
  availableDoctorsCount.textContent = availableCount;
  
  // Render all doctors initially
  renderDoctors(doctorsData);
  
  // Initialize filters
  initDoctorFilters();
  
  // Set up doctor modal functionality
  setupDoctorModal();
}

// Render doctors list
function renderDoctors(doctors) {
  const doctorsContainer = document.getElementById('doctorsContainer');
  doctorsContainer.innerHTML = '';
  
  if (doctors.length === 0) {
    doctorsContainer.innerHTML = `
      <div class="col-12 text-center py-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x mb-3"><path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <h3 class="mb-3">No doctors found</h3>
        <p class="text-muted">Try adjusting your search or filter criteria.</p>
      </div>
    `;
    return;
  }
  
  doctors.forEach(doctor => {
    const doctorCard = createDoctorCard(doctor);
    doctorsContainer.appendChild(doctorCard);
  });
  
  // Add stagger animation
  const doctorCards = document.querySelectorAll('.doctor-card');
  addStaggerAnimation(Array.from(doctorCards));
}

// Create a doctor card element
function createDoctorCard(doctor) {
  const doctorCol = document.createElement('div');
  doctorCol.className = 'col-md-6 col-lg-4 col-xl-3';
  
  const availabilityClass = doctor.isAvailable ? 'bg-success' : 'bg-secondary';
  const availabilityText = doctor.isAvailable ? 'Available Now' : 'Not Available';
  
  doctorCol.innerHTML = `
    <div class="doctor-card" data-doctor-id="${doctor.id}">
      <div class="doctor-card-image">
        <img src="${doctor.image}" alt="${doctor.name}">
        <span class="doctor-availability-badge ${availabilityClass} text-white">${availabilityText}</span>
      </div>
      <div class="doctor-card-body">
        <h3 class="doctor-name">${doctor.name}</h3>
        <p class="doctor-specialty">${doctor.specialty}</p>
        
        <div class="doctor-rating mb-2">
          <div class="rating-stars">
            ${generateStarRating(doctor.rating)}
          </div>
          <span class="rating-value">${doctor.rating}</span>
          <span class="rating-count">(${doctor.reviewCount} reviews)</span>
        </div>
        
        <div class="doctor-info">
          <span class="doctor-info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </span>
          <span>${doctor.experience} experience</span>
        </div>
        
        <div class="doctor-info">
          <span class="doctor-info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </span>
          <span>${doctor.location}</span>
        </div>
      </div>
      <div class="card-footer bg-white p-3 border-top">
        <div class="doctor-card-footer">
          <button class="btn btn-outline-primary view-profile-btn" data-doctor-id="${doctor.id}">View Profile</button>
          <button class="btn btn-primary book-appointment-btn" data-doctor-id="${doctor.id}">Book Now</button>
        </div>
      </div>
    </div>
  `;
  
  // Add event listener to the view profile button
  doctorCol.querySelector('.view-profile-btn').addEventListener('click', function() {
    openDoctorModal(doctor.id);
  });
  
  // Add event listener to the book appointment button
  doctorCol.querySelector('.book-appointment-btn').addEventListener('click', function() {
    // Set the doctor in the appointment form
    document.getElementById('appointmentDoctor').value = doctor.id;
    // Scroll to appointment section
    scrollToElement('appointment');
  });
  
  // Make the whole card clickable
  doctorCol.querySelector('.doctor-card').addEventListener('click', function(e) {
    // Ignore if clicking on buttons
    if (!e.target.closest('button')) {
      openDoctorModal(doctor.id);
    }
  });
  
  return doctorCol;
}

// Initialize doctor filters
function initDoctorFilters() {
  const specialtyFilter = document.getElementById('specialtyFilter');
  const availabilityFilter = document.getElementById('availabilityFilter');
  const sortFilter = document.getElementById('sortFilter');
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  
  // Populate specialty filter options
  specialtiesData.forEach(specialty => {
    const option = document.createElement('option');
    option.value = specialty.name;
    option.textContent = specialty.name;
    specialtyFilter.appendChild(option);
  });
  
  // Function to apply all filters
  function applyFilters() {
    const specialty = specialtyFilter.value;
    const availability = availabilityFilter.value;
    const sortOption = sortFilter.value;
    const searchTerm = searchInput.value.trim();
    
    // Filter and sort doctors
    const filteredDoctors = filterDoctors(doctorsData, specialty, availability, searchTerm);
    const sortedDoctors = sortDoctors(filteredDoctors, sortOption);
    
    // Render the filtered and sorted doctors
    renderDoctors(sortedDoctors);
  }
  
  // Add event listeners to filters
  specialtyFilter.addEventListener('change', applyFilters);
  availabilityFilter.addEventListener('change', applyFilters);
  sortFilter.addEventListener('change', applyFilters);
  
  // Add event listener to search button
  searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    applyFilters();
    // Scroll to doctors section
    scrollToElement('doctors');
  });
  
  // Add event listener to search input for Enter key
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyFilters();
      // Scroll to doctors section
      scrollToElement('doctors');
    }
  });
}

// Set up doctor modal functionality
function setupDoctorModal() {
  const doctorModal = document.getElementById('doctorModal');
  const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
  
  // Add event listener to book appointment button in modal
  bookAppointmentBtn.addEventListener('click', function() {
    const doctorId = this.getAttribute('data-doctor-id');
    // Set the doctor in the appointment form
    document.getElementById('appointmentDoctor').value = doctorId;
    // Close the modal
    bootstrap.Modal.getInstance(doctorModal).hide();
    // Scroll to appointment section
    scrollToElement('appointment');
  });
}

// Open doctor modal with detailed information
function openDoctorModal(doctorId) {
  const doctor = doctorsData.find(d => d.id === parseInt(doctorId));
  if (!doctor) return;
  
  const doctorModalTitle = document.getElementById('doctorModalTitle');
  const doctorModalBody = document.getElementById('doctorModalBody');
  const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
  
  // Set the title
  doctorModalTitle.textContent = doctor.name;
  
  // Set the doctor ID for the book appointment button
  bookAppointmentBtn.setAttribute('data-doctor-id', doctorId);
  
  // Populate modal body
  doctorModalBody.innerHTML = `
    <div class="doctor-modal-header">
      <div class="doctor-modal-avatar">
        <img src="${doctor.image}" alt="${doctor.name}">
      </div>
      <div class="doctor-modal-info">
        <h3 class="doctor-modal-name">${doctor.name}</h3>
        <p class="doctor-modal-specialty">${doctor.specialty}</p>
        <div class="doctor-modal-rating">
          <div class="rating-stars">
            ${generateStarRating(doctor.rating)}
          </div>
          <span class="rating-value ms-1">${doctor.rating}</span>
          <span class="rating-count">(${doctor.reviewCount} reviews)</span>
        </div>
      </div>
    </div>
    
    <div class="doctor-modal-section">
      <h4>About</h4>
      <p>${doctor.about}</p>
    </div>
    
    <div class="row">
      <div class="col-md-6">
        <div class="doctor-modal-section">
          <h4>Education & Training</h4>
          <ul class="list-unstyled">
            ${doctor.education.map(edu => `<li class="mb-2">• ${edu}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="doctor-modal-section">
          <h4>Languages</h4>
          <ul class="list-unstyled">
            ${doctor.languages.map(lang => `<li class="mb-2">• ${lang}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
    
    <div class="doctor-modal-section">
      <h4>Availability</h4>
      <div class="doctor-schedule">
        ${Object.entries(doctor.schedule).map(([day, times]) => `
          <div class="schedule-day">${day}</div>
        `).join('')}
      </div>
      <div class="availability-times">
        <p class="mb-2">Available time slots:</p>
        ${getCurrentDayOfWeek() in doctor.schedule ? 
          doctor.schedule[getCurrentDayOfWeek()].map(time => `
            <span class="time-slot">${time}</span>
          `).join('') : 
          '<p class="text-muted">No availability for today</p>'
        }
      </div>
    </div>
    
    <div class="doctor-modal-section">
      <h4>Insurance Accepted</h4>
      <div class="d-flex flex-wrap gap-2">
        ${doctor.insurance.map(ins => `
          <span class="badge bg-light text-dark p-2">${ins}</span>
        `).join('')}
      </div>
    </div>
  `;
  
  // Show the modal
  const modal = new bootstrap.Modal(document.getElementById('doctorModal'));
  modal.show();
}