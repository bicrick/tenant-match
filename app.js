// Tenant Requirements Mockup - Application JavaScript

// Mock Data
const mockListings = [
  {
    id: 1,
    businessType: "Restaurant",
    businessCategory: "Food & Beverage",
    location: "Downtown Dallas, TX",
    neighborhoods: ["Deep Ellum", "Uptown", "Knox-Henderson"],
    sqftMin: 2000,
    sqftMax: 3500,
    budgetMin: 25,
    budgetMax: 35,
    spaceType: "Retail",
    leaseTerm: "5-10 years",
    moveInDate: "Q2 2024",
    requirements: ["Grease Trap", "Hood Ventilation", "Outdoor Patio", "Street Parking"],
    brokerName: "Sarah Mitchell",
    brokerCompany: "CBRE Dallas",
    brokerEmail: "sarah.mitchell@cbre.com",
    brokerPhone: "(214) 555-0123",
    brokerWebsite: "https://www.cbre.com/dallas",
    postedDate: "2024-01-15",
    description: "Seeking a high-visibility location for an upscale casual dining concept. Need existing kitchen infrastructure or landlord willing to build out. Looking for strong foot traffic and evening activity."
  },
  {
    id: 2,
    businessType: "Medical Office",
    businessCategory: "Healthcare",
    location: "North Dallas, TX",
    neighborhoods: ["Preston Hollow", "Park Cities", "Addison"],
    sqftMin: 3000,
    sqftMax: 5000,
    budgetMin: null,
    budgetMax: null,
    spaceType: "Office",
    leaseTerm: "7-10 years",
    moveInDate: "Q3 2024",
    requirements: ["ADA Compliant", "Ground Floor", "Dedicated Parking", "After Hours Access"],
    brokerName: "Michael Torres",
    brokerCompany: "JLL",
    brokerEmail: "michael.torres@jll.com",
    brokerPhone: "(214) 555-0456",
    brokerWebsite: "https://www.jll.com",
    postedDate: "2024-01-12",
    description: "Specialty medical practice expanding to new location. Requires ground floor access for patient convenience. Prefer established medical corridor with complementary tenants."
  },
  {
    id: 3,
    businessType: "Fitness Studio",
    businessCategory: "Health & Fitness",
    location: "East Dallas, TX",
    neighborhoods: ["Lakewood", "White Rock", "Casa Linda"],
    sqftMin: 4000,
    sqftMax: 6000,
    budgetMin: 18,
    budgetMax: 24,
    spaceType: "Retail",
    leaseTerm: "5-7 years",
    moveInDate: "Q1 2024",
    requirements: ["High Ceilings", "Reinforced Floor", "Shower Facilities", "Ample Parking"],
    brokerName: "Jennifer Adams",
    brokerCompany: "Cushman & Wakefield",
    brokerEmail: "jennifer.adams@cushwake.com",
    brokerPhone: "(214) 555-0789",
    brokerWebsite: "https://www.cushmanwakefield.com",
    postedDate: "2024-01-18",
    description: "Boutique fitness concept looking for visible location in affluent residential area. Need minimum 14ft ceiling height and ability to install specialty flooring."
  },
  {
    id: 4,
    businessType: "Law Firm",
    businessCategory: "Professional Services",
    location: "Uptown Dallas, TX",
    neighborhoods: ["Uptown", "Victory Park", "Arts District"],
    sqftMin: 8000,
    sqftMax: 12000,
    budgetMin: null,
    budgetMax: null,
    spaceType: "Office",
    leaseTerm: "10+ years",
    moveInDate: "Q4 2024",
    requirements: ["Class A Building", "Conference Facilities", "Secure Parking", "24/7 Access"],
    brokerName: "Robert Chen",
    brokerCompany: "Newmark",
    brokerEmail: "robert.chen@newmark.com",
    brokerPhone: "(214) 555-0321",
    brokerWebsite: "https://www.nmrk.com",
    postedDate: "2024-01-10",
    description: "Established law firm consolidating offices. Require prestigious address and high-end finishes. Full floor preferred for security and branding purposes."
  },
  {
    id: 5,
    businessType: "Coffee Shop",
    businessCategory: "Food & Beverage",
    location: "Oak Cliff, TX",
    neighborhoods: ["Bishop Arts", "North Oak Cliff", "Kessler Park"],
    sqftMin: 1200,
    sqftMax: 2000,
    budgetMin: 22,
    budgetMax: 30,
    spaceType: "Retail",
    leaseTerm: "3-5 years",
    moveInDate: "Q1 2024",
    requirements: ["Street Front", "Outdoor Seating", "Water/Sewer", "Visible Signage"],
    brokerName: "Amanda Lewis",
    brokerCompany: "Stream Realty",
    brokerEmail: "amanda.lewis@streamrealty.com",
    brokerPhone: "(214) 555-0654",
    brokerWebsite: "https://www.streamrealty.com",
    postedDate: "2024-01-20",
    description: "Local coffee roaster expanding retail presence. Looking for character space in walkable neighborhood with strong community presence."
  },
  {
    id: 6,
    businessType: "Tech Startup",
    businessCategory: "Technology",
    location: "Deep Ellum, TX",
    neighborhoods: ["Deep Ellum", "Exposition Park", "Fair Park"],
    sqftMin: 5000,
    sqftMax: 8000,
    budgetMin: null,
    budgetMax: null,
    spaceType: "Office",
    leaseTerm: "3-5 years",
    moveInDate: "Q2 2024",
    requirements: ["Open Floor Plan", "Fiber Internet", "Creative Space", "Bike Storage"],
    brokerName: "David Park",
    brokerCompany: "Colliers",
    brokerEmail: "david.park@colliers.com",
    brokerPhone: "(214) 555-0987",
    brokerWebsite: "https://www.colliers.com",
    postedDate: "2024-01-08",
    description: "Growing SaaS company seeking creative office space. Prefer industrial aesthetic with modern amenities. Need flexibility for future expansion."
  },
  {
    id: 7,
    businessType: "Retail Store",
    businessCategory: "Retail",
    location: "Highland Park, TX",
    neighborhoods: ["Highland Park Village", "Preston Center", "Snider Plaza"],
    sqftMin: 2500,
    sqftMax: 4000,
    budgetMin: 45,
    budgetMax: 65,
    spaceType: "Retail",
    leaseTerm: "5-7 years",
    moveInDate: "Q3 2024",
    requirements: ["Prime Location", "Display Windows", "Storage", "Loading Access"],
    brokerName: "Katherine Wright",
    brokerCompany: "Marcus & Millichap",
    brokerEmail: "katherine.wright@marcusmillichap.com",
    brokerPhone: "(214) 555-0246",
    brokerWebsite: "https://www.marcusmillichap.com",
    postedDate: "2024-01-14",
    description: "Luxury home goods retailer seeking flagship Dallas location. Must be in premier shopping district with complementary high-end tenants."
  },
  {
    id: 8,
    businessType: "Warehouse",
    businessCategory: "Industrial",
    location: "South Dallas, TX",
    neighborhoods: ["Cedars", "South Side", "Lamar"],
    sqftMin: 15000,
    sqftMax: 25000,
    budgetMin: 8,
    budgetMax: 12,
    spaceType: "Industrial",
    leaseTerm: "5-10 years",
    moveInDate: "Q2 2024",
    requirements: ["Loading Docks", "Clear Height 24ft+", "Truck Court", "Heavy Power"],
    brokerName: "James Morrison",
    brokerCompany: "CBRE Industrial",
    brokerEmail: "james.morrison@cbre.com",
    brokerPhone: "(214) 555-0135",
    brokerWebsite: "https://www.cbre.com",
    postedDate: "2024-01-16",
    description: "E-commerce fulfillment operation seeking distribution facility close to downtown. Need modern warehouse specs with room for automation equipment."
  },
  {
    id: 9,
    businessType: "Dental Practice",
    businessCategory: "Healthcare",
    location: "Plano, TX",
    neighborhoods: ["Legacy West", "Downtown Plano", "West Plano"],
    sqftMin: 2500,
    sqftMax: 4000,
    budgetMin: 26,
    budgetMax: 34,
    spaceType: "Office",
    leaseTerm: "7-10 years",
    moveInDate: "Q3 2024",
    requirements: ["Plumbing Infrastructure", "Ground Floor", "Visible Signage", "Patient Parking"],
    brokerName: "Lisa Thompson",
    brokerCompany: "Avison Young",
    brokerEmail: "lisa.thompson@avisonyoung.com",
    brokerPhone: "(972) 555-0147",
    brokerWebsite: "https://www.avisonyoung.com",
    postedDate: "2024-01-11",
    description: "Multi-dentist practice relocating to larger space. Need existing dental infrastructure or significant TI allowance. High-traffic retail corridor preferred."
  },
  {
    id: 10,
    businessType: "Coworking Space",
    businessCategory: "Professional Services",
    location: "Fort Worth, TX",
    neighborhoods: ["Sundance Square", "West 7th", "Near Southside"],
    sqftMin: 10000,
    sqftMax: 20000,
    budgetMin: null,
    budgetMax: null,
    spaceType: "Office",
    leaseTerm: "10+ years",
    moveInDate: "Q4 2024",
    requirements: ["Open Layout", "High Ceilings", "Fiber Ready", "Street Presence"],
    brokerName: "Mark Stevens",
    brokerCompany: "Transwestern",
    brokerEmail: "mark.stevens@transwestern.com",
    brokerPhone: "(817) 555-0258",
    brokerWebsite: "https://www.transwestern.com",
    postedDate: "2024-01-13",
    description: "Coworking operator expanding to Fort Worth market. Seeking landmark building with character and visibility. Prefer urban core location with walkable amenities."
  },
  {
    id: 11,
    businessType: "Brewery/Taproom",
    businessCategory: "Food & Beverage",
    location: "Design District, TX",
    neighborhoods: ["Design District", "Trinity Groves", "West Dallas"],
    sqftMin: 6000,
    sqftMax: 10000,
    budgetMin: 14,
    budgetMax: 20,
    spaceType: "Industrial",
    leaseTerm: "5-10 years",
    moveInDate: "Q2 2024",
    requirements: ["Floor Drains", "Heavy Power", "Loading Access", "Outdoor Space"],
    brokerName: "Chris Martinez",
    brokerCompany: "Lee & Associates",
    brokerEmail: "chris.martinez@lee-associates.com",
    brokerPhone: "(214) 555-0369",
    brokerWebsite: "https://www.lee-associates.com",
    postedDate: "2024-01-17",
    description: "Craft brewery seeking production and taproom space. Need industrial zoning with retail component allowed. Prefer creative neighborhood with food/beverage cluster."
  },
  {
    id: 12,
    businessType: "Daycare Center",
    businessCategory: "Education",
    location: "Richardson, TX",
    neighborhoods: ["CityLine", "Prairie Creek", "Canyon Creek"],
    sqftMin: 5000,
    sqftMax: 8000,
    budgetMin: 16,
    budgetMax: 22,
    spaceType: "Retail",
    leaseTerm: "7-10 years",
    moveInDate: "Q1 2024",
    requirements: ["Outdoor Play Area", "Ground Floor", "Drop-off Zone", "Security Features"],
    brokerName: "Nancy Wilson",
    brokerCompany: "Weitzman",
    brokerEmail: "nancy.wilson@weitzman.com",
    brokerPhone: "(972) 555-0471",
    brokerWebsite: "https://www.weitzmangroup.com",
    postedDate: "2024-01-19",
    description: "Premium childcare provider expanding in Richardson market. Need dedicated outdoor space and safe drop-off area. Proximity to corporate offices highly desired."
  }
];

// State
let currentFilters = {
  location: '',
  businessType: '',
  sqftRange: '',
  budgetRange: ''
};

let currentSort = {
  column: null,
  direction: 'asc'
};

// Known Locations (for autocomplete)
const knownLocations = [
  "Downtown Dallas, TX",
  "Uptown Dallas, TX",
  "North Dallas, TX",
  "East Dallas, TX",
  "West Dallas, TX",
  "South Dallas, TX",
  "Oak Cliff, TX",
  "Deep Ellum, TX",
  "Design District, TX",
  "Highland Park, TX",
  "University Park, TX",
  "Knox-Henderson, TX",
  "Lower Greenville, TX",
  "Lakewood, TX",
  "Lake Highlands, TX",
  "Preston Hollow, TX",
  "Park Cities, TX",
  "Victory Park, TX",
  "Arts District, TX",
  "Cedars, TX",
  "Bishop Arts, TX",
  "Trinity Groves, TX",
  "Plano, TX",
  "Frisco, TX",
  "McKinney, TX",
  "Allen, TX",
  "Richardson, TX",
  "Garland, TX",
  "Mesquite, TX",
  "Irving, TX",
  "Las Colinas, TX",
  "Carrollton, TX",
  "Lewisville, TX",
  "Flower Mound, TX",
  "Coppell, TX",
  "Addison, TX",
  "Fort Worth, TX",
  "Arlington, TX",
  "Grand Prairie, TX",
  "Denton, TX",
  "Southlake, TX",
  "Grapevine, TX",
  "Colleyville, TX",
  "Keller, TX",
  "Bedford, TX",
  "Euless, TX",
  "Hurst, TX",
  "North Richland Hills, TX",
  "Mansfield, TX",
  "Burleson, TX",
  "Weatherford, TX",
  "Cleburne, TX",
  "Midlothian, TX",
  "Waxahachie, TX",
  "Rockwall, TX",
  "Rowlett, TX",
  "Wylie, TX",
  "Murphy, TX",
  "Sachse, TX",
  "Prosper, TX",
  "Celina, TX",
  "Little Elm, TX",
  "The Colony, TX",
  "Farmers Branch, TX"
];

// Utility Functions
function formatCurrency(value) {
  return '$' + value.toLocaleString();
}

function formatSqft(value) {
  return value.toLocaleString() + ' sqft';
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('');
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Sort Functions
function sortListings(listings) {
  if (!currentSort.column) return listings;
  
  return [...listings].sort((a, b) => {
    let valA = a[currentSort.column];
    let valB = b[currentSort.column];
    
    // Handle null values (push to end)
    if (valA === null && valB === null) return 0;
    if (valA === null) return 1;
    if (valB === null) return -1;
    
    // Handle numeric columns
    if (typeof valA === 'number' && typeof valB === 'number') {
      return currentSort.direction === 'asc' ? valA - valB : valB - valA;
    }
    
    // Handle string columns
    valA = String(valA).toLowerCase();
    valB = String(valB).toLowerCase();
    
    if (valA < valB) return currentSort.direction === 'asc' ? -1 : 1;
    if (valA > valB) return currentSort.direction === 'asc' ? 1 : -1;
    return 0;
  });
}

function handleSort(column) {
  if (currentSort.column === column) {
    // Toggle direction if same column
    currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
  } else {
    // New column, start with ascending
    currentSort.column = column;
    currentSort.direction = 'asc';
  }
  
  // Update header UI
  document.querySelectorAll('.data-table th').forEach(th => {
    th.classList.remove('sorted', 'asc', 'desc');
  });
  
  const activeHeader = document.querySelector(`th[data-sort="${column}"]`);
  if (activeHeader) {
    activeHeader.classList.add('sorted', currentSort.direction);
  }
  
  renderListings();
}

// Filter Functions
function filterListings(listings) {
  return listings.filter(listing => {
    // Location filter
    if (currentFilters.location && !listing.location.toLowerCase().includes(currentFilters.location.toLowerCase())) {
      return false;
    }
    
    // Business type filter
    if (currentFilters.businessType && listing.businessCategory !== currentFilters.businessType) {
      return false;
    }
    
    // Square footage filter
    if (currentFilters.sqftRange) {
      const [min, max] = currentFilters.sqftRange.split('-').map(Number);
      if (max) {
        if (listing.sqftMin > max || listing.sqftMax < min) return false;
      } else {
        if (listing.sqftMax < min) return false;
      }
    }
    
    // Budget filter
    if (currentFilters.budgetRange) {
      const [min, max] = currentFilters.budgetRange.split('-').map(Number);
      if (max) {
        if (listing.budgetMin > max || listing.budgetMax < min) return false;
      } else {
        if (listing.budgetMax < min) return false;
      }
    }
    
    return true;
  });
}

// Render Functions
function formatBudget(listing) {
  if (listing.budgetMin === null || listing.budgetMax === null) {
    return '<span style="color: var(--text-light);">Contact broker</span>';
  }
  return `$${listing.budgetMin} - $${listing.budgetMax}`;
}

function renderListingRow(listing) {
  const row = document.createElement('tr');
  
  row.innerHTML = `
    <td class="table-business-type">${listing.businessType}</td>
    <td><span class="table-category">${listing.businessCategory}</span></td>
    <td class="table-location">${listing.location}</td>
    <td>${listing.sqftMin.toLocaleString()} - ${listing.sqftMax.toLocaleString()}</td>
    <td>${formatBudget(listing)}</td>
    <td>${listing.leaseTerm}</td>
    <td>${listing.moveInDate}</td>
    <td class="table-broker">${listing.brokerName}</td>
    <td class="table-action"><a href="post-detail.html?id=${listing.id}" class="view-link">View</a></td>
  `;
  
  return row;
}

function renderListings() {
  const container = document.getElementById('listings-container');
  if (!container) return;
  
  const filtered = sortListings(filterListings(mockListings));
  container.innerHTML = '';
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; padding: 48px; color: var(--text-medium);">
          <p style="font-weight: 600; margin-bottom: 8px;">No matching requirements</p>
          <p style="font-size: 13px;">Try adjusting your filters to see more results.</p>
        </td>
      </tr>
    `;
    return;
  }
  
  filtered.forEach(listing => {
    container.appendChild(renderListingRow(listing));
  });
  
  // Update count
  const countEl = document.getElementById('results-count');
  if (countEl) {
    countEl.textContent = `${filtered.length} tenant requirement${filtered.length !== 1 ? 's' : ''}`;
  }
}

// CSV Download
function downloadCSV() {
  const filtered = filterListings(mockListings);
  
  const headers = [
    'Business Type',
    'Category',
    'Location',
    'Neighborhoods',
    'Min Sqft',
    'Max Sqft',
    'Min Budget',
    'Max Budget',
    'Space Type',
    'Lease Term',
    'Move-in Date',
    'Requirements',
    'Broker Name',
    'Broker Company',
    'Broker Email',
    'Broker Phone',
    'Broker Website',
    'Posted Date'
  ];
  
  const rows = filtered.map(listing => [
    listing.businessType,
    listing.businessCategory,
    listing.location,
    listing.neighborhoods.join('; '),
    listing.sqftMin,
    listing.sqftMax,
    listing.budgetMin || '',
    listing.budgetMax || '',
    listing.spaceType,
    listing.leaseTerm,
    listing.moveInDate,
    listing.requirements.join('; '),
    listing.brokerName,
    listing.brokerCompany,
    listing.brokerEmail,
    listing.brokerPhone,
    listing.brokerWebsite || '',
    listing.postedDate
  ]);
  
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `tenant-requirements-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Detail Page Functions
function loadListingDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const listing = mockListings.find(l => l.id === id);
  
  if (!listing) {
    document.querySelector('.detail-page').innerHTML = `
      <div class="empty-state">
        <h3>Listing not found</h3>
        <p>This tenant requirement may have been removed.</p>
        <a href="landlord-browse.html" class="btn btn-primary" style="margin-top: 20px;">Browse All Requirements</a>
      </div>
    `;
    return;
  }
  
  // Populate detail page
  document.getElementById('detail-business-type').textContent = listing.businessType;
  document.getElementById('detail-location').textContent = listing.location;
  document.getElementById('detail-category').textContent = listing.businessCategory;
  document.getElementById('detail-sqft').textContent = `${listing.sqftMin.toLocaleString()} - ${listing.sqftMax.toLocaleString()} sqft`;
  document.getElementById('detail-budget').textContent = listing.budgetMin ? `$${listing.budgetMin} - $${listing.budgetMax} per sqft/year` : 'Contact broker';
  document.getElementById('detail-space-type').textContent = listing.spaceType;
  document.getElementById('detail-lease-term').textContent = listing.leaseTerm;
  document.getElementById('detail-move-in').textContent = listing.moveInDate;
  document.getElementById('detail-posted').textContent = formatDate(listing.postedDate);
  document.getElementById('detail-description').textContent = listing.description;
  
  // Neighborhoods
  const neighborhoodsEl = document.getElementById('detail-neighborhoods');
  neighborhoodsEl.innerHTML = listing.neighborhoods.map(n => `<span class="amenity-tag">${n}</span>`).join('');
  
  // Requirements
  const requirementsEl = document.getElementById('detail-requirements');
  requirementsEl.innerHTML = listing.requirements.map(r => `<span class="amenity-tag">${r}</span>`).join('');
  
  // Broker info
  document.getElementById('broker-avatar').textContent = getInitials(listing.brokerName);
  document.getElementById('broker-name').textContent = listing.brokerName;
  document.getElementById('broker-company').textContent = listing.brokerCompany;
  document.getElementById('broker-email').textContent = listing.brokerEmail;
  document.getElementById('broker-phone').textContent = listing.brokerPhone;
  
  // Website
  const websiteEl = document.getElementById('broker-website');
  if (websiteEl && listing.brokerWebsite) {
    websiteEl.href = listing.brokerWebsite;
    websiteEl.textContent = listing.brokerWebsite.replace(/^https?:\/\//, '').replace(/\/$/, '');
    websiteEl.parentElement.style.display = 'flex';
  } else if (websiteEl) {
    websiteEl.parentElement.style.display = 'none';
  }
}

// Form Functions
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  
  // Get checkboxes
  const requirements = [];
  document.querySelectorAll('input[name="requirements"]:checked').forEach(cb => {
    requirements.push(cb.value);
  });
  data.requirements = requirements;
  
  // Save to localStorage (mock save)
  const saved = JSON.parse(localStorage.getItem('savedListings') || '[]');
  data.id = Date.now();
  data.postedDate = new Date().toISOString().split('T')[0];
  saved.push(data);
  localStorage.setItem('savedListings', JSON.stringify(saved));
  
  // Show success toast
  showToast('Your tenant requirement has been posted successfully!');
  
  // Reset form
  e.target.reset();
}

// Location Autocomplete
function setupLocationAutocomplete() {
  const input = document.getElementById('location');
  const dropdown = document.getElementById('location-dropdown');
  if (!input || !dropdown) return;
  
  let selectedValue = '';
  let highlightedIndex = -1;
  
  function renderOptions(filter = '') {
    const filtered = knownLocations.filter(loc => 
      loc.toLowerCase().includes(filter.toLowerCase())
    );
    
    if (filtered.length === 0) {
      dropdown.innerHTML = '<div class="autocomplete-no-results">No matching locations found</div>';
      return;
    }
    
    dropdown.innerHTML = filtered.map((loc, index) => `
      <div class="autocomplete-option ${loc === selectedValue ? 'selected' : ''}" 
           data-value="${loc}" 
           data-index="${index}">
        ${highlightMatch(loc, filter)}
      </div>
    `).join('');
    
    // Add click handlers
    dropdown.querySelectorAll('.autocomplete-option').forEach(option => {
      option.addEventListener('click', () => {
        selectOption(option.dataset.value);
      });
    });
  }
  
  function highlightMatch(text, filter) {
    if (!filter) return text;
    const regex = new RegExp(`(${filter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }
  
  function selectOption(value) {
    selectedValue = value;
    input.value = value;
    input.classList.add('has-value');
    dropdown.classList.remove('open');
    highlightedIndex = -1;
  }
  
  function openDropdown() {
    renderOptions(input.value);
    dropdown.classList.add('open');
  }
  
  function closeDropdown() {
    dropdown.classList.remove('open');
    highlightedIndex = -1;
  }
  
  // Input events
  input.addEventListener('focus', () => {
    openDropdown();
  });
  
  input.addEventListener('input', () => {
    selectedValue = '';
    input.classList.remove('has-value');
    highlightedIndex = -1;
    renderOptions(input.value);
    dropdown.classList.add('open');
  });
  
  input.addEventListener('blur', (e) => {
    // Delay to allow click on option
    setTimeout(() => {
      // If typed value matches a known location exactly, select it
      const exactMatch = knownLocations.find(loc => 
        loc.toLowerCase() === input.value.toLowerCase()
      );
      if (exactMatch) {
        selectOption(exactMatch);
      } else if (!selectedValue) {
        // Clear if no valid selection
        input.value = '';
        input.classList.remove('has-value');
      }
      closeDropdown();
    }, 200);
  });
  
  // Keyboard navigation
  input.addEventListener('keydown', (e) => {
    const options = dropdown.querySelectorAll('.autocomplete-option');
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      highlightedIndex = Math.min(highlightedIndex + 1, options.length - 1);
      updateHighlight(options);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      highlightedIndex = Math.max(highlightedIndex - 1, 0);
      updateHighlight(options);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && options[highlightedIndex]) {
        selectOption(options[highlightedIndex].dataset.value);
      }
    } else if (e.key === 'Escape') {
      closeDropdown();
      input.blur();
    }
  });
  
  function updateHighlight(options) {
    options.forEach((opt, i) => {
      opt.classList.toggle('highlighted', i === highlightedIndex);
      if (i === highlightedIndex) {
        opt.scrollIntoView({ block: 'nearest' });
      }
    });
  }
  
  // Close on click outside
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      closeDropdown();
    }
  });
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Filter UI Functions
function setupFilters() {
  // Location search
  const searchInput = document.getElementById('location-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentFilters.location = e.target.value;
      renderListings();
    });
  }
  
  // Dropdown filters
  document.querySelectorAll('.filter-group').forEach(group => {
    const btn = group.querySelector('.filter-btn');
    const dropdown = group.querySelector('.filter-dropdown');
    
    if (btn && dropdown) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        // Close other dropdowns
        document.querySelectorAll('.filter-dropdown').forEach(d => {
          if (d !== dropdown) d.classList.remove('open');
        });
        dropdown.classList.toggle('open');
      });
      
      dropdown.querySelectorAll('.filter-option').forEach(option => {
        option.addEventListener('click', () => {
          const filterType = option.dataset.filter;
          const filterValue = option.dataset.value;
          
          // Update filter
          currentFilters[filterType] = filterValue;
          
          // Update UI
          dropdown.querySelectorAll('.filter-option').forEach(o => o.classList.remove('selected'));
          option.classList.add('selected');
          
          // Update button text
          btn.querySelector('span').textContent = option.textContent;
          if (filterValue) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
          
          dropdown.classList.remove('open');
          renderListings();
        });
      });
    }
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.filter-dropdown').forEach(d => d.classList.remove('open'));
  });
}


// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Check which page we're on
  const path = window.location.pathname;
  
  if (path.includes('landlord-browse')) {
    setupFilters();
    renderListings();
    
    // CSV download button
    const downloadBtn = document.getElementById('download-csv');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', downloadCSV);
    }
    
    // Sortable headers
    document.querySelectorAll('.data-table th[data-sort]').forEach(th => {
      th.addEventListener('click', () => {
        handleSort(th.dataset.sort);
      });
    });
  } else if (path.includes('post-detail')) {
    loadListingDetail();
  } else if (path.includes('broker-form')) {
    const form = document.getElementById('broker-form');
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }
    
    // Setup location autocomplete
    setupLocationAutocomplete();
  }
});

