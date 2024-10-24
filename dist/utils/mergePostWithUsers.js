"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeUserWithPostsIndexByUser = exports.mergePostWithUserIndexed = exports.mergePostWithUsers = void 0;
const mergePostWithUsers = (posts, users) => {
    return posts.map((post) => {
        const user = users.find((user) => user.id === post.userId);
        return {
            ...post,
            user,
        };
    });
};
exports.mergePostWithUsers = mergePostWithUsers;
const mergePostWithUserIndexed = (posts, users) => {
    return posts.map((post) => {
        const user = users[post.userId];
        return {
            ...post,
            user,
        };
    });
};
exports.mergePostWithUserIndexed = mergePostWithUserIndexed;
const mergeUserWithPostsIndexByUser = (users, posts) => {
    return users.map((user) => {
        const userPosts = posts[user.id];
        return {
            ...user,
            posts: userPosts,
        };
    });
};
exports.mergeUserWithPostsIndexByUser = mergeUserWithPostsIndexByUser;
