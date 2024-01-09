let apiUsersPath = 'http://localhost:8080/api/users';

function showOneUser(user) {
    let role = user.roles[0].name.replace('ROLE_', '');
    let data =
        `<tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td>${role}</td>
        </tr>`;
    document.getElementById("oneUserBody").innerHTML = data;
}

function getRolesFromQuerySelector(querySelector) {
    let roles = [];
    let selectedRoles = document.querySelector(querySelector).options
    for (let i = 0; i < selectedRoles.length; i++) {
        if (selectedRoles[i].selected) {
            let role = {id: selectedRoles[i].value, name: "ROLE_" + selectedRoles[i].text}
            roles.push(role)
        }
    }
    return roles;
}