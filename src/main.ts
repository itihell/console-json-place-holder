import { renderPost, renderUser } from "./controllers";

(async () => {
  console.time("post");
  await renderUser();
  console.timeEnd("post");
})();
