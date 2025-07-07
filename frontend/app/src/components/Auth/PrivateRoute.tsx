import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: Props) {
  const { accessToken } = useAuth();

  return accessToken ? children : <Navigate to="/login" replace />;
}