// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterForm from "./components/Auth/RegistrationForm";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}
