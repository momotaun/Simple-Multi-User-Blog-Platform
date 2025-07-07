import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post, handleDelete }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const userId = parseInt(user?.sub || "0");
  const isOwner = userId === post.owner_id;

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>By: {post.author_email}</p>

      {isOwner && (
        <div>
          <button onClick={() => navigate(`/edit-post/${post.id}`)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};