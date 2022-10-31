import Classes from "./styles/optionBar.module.css";
import UserBox from "./UserBox";

const OptionBar = (props) => {
  let name = props.nameAndSurname.split(" ");
  return (
    <div className={Classes.options}>
      <div className={Classes.logo}>
        find<span>.it</span>
      </div>
      <hr />
      <div className={Classes.links}></div>
      <UserBox nameAndSurname={name[0]} />
    </div>
  );
};

export default OptionBar;
