const newFormHandler = async (event) => {
    event.preventDefault();
  
 
    
    const project_id = event.target.getAttribute('data-project')
    const name = document.querySelector(`#comment-name-${project_id}`).value.trim();

    console.log(project_id)
    console.log(name)
    if (name) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({name, project_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  

$("span").on("click", ".new-comment", newFormHandler)
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  