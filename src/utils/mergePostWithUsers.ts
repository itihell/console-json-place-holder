import { Post } from "../interface/posts.interface";
import { User } from "../interface/users.interface";

export const mergePostWithUsers = (posts: Post[], users: User[]) => {
  return posts.map((post) => {
    const user = users.find((user) => user.id === post.userId);
    return {
      ...post,
      user,
    };
  });
};