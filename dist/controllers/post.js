"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = exports.getPost = void 0;
// Funcion para hacer fetch de los datos
const getPost = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
    return data;
};
exports.getPost = getPost;
const getPostById = async (id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => response.json());
    return data;
};
exports.getPostById = getPostById;
