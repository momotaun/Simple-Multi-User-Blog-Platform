import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { accessToken, logout } = useAuth();

  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>

        {!accessToken ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/create-post">Create Post</Link>
            <button onClick={logout} style={{ background: "none", border: "none", cursor: "pointer", color: "red" }}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
