import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "features/AuthForm/model/authSlice";
import HomePage from "./HomePage/HomePage";
import AuthPage from "./AuthPage/AuthPage";

export function Routing() {
  const dispatch = useDispatch();

  // Проверяем токен в localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    // Если токен есть, берем его
    if (token) dispatch(setToken(token));
  }, [dispatch]);

  const { isAuth } = useSelector((state) => {
    return state.auth;
  });

  return (
    <Routes>
      <Route path="/" element={isAuth ? <HomePage /> : <AuthPage />} />
    </Routes>
  );
}
