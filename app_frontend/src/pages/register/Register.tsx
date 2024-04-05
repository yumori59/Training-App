import React, { useContext } from "react";
import "./Register.css";
import { useRef } from "react";
// import { loginCall } from "../../state/actionCalls";
// import { AuthContext } from "../../state/AuthContext";

export default function Register() {
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
        <p className="loginMsg">Sign up</p>
        <div className="inputBox">
          <p className="inputName">チームコード</p>
          <input
            type="text"
            className="loginInput"
            placeholder=""
            required
            //   ref={email}
          />
        </div>
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
          新規登録
        </button>
        <span className="loginForgot">登録済みの方はこちら</span>
      </form>
    </div>
  );
}
