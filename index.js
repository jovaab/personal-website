const projectLinks = document.querySelectorAll('.project');

projectLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove old selected state
    document.querySelector('.selected-project')?.classList.remove('selected-project');
    link.classList.add('selected-project');

    // Switch content
    const projectId = link.getAttribute('data-id');
    showProject(projectId);
  });
});

function showProject(projectId) {
  const contents = document.querySelectorAll('.project-content');
  contents.forEach(content => content.classList.remove('active'));

  const selectedContent = document.getElementById(projectId);
  if (selectedContent) {
    selectedContent.classList.add('active');
  } else {
    console.warn(`No content found with id="${projectId}"`);
  }
}