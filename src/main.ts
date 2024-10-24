import { getPost } from "./controllers/post";
import { getUsers } from "./controllers/users";
import { Post } from "./interface/posts.interface";
import { User } from "./interface/users.interface";
import { setIndexUser,mergePostWithUsers } from "./utils";


const viewData = async () => {
  const posts: Post[] = await getPost();
  const users: User[] = await getUsers();

  const customPosts = mergePostWithUsers(posts, users);
  const userIndexed = setIndexUser(users)

  console.log(users);
};

viewData();
