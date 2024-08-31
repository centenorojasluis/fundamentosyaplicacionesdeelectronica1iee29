function showSection(sectionId) {
    var sections = document.querySelectorAll('.section-content');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

function showSubSection(subSectionId) {
    var subSections = document.querySelectorAll('.subsection-content');
    subSections.forEach(function(subSection) {
        subSection.style.display = 'none';
    });

    var selectedSubSection = document.getElementById(subSectionId);
    if (selectedSubSection) {
        selectedSubSection.style.display = 'block';
    }
}
