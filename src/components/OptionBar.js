import Classes from "./styles/optionBar.module.css";
import UserBox from "./UserBox";

const OptionBar = () => {
  return (
    <div className={Classes.options}>
      <div className={Classes.logo}>
        find<span>.it</span>
      </div>
      <hr />
      <div className={Classes.links}></div>
      <UserBox />
    </div>
  );
};

export default OptionBar;
