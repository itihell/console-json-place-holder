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

export const mergeUserWithPostsIndexByUser = (
  users: Record<number, User>,
  posts: Post[]
) => {
  let userPosts: Record<number, Post[]> = {};
  for (const key in users) {
    console.log(users[key]);
    const postsOfUser = posts.filter((post) => post.userId === parseInt(key));
  }

  // return users.map((user) => {
  //   const userPosts = posts[user.id];
  //   return {
  //     ...user,
  //     posts: userPosts,
  //   };
  // });
};
