"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("./controllers/post");
const users_1 = require("./controllers/users");
const utils_1 = require("./utils");
const viewData = async () => {
    console.time("posts");
    const posts = await (0, post_1.getPost)();
    const users = await (0, users_1.getUsers)();
    const userIndexed = (0, utils_1.setIndexUser)(users);
    const customPosts = (0, utils_1.mergePostWithUserIndexed)(posts, userIndexed);
    console.log(customPosts);
    console.timeEnd("posts");
};
viewData();
