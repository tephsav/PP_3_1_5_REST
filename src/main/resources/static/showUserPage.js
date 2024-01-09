async function getUserPage() {
    let response = await fetch(apiUsersPath + '/current');

    if (response.ok) {
        let user = await response.json();
        let role = user.roles[0].name.replace('ROLE_', '');
        document.getElementById('userEmail').textContent = user.email;
        document.getElementById('userRoles').textContent = role;
        showOneUser(user);
    } else {
        alert("Error HTTP: " + response.status);
    }
}

getUserPage().then(() => console.log("Show user page"));