import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import PrivateRoute from "./components/Auth/PrivateRoute";
import PublicOnlyRoute from "./components/Auth/PublicRoute";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
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
          path="/"
          element={
            <PrivateRoute>
              <div>Welcome to your protected dashboard!</div>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}