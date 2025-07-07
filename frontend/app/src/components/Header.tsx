import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { accessToken, user, logout } = useAuth();

  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <Link to="/">Home</Link>
        {!accessToken && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        {accessToken && <Link to="/create-post">Create Post</Link>}
      </div>

      {accessToken && (
        <div style={styles.right}>
          <span style={styles.userEmail}>
            {user?.email ? `Welcome, ${user.email}` : `User #${user?.sub}`}
          </span>
          <button onClick={logout} style={styles.logoutButton}>Logout</button>
        </div>
      )}
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "#f8f8f8",
    borderBottom: "1px solid #ddd",
    alignItems: "center",
  },
  left: {
    display: "flex",
    gap: "1rem",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  logoutButton: {
    padding: "0.4rem 0.8rem",
    backgroundColor: "#d9534f",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  userEmail: {
    fontWeight: 500,
    color: "#333",
  },
};