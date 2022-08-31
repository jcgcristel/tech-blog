async function newCommentHandler(event) {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();

    const postId = window.location.href.split('/post/')[1];

    if (comment) {
        const newComment = await fetch('/api/comments', {
            method: 'post',
            body: JSON.stringify({
                text: comment,
                post_id: postId
            }),
            headers: { 'Content-Type' : 'application/json'}
        });
        
        if (newComment.ok) {
            console.log('Successful');
            window.location.reload();
        }
        else {
            alert('Failed to create new comment');
        }
    }
    else {
        alert('Please ensure comment textbox is not blank.');
    }
}

document.querySelector('.newcomment-form').addEventListener('submit', newCommentHandler);