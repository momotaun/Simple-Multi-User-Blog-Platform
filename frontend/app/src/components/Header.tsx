import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { accessToken, logout } = useAuth();

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>{" "}
        {accessToken ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>{" "}
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}