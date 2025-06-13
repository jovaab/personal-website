const projectLinks = document.querySelectorAll('.project');

projectLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior (if href="#" is used)

    // Update selected state
    document.querySelector('.selected-project')?.classList.remove('selected-project');
    link.classList.add('selected-project');

    // Hide all project content
    document.querySelectorAll('.project-content').forEach(content =>
      content.classList.remove('active')
    );

    // Show selected content
    const projectId = link.getAttribute('data-id');
    const selectedContent = document.getElementById(projectId);

    if (selectedContent) {
      selectedContent.classList.add('active');
    } else {
      console.warn(`No content found with id="${projectId}"`);
    }
  });

  console.log('Number of project links found:', projectLinks.length);

  console.log('Clicked element:', link);
  console.log('data-id:', link.getAttribute('data-id'));
});