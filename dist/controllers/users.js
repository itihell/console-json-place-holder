"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
const getUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json());
    return data;
};
exports.getUsers = getUsers;
const getUserById = async (id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => response.json());
    return data;
};
exports.getUserById = getUserById;
