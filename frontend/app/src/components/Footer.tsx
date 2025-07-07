import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Simple Blog. All rights reserved.</p>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    marginTop: "auto",
    padding: "1rem 2rem",
    backgroundColor: "#f8f8f8",
    borderTop: "1px solid #ddd",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#555",
  },
};