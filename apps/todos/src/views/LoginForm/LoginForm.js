import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Fieldset, Input } from "../../components/forms";
import { login } from "../../store/auth/auth.slice";

function LoginForm() {
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const usersList = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCurrentUser = (email) => {
    return usersList.find((user) => user.email === email);
  };

  const isValidUser = (email) => {
    const currentUser = getCurrentUser(email);
    return currentUser ? true : false;
  };

  const isValidPassword = (currentUser, password) => {
    return currentUser.password === password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidUser(inputEmailValue)) {
      const currentUser = getCurrentUser(inputEmailValue);

      if (isValidPassword(currentUser, inputPasswordValue)) {
        setErrorMsg("");
        dispatch(login(currentUser));
        navigate("/");
      } else {
        setErrorMsg("The password does not match.");
      }
    } else {
      setErrorMsg("This email address does not exist.");
    }
  };

  const displayError = (msg) => {
    return msg ? <p>{msg}</p> : "";
  };

  return (
    <form
      action="#"
      method="post"
      className="form form--login"
      onSubmit={handleSubmit}
    >
      {displayError(errorMsg)}
      <Fieldset legend="Sign In">
        <Input
          label="Email"
          id="login-email"
          name="login-email"
          value={inputEmailValue}
          updateValue={setInputEmailValue}
          type="email"
          required
        />
        <Input
          label="Password"
          id="login-password"
          name="login-password"
          value={inputPasswordValue}
          updateValue={setInputPasswordValue}
          type="password"
          required
        />
        <Button type="submit" modifiers={["submit"]}>
          Log in
        </Button>
      </Fieldset>
    </form>
  );
}

export default LoginForm;
