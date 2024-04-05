import React, { useContext } from "react";
import "./Login.css";
import { useRef } from "react";
// import { loginCall } from "../../state/actionCalls";
// import { AuthContext } from "../../state/AuthContext";

export default function Login() {
  const email = useRef();
  const password = useRef();
  //   const { user, isFetching, error, dispatch } = useContext(AuthContext);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     //     loginCall(
  //     //       {
  //     //         email: email.current.value,
  //     //         password: password.current.value,
  //     //       },
  //     //       dispatch
  //     //     );
  //   };
  //   //   console.log(user);

  return (
    <div className="loginWrapper">
      <form className="loginBox">
        <p className="loginMsg">Log in</p>
        <div className="inputBox">
          <p className="inputName">メールアドレス</p>
          <input
            type="email"
            className="loginInput"
            placeholder=""
            required
            //   ref={email}
          />
        </div>
        <div className="inputBox">
          {" "}
          <p className="inputName">パスワード</p>
          <input
            type="password"
            className="loginInput"
            placeholder=""
            required
            //   minLength="6"
            //   ref={password}
          />
        </div>

        <button className="loginButton" type="submit">
          ログイン
        </button>
        <span className="loginForgot">パスワードを忘れた方はこちら</span>
        <button className="loginRegisterButton">新規登録はこちら</button>
      </form>
    </div>
  );
}
