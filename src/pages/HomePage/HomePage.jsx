import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "features/AuthForm/model/authSlice";
import { useLogoutMutation } from "shared/api";
// import { useGetUsersQuery } from "shared/api/userApi";

export default function HomePage() {
  const dispatch = useDispatch();
  const [signOut] = useLogoutMutation();

  useEffect(() => {
    // const { data: first_name, last_name, id, username } = useGetUsersQuery();
  }, []);

  async function logout() {
    try {
      signOut();
      dispatch(removeToken());
    } catch (e) {
      /* обрабатываем ошибку */
    }
  }

  return (
    <div>
      <h1> Welcome to Home page!!!</h1>
      <button type="button" onClick={logout}>
        Log out
      </button>
    </div>
  );
}
