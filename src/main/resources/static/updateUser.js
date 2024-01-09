async function updateModalData(id) {
    let response = await fetch(apiUsersPath + "/id?id=" + id);

    if (response.ok) {
        let user = await response.json();
        document.getElementById('editId').value = user.id;
        document.getElementById('editFirstName').value = user.firstName;
        document.getElementById('editLastName').value = user.lastName;
        document.getElementById('editAge').value = user.age;
        document.getElementById('editEmail').value = user.email;
    } else {
        alert("Error HTTP: " + response.status);
    }
}

async function updateUser() {
    let roles = getRolesFromQuerySelector('#editRole');

    let method = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: document.getElementById('editId').value,
            firstName: document.getElementById('editFirstName').value,
            lastName: document.getElementById('editLastName').value,
            age: document.getElementById('editAge').value,
            email: document.getElementById('editEmail').value,
            password: document.getElementById('editPassword').value,
            roles: roles
        })
    }

    await fetch(apiUsersPath, method)
        .then(() => {
            document.getElementById('closeUpdateForm').click();
            getAdminPage();
        });
}