import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../services/postService";
import { useAuth } from "../context/AuthContext";

interface Post {
  id: number;
  title: string;
  content: string;
  owner: {
    email: string;
  };
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { accessToken, user } = useAuth(); // Make sure `user.email` is available in AuthContext

  useEffect(() => {
    fetchAllPosts()
      .then(setPosts)
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "1rem" }}>
              <strong>{post.title}</strong> by {post.owner.email}
              {accessToken && user?.email === post.owner.email && (
                <>
                  {" | "}
                  <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                </>
              )}
              {" | "}
              <Link to={`/posts/${post.id}`}>Preview</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
