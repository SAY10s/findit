import Classes from "./styles/SignIn.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={Classes.loginBox}>
      <h2>Zaloguj się</h2>
      <form>
        <div className={Classes.userBox}>
          <input type={"text"} required=" " />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            username
          </label>
        </div>
        <div className={Classes.userBox}>
          <input type={"password"} required=" " />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            username
          </label>
        </div>
        <span class={Classes.myClass}></span>
      </form>
    </div>
  );
};

export default SignIn;
