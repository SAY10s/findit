import Classes from "./styles/optionBar.module.css";
import UserBox from "./UserBox";
import { NavLink } from "react-router-dom";
import SvgMenu from "./svg/SvgMenu";
import SvgPlus from "./svg/SvgPlus";

const OptionBar = (props) => {
  let name = props.nameAndSurname.split(" ");
  return (
    <div className={Classes.options}>
      <div className={Classes.logo}>
        find<span>.it</span>
      </div>
      <hr />
      <div className={Classes.links}>
        <NavLink
          to="t1"
          className={({ isActive }) =>
            isActive ? Classes.activeNav : Classes.inactiveNav
          }
        >
          <div>
            <SvgMenu color={"#ffffff"} />
          </div>
          <div className={Classes.text}>Twoje gry</div>
        </NavLink>
        <NavLink
          to="t2"
          className={({ isActive }) =>
            isActive ? Classes.activeNav : Classes.inactiveNav
          }
        >
          <SvgPlus color={"#ffffff"} />
          <div className={Classes.text}>Stwórz grę</div>
        </NavLink>
        <hr className={Classes.hr2} />
      </div>
      <UserBox nameAndSurname={name[0]} />
    </div>
  );
};

export default OptionBar;
