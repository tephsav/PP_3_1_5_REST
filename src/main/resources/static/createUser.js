let newUserForm = document.getElementById("newUserForm");

async function createUser() {
    let roles = getRolesFromQuerySelector('#selectedRoles');

    let method = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: newUserForm.firstName.value,
            lastName: newUserForm.lastName.value,
            age: newUserForm.age.value,
            email: newUserForm.email.value,
            password: newUserForm.password.value,
            roles: roles
        })
    }

    await fetch(apiUsersPath, method)
        .then(() => {
            newUserForm.reset();
            getAdminPage();
        });
}
