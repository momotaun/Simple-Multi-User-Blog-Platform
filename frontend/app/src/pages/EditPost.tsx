import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

const schema = yup.object({
  title: yup.string().required().min(3),
  content: yup.string().required().min(10),
});

type FormData = yup.InferType<typeof schema>;

export default function EditPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/posts/${postId}`);
        setValue("title", res.data.title);
        setValue("content", res.data.content);
      } catch {
        alert("Post not found or you're not authorized.");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const onSubmit = async (data: FormData) => {
    try {
      await api.put(`/posts/${postId}`, data);
      navigate("/");
    } catch {
      alert("Failed to update post.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Edit Post</h2>
      <div>
        <input {...register("title")} placeholder="Title" />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <textarea {...register("content")} rows={6} />
        {errors.content && <p>{errors.content.message}</p>}
      </div>
      <button type="submit">Update</button>
    </form>
  );
}