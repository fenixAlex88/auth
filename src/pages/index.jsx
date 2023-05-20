import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./HomePage/HomePage";
import AuthPage from "./AuthPage/AuthPage";

export function Routing() {
  const { isAuth } = useSelector((state) => {
    return state.auth;
  });

  return (
    <Routes>
      <Route path="/" element={isAuth ? <HomePage /> : <AuthPage />} />
    </Routes>
  );
}
