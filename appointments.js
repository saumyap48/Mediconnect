/**
 * Functions related to appointment booking
 */

// Initialize the appointment section
function initAppointments() {
  const appointmentForm = document.getElementById('appointmentForm');
  const appointmentDoctor = document.getElementById('appointmentDoctor');
  const appointmentDate = document.getElementById('appointmentDate');
  const appointmentTime = document.getElementById('appointmentTime');
  
  // Populate doctor options
  doctorsData.forEach(doctor => {
    const option = document.createElement('option');
    option.value = doctor.id;
    option.textContent = doctor.name;
    appointmentDoctor.appendChild(option);
  });
  
  // Set minimum date to today
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  appointmentDate.min = formattedDate;
  
  // Add event listener for doctor selection
  appointmentDoctor.addEventListener('change', function() {
    updateAvailableTimeSlots();
  });
  
  // Add event listener for date selection
  appointmentDate.addEventListener('change', function() {
    updateAvailableTimeSlots();
  });
  
  // Add event listener for form submission
  appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real app, this would send the data to a backend
    // For this demo, we'll just show a success message
    
    // Get form data
    const formData = {
      name: document.getElementById('appointmentName').value,
      email: document.getElementById('appointmentEmail').value,
      phone: document.getElementById('appointmentPhone').value,
      doctorId: document.getElementById('appointmentDoctor').value,
      date: document.getElementById('appointmentDate').value,
      time: document.getElementById('appointmentTime').value,
      reason: document.getElementById('appointmentReason').value
    };
    
    // Get doctor name
    const doctor = doctorsData.find(d => d.id === parseInt(formData.doctorId));
    const doctorName = doctor ? doctor.name : 'the doctor';
    
    // Show success message
    showSuccessMessage(
      'Appointment Booked Successfully!',
      `Your appointment with ${doctorName} on ${formatDate(formData.date)} at ${formData.time} has been confirmed. We'll send you a confirmation email shortly.`
    );
    
    // Reset form
    appointmentForm.reset();
  });
  
  // Initialize contact form
  initContactForm();
}

// Update available time slots based on selected doctor and date
function updateAvailableTimeSlots() {
  const appointmentDoctor = document.getElementById('appointmentDoctor');
  const appointmentDate = document.getElementById('appointmentDate');
  const appointmentTime = document.getElementById('appointmentTime');
  
  // Clear current time options
  appointmentTime.innerHTML = '<option value="">Select a time</option>';
  
  // If no doctor or date selected, return
  if (!appointmentDoctor.value || !appointmentDate.value) {
    return;
  }
  
  // Get selected doctor
  const doctor = doctorsData.find(d => d.id === parseInt(appointmentDoctor.value));
  if (!doctor) return;
  
  // Get day of week for selected date
  const date = new Date(appointmentDate.value);
  const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
  
  // Get available time slots for that day
  const timeSlots = doctor.schedule[dayOfWeek] || [];
  
  // Add time options
  timeSlots.forEach(time => {
    const option = document.createElement('option');
    option.value = time;
    option.textContent = time;
    appointmentTime.appendChild(option);
  });
  
  // If no time slots available
  if (timeSlots.length === 0) {
    const option = document.createElement('option');
    option.value = "";
    option.textContent = "No availability on this day";
    option.disabled = true;
    appointmentTime.appendChild(option);
  }
}

// Initialize contact form
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real app, this would send the data to a backend
      // For this demo, we'll just show a success message
      
      // Get form data
      const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value
      };
      
      // Show success message
      showSuccessMessage(
        'Message Sent Successfully!',
        'Thank you for contacting us. We will respond to your inquiry as soon as possible.'
      );
      
      // Reset form
      contactForm.reset();
    });
  }
}