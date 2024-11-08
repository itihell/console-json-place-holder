import { Post } from "../interface/posts.interface";
import { User } from "../interface/users.interface";

export const setIndexUser = (users: User[]) => {
  return users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {} as Record<number, User>);
};

export const setIndexPost = (posts: Post[]) => {
  return posts.reduce((acc, post) => {
    acc[post.id] = post;
    return acc;
  }, {} as Record<number, Post>);
};
