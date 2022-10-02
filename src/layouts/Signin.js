import Classes from "./styles/SignIn.module.css";

const SignIn = () => {
  return (
    <div className={Classes.loginBox}>
      {/* <div className={Classes.text}>Zaloguj się</div> */}
      <form>
        <div className={`${Classes.userBox} ${Classes.in1}`}>
          <input type={"text"} required=" " />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            login
          </label>
        </div>
        <div className={`${Classes.userBox} ${Classes.in2}`}>
          <input type={"password"} required=" " />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            haslo
          </label>
        </div>
        <div className={`${Classes.userBox} ${Classes.in3}`}>
          <div class={Classes.btn}> ZALOGUJ SIĘ </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
