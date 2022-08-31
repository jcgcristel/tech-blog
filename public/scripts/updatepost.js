async function updatePostHandler(event) {
    event.preventDefault();

    const postId = window.location.href.split('/edit/')[1];

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && content) {
        const newPost = await fetch(`/api/posts/${postId}`, {
            method: 'put',
            body: JSON.stringify({
                title: title,
                text: content
            }),
            headers: { 'Content-Type' : 'application/json'}
        });
        
        if (newPost.ok) {
            console.log('Successful');
            window.location.replace('/dashboard');
        }
        else {
            alert('Failed to create update post');
        }
    }
    else {
        alert('Please ensure title and content is not blank.');
    }
}

document.querySelector('.newPost-form').addEventListener('submit', updatePostHandler);