async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value;
    const confirm = document.querySelector('#password-confirm').value;

    if (username && password) {
        if (password == confirm)
        {
            const response = await fetch('/api/users', {
                method: 'post',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: { 'Content-Type' : 'application/json'}
            });
            if (response.ok) {
                console.log('Successful');
                window.location.replace('/');
            } else {
                alert('This username already exists.');
            }
        }
        else {
            alert('Your password do not match');
        }
    }
    else {
        alert('Please fill in all the fields.');
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);