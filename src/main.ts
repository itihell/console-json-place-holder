import { getPost } from "./controllers/post";
import { getUsers } from "./controllers/users";
import { Post } from "./interface/posts.interface";
import { User } from "./interface/users.interface";
import { getUserIdByPost } from "./utils/getUserIdByPost";
import { mergePostWithUsers } from "./utils/mergePostWithUsers";

const viewData = async () => {
  const posts: Post[] = await getPost();
  const users: User[] = await getUsers();

  const customPosts = mergePostWithUsers(posts, users);

  console.log(customPosts);
};

viewData();
