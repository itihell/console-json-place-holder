"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergePostWithUsers = void 0;
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
