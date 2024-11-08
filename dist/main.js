"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("./controllers/post");
const users_1 = require("./controllers/users");
const mapUserData_1 = require("./utils/mapUserData");
const mergePostWithUsers_1 = require("./utils/mergePostWithUsers");
const setIndexRecord_1 = require("./utils/setIndexRecord");
const viewData = async () => {
    const users = await (0, users_1.getUsers)();
    const posts = await (0, post_1.getPost)();
    const mapUsers = await (0, mapUserData_1.mapUserData)([...users]);
    const usersIndexed = (0, setIndexRecord_1.setIndexUser)(mapUsers);
    const postIndexed = (0, setIndexRecord_1.setIndexPost)(posts);
    const mergePostAndUsers = (0, mergePostWithUsers_1.mergeUserWithPostsIndexByUser)(usersIndexed, posts);
    //console.log(usersIndexed);
};
viewData();
