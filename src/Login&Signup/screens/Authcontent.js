import { useState } from "react";
import AuthForm from "./AuthForm";

export default function AuthContent({ isLogin, onAuthenticate }) {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmedEmail: false,
    confirmedPassword: false,
  });

  function submitHandler(credentials) {
    let { email, confirmedEmail, password, confirmedPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const emailsAreEqual = email === confirmedEmail;
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmedPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      alert("inputs are not valid");
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmedEmail: !emailIsValid || !emailsAreEqual,
        confirmedPassword: !passwordIsValid || !passwordIsValid,
      });
      return;
    }

    onAuthenticate(email, password);
  }

  return (
    <AuthForm
      isLogin={isLogin}
      credentialsInValid={credentialsInvalid}
      onSubmit={submitHandler}
    />
  );
}
