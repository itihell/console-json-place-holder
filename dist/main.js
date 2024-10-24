"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("./controllers/post");
const users_1 = require("./controllers/users");
const mergePostWithUsers_1 = require("./utils/mergePostWithUsers");
const viewData = async () => {
    const posts = await (0, post_1.getPost)();
    const users = await (0, users_1.getUsers)();
    const customPosts = (0, mergePostWithUsers_1.mergePostWithUsers)(posts, users);
    console.log(users);
};
viewData();
