import { useEffect, useState } from "react";
import { fetchAllPosts } from "../services/postService";

interface Post {
  id: number;
  title: string;
  owner: {
    email: string;
  };
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchAllPosts()
      .then(setPosts)
      .catch((err) => {
        console.error("Failed to fetch posts:", err);
      });
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong> by {post.owner.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}