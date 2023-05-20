import { useDispatch } from "react-redux";
import { removeToken } from "features/AuthForm/model/slices/authSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Welcome to Home page!!!</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(removeToken());
        }}
      >
        Log out
      </button>
    </div>
  );
}
