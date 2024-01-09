async function deleteModalData(id) {
    let response = await fetch(apiUsersPath + "/id?id=" + id);

    if (response.ok) {
        let user = await response.json();
        document.getElementById('delId').value = user.id;
        document.getElementById('delFirstName').value = user.firstName;
        document.getElementById('delLastName').value = user.lastName;
        document.getElementById('delAge').value = user.age;
        document.getElementById('delEmail').value = user.email;
        document.getElementById('delPassword').value = user.password;

        document.getElementById('delRole').options.length = 0;
        user.roles.forEach(role => {
            let option = document.createElement('option');
            option.text = role.name.replace('ROLE_', '');
            option.value = role.name.replace('ROLE_', '');
            document.getElementById('delRole').add(option);
        });
    } else {
        alert("Error HTTP: " + response.status);
    }
}

async function deleteUser() {
    let urlDel = apiUsersPath + "?id=" + document.getElementById('delId').value;

    let method = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    await fetch(urlDel, method)
        .then(() => {
            document.getElementById('closeDeleteForm').click();
            getAdminPage();
        });
}