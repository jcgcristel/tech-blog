async function delPostHandler(event) {
    event.preventDefault();

    const postId = window.location.href.split('/edit/')[1];

    const delPost = await fetch(`/api/posts/${postId}`, {
        method: 'delete',
        headers: { 'Content-Type' : 'application/json'}
    });
    
    if (delPost.ok) {
        console.log('Successful');
        window.location.replace('/dashboard');
    }
    else {
        alert('Failed to delete post');
    }
    
}

document.querySelector('#delete').addEventListener('click', delPostHandler);