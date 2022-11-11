import Classes from "./styles/CreateAccount.module.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

const CreateAccount = (props) => {
  const [isUnloading, setIsUnloading] = useState(false);

  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const password1Ref = useRef();
  const password2Ref = useRef();

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
    const enteredName = nameRef.current.value;
    const enteredSurname = surnameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword1 = password1Ref.current.value;
    const enteredPassword2 = password2Ref.current.value;

    formData.append("name", `${enteredName}`);
    formData.append("surname", `${enteredSurname}`);
    formData.append("email", `${enteredEmail}`);
    formData.append("password1", `${enteredPassword1}`);
    formData.append("password2", `${enteredPassword2}`);

    fetch(`http://localhost/xamppprojects/finditbackend/register.php`, {
      method: "POST",
      body: formData,
    }).then((data) => {
      goToPage("/signin");
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
          <input type={"text"} required=" " ref={nameRef} />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            imię
          </label>
        </div>
        <div
          className={`${Classes.userBox} ${Classes.in1} ${
            isUnloading ? Classes.out1 : ""
          } `}
        >
          <input type={"text"} required=" " ref={surnameRef} />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            nazwisko
          </label>
        </div>
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
          className={`${Classes.userBox} ${Classes.in1} ${
            isUnloading ? Classes.out1 : ""
          } `}
        >
          <input type={"text"} required=" " ref={password1Ref} />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            hasło
          </label>
        </div>
        <div
          className={`${Classes.userBox} ${Classes.in2} ${
            isUnloading ? Classes.out2 : ""
          } `}
        >
          <input type={"password"} required=" " ref={password2Ref} />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            powtórz hasło
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
            Masz juz konto?{" "}
            <Link to={"/signin"}>
              <span id="registerLink">Zaloguj się!</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
