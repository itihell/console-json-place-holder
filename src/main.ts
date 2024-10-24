import { getPost } from "./controllers/post";
import { getUsers } from "./controllers/users";
import { Post } from "./interface/posts.interface";
import { User } from "./interface/users.interface";
import {
  setIndexUser,
  mergePostWithUsers,
  mergePostWithUserIndexed,
  setIndexPost,
} from "./utils";

const viewData = async () => {
  console.time("posts");
  const posts: Post[] = await getPost();
  const users: User[] = await getUsers();

  const userIndexed = setIndexUser(users);
  const postIndexed = setIndexPost(posts);

  //const customPosts = mergePostWithUserIndexed(posts, userIndexed);

  console.log(postIndexed);
  console.timeEnd("posts");
};

viewData();
