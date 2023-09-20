const urlSegment = window.location.pathname.split('/');
const postID = urlSegment[urlSegment.length - 1];

const newFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#comment-content').value.trim();

  if (content) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ content, post_id: postID }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/comments/${postID}`);
    } else {
      alert('Failed to add comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);