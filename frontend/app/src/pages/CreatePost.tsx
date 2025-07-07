import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/postService";

const schema = yup.object({
  title: yup.string().required("Title is required").min(3, "Min 3 characters"),
  content: yup.string().required("Content is required").min(10, "Min 10 characters"),
});

type FormData = yup.InferType<typeof schema>;

export default function CreatePost() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await createPost(data.title, data.content);
      navigate("/");
    } catch (err) {
      console.error("Failed to create post", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Create New Post</h2>

      <div>
        <input placeholder="Title" {...register("title")} />
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
      </div>

      <div>
        <textarea placeholder="Content" {...register("content")} rows={5} cols={40} />
        {errors.content && <p style={{ color: "red" }}>{errors.content.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}