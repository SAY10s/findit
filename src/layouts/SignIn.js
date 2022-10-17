import Classes from "./styles/SignIn.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
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
    navigate(`/Test`);
  }

  function handleSubmit() {
    fetch(`http://localhost/xamppprojects/login.php`, {
      // mode: "no-cors",
      // credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        // console.log(response.json());
        return response.json();
      })
      .then((data) => {
        console.log(
          data[0],
          data[0]["user_pk"],
          data[0]["name"],
          data[0]["surname"],
          data[0]["email"],
          data[0]["password"]
        );
        props.setNameAndSurname(`${data[0]["name"]} ${data[0]["surname"]}`);
        return data;
      })
      .then((data) => {
        goToPage();
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
          <input type={"text"} required=" " />
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
          <input type={"password"} required=" " />
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
          <div className={Classes.btn} onClick={handleSubmit}>
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
