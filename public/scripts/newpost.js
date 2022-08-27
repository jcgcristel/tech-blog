async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && content) {
        const newPost = await fetch('/api/posts', {
            method: 'post',
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
            alert('Failed to create new post');
        }
    }
    else {
        alert('Please ensure title and content is not blank.');
    }
}

document.querySelector('.newPost-form').addEventListener('submit', newPostHandler);