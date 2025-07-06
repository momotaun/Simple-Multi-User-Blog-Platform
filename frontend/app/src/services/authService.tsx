// src/services/authService.ts
const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1";

export const registerUser = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || "Registration failed");
  }

  return res.json();
};

export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ username: email, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || "Login failed");
  }

  return res.json();
};