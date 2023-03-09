import { useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/user";
function Login() {
  const dispatch = useDispatch();

  return (
    <>
      <label>Nom</label>
      <input type="text" />
      <label>Email</label>
      <input type="text" />

      <button
        onClick={() =>
          dispatch(
            login({
              email: "soumaya.sassi@esprit.tn",
              nom: "soumaya",
            })
          )
        }
      >
        Log In
      </button>

      <button onClick={() => dispatch(logout())}>Log Out</button>
    </>
  );
}

export default Login;
