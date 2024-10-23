"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserIdByPost = void 0;
const getUserIdByPost = (post) => {
    const userIds = post.reduce((acc, item) => {
        if (!acc.includes(item.userId)) {
            acc.push(item.userId);
        }
        return acc;
    }, []);
    return userIds;
};
exports.getUserIdByPost = getUserIdByPost;
