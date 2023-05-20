import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function HomePage() {
  const { isAuth, email } = useSelector((state) => {
    return state.user;
  });

  if (isAuth) return <h1>Welcome, Dear {email}</h1>;
  return <Navigate to="/auth" />;
}
