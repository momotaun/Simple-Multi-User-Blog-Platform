import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export default function PublicOnlyRoute({ children }: Props) {
  const { accessToken } = useAuth();

  return accessToken ? <Navigate to="/" replace /> : children;
}
