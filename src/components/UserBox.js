import Classes from "./styles/userBox.module.css";
import SvgSettings from "./svg/SvgSettings";

const UserBox = () => {
  return (
    <div className={Classes.userBox}>
      <div class={Classes.hr}>
        <hr />
      </div>
      <div className={Classes.pfp}>
        <div className={Classes.pic}></div>
      </div>
      <div className={Classes.nameAndSurname}>Kim Kitsuragi</div>
      <div className={Classes.logOut}>Wyloguj się</div>
      <div className={Classes.gear}>
        <SvgSettings />
      </div>
    </div>
  );
};

export default UserBox;
