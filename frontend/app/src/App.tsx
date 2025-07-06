import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterForm from "./components/Auth/RegisterForm";
import LoginForm from "./components/Auth/LoginForm";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}
