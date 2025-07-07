import api from "./api";

export const registerUser = async (email: string, password: string) => {
  const res = await api.post("/users/", { email, password });
  return res.data;
};

export const loginUser = async (email: string, password: string) => {
  const formData = new URLSearchParams();
  formData.append("username", email);
  formData.append("password", password);

  const res = await api.post("/token/", formData, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  return res.data;
};