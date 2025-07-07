import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    api.get(`/posts/${postId}`)
      .then((res) => setPost(res.data))
      .catch(() => setPost(null));
  }, [postId]);

  if (!post) return <p>Post not found.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p><em>By {post.owner.email}</em></p>
      <p>{post.content}</p>
    </div>
  );
}
