/**
 * Mock data for doctors and specialties
 */

// Mock data for doctors
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.9,
    reviewCount: 124,
    experience: "12 years",
    isAvailable: true,
    location: "Main Hospital, Floor 3",
    image: "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    about: "Dr. Sarah Johnson is a board-certified cardiologist with over 12 years of experience in treating heart conditions. She specializes in preventive cardiology and heart failure management.",
    education: [
      "MD in Cardiology, Harvard Medical School",
      "Residency at Johns Hopkins Hospital",
      "Fellowship in Cardiovascular Disease, Mayo Clinic"
    ],
    languages: ["English", "Spanish"],
    schedule: {
      Monday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"],
      Tuesday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"],
      Wednesday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"],
      Thursday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"],
      Friday: ["09:00 AM", "10:00 AM", "11:00 AM"]
    },
    insurance: ["BlueCross", "Aetna", "Cigna", "UnitedHealthcare"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    rating: 4.8,
    reviewCount: 98,
    experience: "15 years",
    isAvailable: true,
    location: "Neurology Center, Building B",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    about: "Dr. Michael Chen is a renowned neurologist specializing in the diagnosis and treatment of complex neurological disorders. He has particular expertise in stroke prevention and headache management.",
    education: [
      "MD, Yale School of Medicine",
      "Neurology Residency, UCSF Medical Center",
      "Fellowship in Vascular Neurology, Mass General Hospital"
    ],
    languages: ["English", "Mandarin"],
    schedule: {
      Monday: ["08:00 AM", "09:00 AM", "10:00 AM", "01:00 PM", "02:00 PM"],
      Tuesday: ["08:00 AM", "09:00 AM", "10:00 AM", "01:00 PM", "02:00 PM"],
      Wednesday: [],
      Thursday: ["08:00 AM", "09:00 AM", "10:00 AM", "01:00 PM", "02:00 PM"],
      Friday: ["08:00 AM", "09:00 AM", "10:00 AM", "01:00 PM", "02:00 PM"]
    },
    insurance: ["Aetna", "Cigna", "Medicare", "Kaiser Permanente"]
  },
  {
    id: 3,
    name: "Dr. Lisa Patel",
    specialty: "Pediatrics",
    rating: 4.9,
    reviewCount: 156,
    experience: "10 years",
    isAvailable: false,
    location: "Children's Medical Center",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    about: "Dr. Lisa Patel is a compassionate pediatrician dedicated to providing comprehensive care for children from newborns to adolescents. She takes a holistic approach to children's health and development.",
    education: [
      "MD, University of Pennsylvania School of Medicine",
      "Pediatric Residency, Children's Hospital of Philadelphia",
      "Fellowship in Developmental Pediatrics, Boston Children's Hospital"
    ],
    languages: ["English", "Hindi", "Gujarati"],
    schedule: {
      Monday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"],
      Tuesday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"],
      Wednesday: ["09:00 AM", "10:00 AM", "11:00 AM"],
      Thursday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"],
      Friday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"]
    },
    insurance: ["BlueCross", "Aetna", "United Healthcare", "Medicaid"]
  },
  {
    id: 4,
    name: "Dr. Robert Williams",
    specialty: "Orthopedics",
    rating: 4.7,
    reviewCount: 89,
    experience: "18 years",
    isAvailable: true,
    location: "Orthopedic & Sports Medicine Center",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    about: "Dr. Robert Williams is an orthopedic surgeon specializing in sports medicine and joint reconstruction. He has worked with professional athletes and has extensive experience in minimally invasive surgical techniques.",
    education: [
      "MD, Duke University School of Medicine",
      "Orthopedic Surgery Residency, Hospital for Special Surgery",
      "Fellowship in Sports Medicine, Andrews Institute"
    ],
    languages: ["English"],
    schedule: {
      Monday: ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
      Tuesday: ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
      Wednesday: ["01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"],
      Thursday: ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
      Friday: ["01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"]
    },
    insurance: ["BlueCross", "Cigna", "Medicare", "UnitedHealthcare"]
  },
  {
    id: 5,
    name: "Dr. Emily Thompson",
    specialty: "Dermatology",
    rating: 4.8,
    reviewCount: 112,
    experience: "9 years",
    isAvailable: true,
    location: "Dermatology Clinic, Medical Plaza",
    image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    about: "Dr. Emily Thompson is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. She is passionate about skin cancer prevention and treatment.",
    education: [
      "MD, Stanford University School of Medicine",
      "Dermatology Residency, University of California, San Francisco",
      "Fellowship in Mohs Surgery, Memorial Sloan Kettering Cancer Center"
    ],
    languages: ["English", "French"],
    schedule: {
      Monday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"],
      Tuesday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"],
      Wednesday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"],
      Thursday: [],
      Friday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"]
    },
    insurance: ["Aetna", "Cigna", "BlueCross", "UnitedHealthcare"]
  },
  {
    id: 6,
    name: "Dr. David Martinez",
    specialty: "Psychiatry",
    rating: 4.9,
    reviewCount: 78,
    experience: "14 years",
    isAvailable: false,
    location: "Behavioral Health Center",
    image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    about: "Dr. David Martinez is a compassionate psychiatrist who specializes in mood disorders, anxiety, and PTSD. He believes in a holistic approach to mental health that addresses biological, psychological, and social factors.",
    education: [
      "MD, Columbia University College of Physicians and Surgeons",
      "Psychiatry Residency, New York-Presbyterian Hospital",
      "Fellowship in Addiction Psychiatry, Mount Sinai Hospital"
    ],
    languages: ["English", "Spanish"],
    schedule: {
      Monday: ["10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"],
      Tuesday: ["10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"],
      Wednesday: ["10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"],
      Thursday: ["10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"],
      Friday: []
    },
    insurance: ["BlueCross", "Aetna", "Cigna", "Humana"]
  },
  {
    id: 7,
    name: "Dr. Jennifer Wilson",
    specialty: "OB/GYN",
    rating: 4.7,
    reviewCount: 143,
    experience: "11 years",
    isAvailable: true,
    location: "Women's Health Center",
    image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    about: "Dr. Jennifer Wilson is an obstetrician and gynecologist who provides comprehensive care for women at all stages of life. She has special interests in minimally invasive surgery and high-risk pregnancies.",
    education: [
      "MD, University of Michigan Medical School",
      "OB/GYN Residency, Northwestern Memorial Hospital",
      "Fellowship in Maternal-Fetal Medicine, University of California, San Francisco"
    ],
    languages: ["English"],
    schedule: {
      Monday: ["08:00 AM", "09:00 AM", "10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"],
      Tuesday: ["08:00 AM", "09:00 AM", "10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"],
      Wednesday: ["08:00 AM", "09:00 AM", "10:00 AM"],
      Thursday: ["08:00 AM", "09:00 AM", "10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"],
      Friday: ["08:00 AM", "09:00 AM", "10:00 AM"]
    },
    insurance: ["BlueCross", "Aetna", "Cigna", "UnitedHealthcare", "Medicaid"]
  },
  {
    id: 8,
    name: "Dr. James Taylor",
    specialty: "Family Medicine",
    rating: 4.8,
    reviewCount: 167,
    experience: "20 years",
    isAvailable: true,
    location: "Community Health Clinic",
    image: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    about: "Dr. James Taylor is a dedicated family physician with two decades of experience. He provides comprehensive care for patients of all ages and has a special interest in preventive medicine and chronic disease management.",
    education: [
      "MD, University of Virginia School of Medicine",
      "Family Medicine Residency, Carolinas Medical Center",
      "Board Certified in Family Medicine"
    ],
    languages: ["English"],
    schedule: {
      Monday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"],
      Tuesday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"],
      Wednesday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"],
      Thursday: ["09:00 AM", "10:00 AM", "11:00 AM"],
      Friday: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"]
    },
    insurance: ["BlueCross", "Medicare", "Medicaid", "Aetna", "Cigna"]
  }
];

// Mock data for specialties
const specialtiesData = [
  {
    id: 1,
    name: "Cardiology",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4 .5-1h6.78"/></svg>',
    description: "Diagnosis and treatment of heart conditions"
  },
  {
    id: 2,
    name: "Neurology",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',
    description: "Specializing in disorders of the nervous system"
  },
  {
    id: 3,
    name: "Pediatrics",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baby"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.1.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>',
    description: "Medical care for infants, children, and adolescents"
  },
  {
    id: 4,
    name: "Orthopedics",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bone"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/></svg>',
    description: "Focus on the musculoskeletal system"
  },
  {
    id: 5,
    name: "Dermatology",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-face"><path d="M3 7v-1a2 2 0 0 1 2-2h1"/><path d="M18 4h1a2 2 0 0 1 2 2v1"/><path d="M21 17v1a2 2 0 0 1-2 2h-1"/><path d="M6 20H5a2 2 0 0 1-2-2v-1"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>',
    description: "Specializing in skin, hair, and nail health"
  },
  {
    id: 6,
    name: "Psychiatry",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/><path d="m16 8-4 4"/><path d="m12 4 4 4"/><path d="m8 8 4 4"/><path d="M12 16v4"/><path d="M16 16H8"/><path d="m8 16 4-4"/></svg>',
    description: "Diagnosis and treatment of mental health disorders"
  },
  {
    id: 7,
    name: "OB/GYN",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stethoscope"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>',
    description: "Women's reproductive health and pregnancy care"
  },
  {
    id: 8,
    name: "Family Medicine",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    description: "Comprehensive healthcare for patients of all ages"
  }
];