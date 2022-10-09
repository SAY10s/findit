import Classes from "./styles/SignIn.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isUnloading, setIsUnloading] = useState(false);

  const navigate = useNavigate();
  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  async function goToPage() {
    setIsUnloading(true);
    await wait(1200);
    navigate(`/XDDDDDDDDDDD`);
  }

  return (
    <div className={Classes.loginBox}>
      {/* <div className={Classes.text}>Zaloguj się</div> */}
      <form>
        <div
          className={`${Classes.userBox} ${Classes.in1} ${
            isUnloading ? Classes.out1 : ""
          } `}
        >
          <input type={"text"} required=" " />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            login
          </label>
        </div>
        <div
          className={`${Classes.userBox} ${Classes.in2} ${
            isUnloading ? Classes.out2 : ""
          } `}
        >
          <input type={"password"} required=" " />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            haslo
          </label>
        </div>
        <div
          className={`${Classes.userBox} ${Classes.in3} ${
            isUnloading ? Classes.out3 : ""
          } `}
        >
          <div className={Classes.btn} onClick={goToPage}>
            ZALOGUJ SIĘ
          </div>
          <div className={Classes.createAccount}>
            Nie masz jeszcze konta? <span>Zarejestruj się!</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
