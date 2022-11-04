import Classes from "./styles/SignIn.module.css";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignIn = (props) => {
  const [isUnloading, setIsUnloading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  async function goToPage(url = "/XDD", time = 1200) {
    setIsUnloading(true);
    await wait(time);
    navigate(url);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    formData.append("email", `${enteredEmail}`);
    formData.append("password", `${enteredPassword}`);

    fetch(`http://localhost/xamppprojects/finditbackend/login.php`, {
      // mode: "no-cors",
      // credentials: "include",
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: formData,
    })
      .then(function (response) {
        // console.log(response.json());
        return response.json();
      })
      .then((data) => {
        console.log(data[0]);
        if (typeof data[0] !== "undefined") {
          console.log(
            data[0],
            data[0]["user_pk"],
            data[0]["name"],
            data[0]["surname"],
            data[0]["email"],
            data[0]["password"]
          );
          props.setNameAndSurname(`${data[0]["name"]} ${data[0]["surname"]}`);
        } else console.log("wrong pass or log");

        return data;
      })
      .then((data) => {
        goToPage("/panel");
      });
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
          <input type={"text"} required=" " ref={emailRef} />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            e-mail
          </label>
        </div>
        <div
          className={`${Classes.userBox} ${Classes.in2} ${
            isUnloading ? Classes.out2 : ""
          } `}
        >
          <input type={"password"} required=" " ref={passwordRef} />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            hasło
          </label>
        </div>
        <div
          className={`${Classes.userBox} ${Classes.in3} ${
            isUnloading ? Classes.out3 : ""
          } `}
        >
          <button className={Classes.btn} onClick={handleSubmit}>
            ZALOGUJ SIĘ
          </button>
          <div className={Classes.createAccount}>
            Nie masz jeszcze konta?{" "}
            <Link to={"/CreateAccount"}>
              <span id="registerLink">Zarejestruj się!</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
