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
        document.location.replace('/');
    } else {
        if (other.ok){
            document.location.replace('/');
            return;
        }
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);