async function logout() {
    const response = await fetch ('api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    const other = await fetch ('../api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });


    if (response.ok) {
        window.location.replace('/');
    } else {
        if (other.ok){
            window.location.replace('/');
            return;
        }
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);