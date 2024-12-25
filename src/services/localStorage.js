import uuid from "react-uuid";

export const getListOfUsers = () => {
    if (!localStorage["@users"]) {
        localStorage["@users"] = JSON.stringify([]);
    }

    let users = JSON.parse(localStorage["@users"]);
    return users;
}

export const getUserById = (id) => {
    const users = getListOfUsers();
    const user = users.find((user) => user.id === id)
    return user;
}

export const addUser = (user) => {
    const users = getListOfUsers();
    users.push({id: uuid(), ...user});
    localStorage["@users"] = JSON.stringify(users)
    alert("Usuario registrado!")
}

export const editUser = (id, newUser) => {
    let users = getListOfUsers();
    users = users.filter((user) => user.id !== id);
    users.push(newUser);
    localStorage["@users"] = JSON.stringify(users);
    alert("Usuario actualizado!")
}

export const deleteUser = (id) => {
    let users = getListOfUsers();
    users = users.filter((user) => user.id !== id);
    localStorage["@users"] = JSON.stringify(users);
    alert("Usuario eliminado!")
}