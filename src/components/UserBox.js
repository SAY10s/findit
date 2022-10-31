import Classes from "./styles/userBox.module.css";

const UserBox = () => {
  return (
    <div className={Classes.userBox}>
      <div class={Classes.hr}>
        <hr />
      </div>
      <div className={Classes.pfp}>
        <div className={Classes.pic}></div>
      </div>
      <div className={Classes.nameAndSurname}>Kim Kituragi</div>
      <div className={Classes.logOut}>Wyloguj się</div>
      <div className={Classes.gear}>O</div>
    </div>
  );
};

export default UserBox;
