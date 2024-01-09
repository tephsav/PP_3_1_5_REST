async function getAdminPage() {
    let response1 = await fetch(apiUsersPath + '/current');

    if (response1.ok) {
        let user = await response1.json();
        let roles = user.roles.map(role => role.name.replace('ROLE_', '')).join(' ');
        document.getElementById('userEmail').textContent = user.email;
        document.getElementById('userRoles').textContent = roles;
        showOneUser(user);
    } else {
        alert("Error HTTP: " + response1.status);
    }

    let response2 = await fetch(apiUsersPath);

    if (response2.ok) {
        let users = await response2.json();
        showAllUsers(users);
    } else {
        alert("Error HTTP: " + response2.status);
    }
}

function showAllUsers(users) {
    let rows = '';
    for (let user of users) {
        let roles = user.roles.map(role => role.name.replace('ROLE_', '')).join(' ');
        let data =
            `<tr id=${user.id}>
                <td>${user.id}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${roles}</td>
                <td>
                    <input id="btnEdit" value="Edit" type="button" class="btn-info btn edit-btn" data-toggle="modal" 
                    data-target="#updateModal" onclick="updateModalData(${user.id})">
                </td>
                <td>
                    <input id="btnDelete" value="Delete" type="button" class="btn btn-danger del-btn" data-toggle="modal"
                    data-target="#deleteModal" onclick="deleteModalData(${user.id})">
                </td>
            </tr>`;
        rows += data;
    }

    document.getElementById("allUsersBody").innerHTML = rows;
}

getAdminPage().then(() => console.log("Show admin page"));