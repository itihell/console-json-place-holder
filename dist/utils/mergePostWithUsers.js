"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeUserWithPostsIndexByUser = exports.mergePostWithUsers = void 0;
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
const mergeUserWithPostsIndexByUser = (users, posts) => {
    for (const key in users) {
        console.log(users[key]);
    }
    // return users.map((user) => {
    //   const userPosts = posts[user.id];
    //   return {
    //     ...user,
    //     posts: userPosts,
    //   };
    // });
};
exports.mergeUserWithPostsIndexByUser = mergeUserWithPostsIndexByUser;
