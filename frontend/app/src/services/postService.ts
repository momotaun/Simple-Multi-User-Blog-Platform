import api from "./api";

export const fetchAllPosts = async () => {
  const res = await api.get("/posts/");
  return res.data;
};
