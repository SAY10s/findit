import Classes from "./styles/SignIn.module.css";

const SignIn = () => {
  return (
    <div className={Classes.loginBox}>
      {/* <div className={Classes.text}>Zaloguj się</div> */}
      <form>
        <div className={Classes.userBox}>
          <input type={"text"} required=" " />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            login
          </label>
        </div>
        <div className={Classes.userBox}>
          <input type={"password"} required=" " />
          <label>
            <i
              className={`${Classes.fa} ${Classes.faUser}`}
              aria-hidden="true"
            ></i>
            haslo
          </label>
        </div>
        <div class={Classes.btn}> ZALOGUJ SIĘ </div>
      </form>
    </div>
  );
};

export default SignIn;
