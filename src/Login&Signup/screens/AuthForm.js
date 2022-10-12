import Button from "../components/Button";
import FlatButton from "../components/FlatButton";
import Input from "../components/Input";
import styles from "./AuthForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AuthForm({ isLogin, credentialsInValid, onSubmit }) {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    confirmedEmail: "",
    password: "",
    confirmedPassword: "",
  });

  const {
    email: emailIsInValid,
    confirmedEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmedPassword: passwordsDontMatch,
  } = credentialsInValid;

  function switchAuthModeHandler() {
    if (isLogin) {
      navigate("/Signup");
    } else {
      navigate("/");
    }
  }

  function onChangeHandler(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setInput((current) => ({ ...current, [name]: value }));
  }

  function submitHandler(event) {
    event.preventDefault();

    onSubmit({
      email: input.email,
      confirmedEmail: input.confirmedEmail,
      password: input.password,
      confirmedPassword: input.confirmedPassword,
    });
  }

  return (
    <div className={styles.form}>
      <form onSubmit={submitHandler} className={styles.frame}>
        <Input
          title="Email"
          type="email"
          onChange={onChangeHandler}
          value={input.email}
          name="email"
          isInvalid={emailIsInValid}
        />

        {!isLogin && (
          <Input
            title="Confirmed Email"
            type="email"
            onChange={onChangeHandler}
            name="confirmedEmail"
            isInvalid={emailsDontMatch}
          />
        )}

        <Input
          title="Password"
          type="password"
          onChange={onChangeHandler}
          name="password"
          isInvalid={passwordIsInvalid}
        />

        {!isLogin && (
          <Input
            title="Confirmed Password"
            type="password"
            onChange={onChangeHandler}
            name="confirmedPassword"
            isInvalid={passwordsDontMatch}
          />
        )}
        <Button type="submit">{isLogin ? "Log in" : "Sign up"}</Button>
        <FlatButton onClick={switchAuthModeHandler}>
          {isLogin ? "Create a new user" : "Log in instead"}
        </FlatButton>
      </form>
    </div>
  );
}
