const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('click', () => {
    document.querySelector('.selected-project')?.classList.remove('selected-project');
    project.classList.add('selected-project');
  });
});