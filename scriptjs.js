
function hideAllSections() {
    // Get all sections except the image section
    var sections = document.querySelectorAll('main > section:not(#image-section)');
    
    // Hide each section
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
}

// Function to show content of a specific section
function showContent(sectionId) {
    // Hide all sections except the image section
    hideAllSections();
    
    // Show the specified section
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}


  
