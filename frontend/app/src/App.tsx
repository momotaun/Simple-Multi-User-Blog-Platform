import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import PrivateRoute from "./components/Auth/PrivateRoute";
import PublicOnlyRoute from "./components/Auth/PublicRoute";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Router>
      <div style={styles.layout}>
        <Header />
        <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicOnlyRoute>
                <LoginForm />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicOnlyRoute>
                <RegisterForm />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/create-post"
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
          />
          <Route
            path="/posts/:postId/edit"
            element={
              <PrivateRoute>
                <EditPost />
              </PrivateRoute>
            }
          />
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const styles: Record<string, React.CSSProperties> = {
  layout: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    padding: "2rem",
  },
};

export default App;