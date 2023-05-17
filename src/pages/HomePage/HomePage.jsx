import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function HomePage() {
  const isAuth = useSelector((state) => {
    console.log(state.user.isAuth);
    return state.user.isAuth;
  });
  console.log(isAuth);

  if (isAuth) return <h1>HomePage</h1>;
  return <Navigate to="/auth" />;
}
