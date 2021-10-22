import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../../store/auth/auth.slice";

function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(logout());
    history.push("/");
  });

  return <>Logging out...</>;
}

export default Logout;
