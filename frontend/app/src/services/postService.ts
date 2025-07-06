import api from "./api";

export const createPost = async (title: string, content: string) => {
  const res = await api.post("/posts/", { title, content });
  return res.data;
};

export const fetchAllPosts = async () => {
  const res = await api.get("/posts/");
  return res.data;
};
