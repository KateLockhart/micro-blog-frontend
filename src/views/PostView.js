import { useParams } from "react-router-dom";
import { posts } from "../post.config";
import { Post } from "../components/Post";

export const PostView = () => {
  let params = useParams();

  let post = posts.find((post) => post.id === Number(params.postId));

  return <Post postUrl={post?.location || ""} />;
};
