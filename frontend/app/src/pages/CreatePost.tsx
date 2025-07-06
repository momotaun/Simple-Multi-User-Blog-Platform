import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/postService";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ title?: string; content?: string }>({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    else if (title.length < 3) newErrors.title = "Title must be at least 3 characters.";
    if (!content.trim()) newErrors.content = "Content is required.";
    else if (content.length < 10) newErrors.content = "Content must be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost(title, content);
      setMessage("Post created!");
      navigate("/");
    } catch (err) {
      console.error(err);
      setMessage("Failed to create post.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows={5}
        cols={40}
      />
      <br />
      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );
}
