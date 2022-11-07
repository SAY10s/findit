import { NavLink } from "react-router-dom";
import Classes from "./styles/optionBar.module.css";
import SvgArrowRight from "./svg/SvgArrowRight";

const GameLink = (props) => {
  return (
    <NavLink
      to={props.title}
      className={({ isActive }) =>
        isActive ? Classes.activeNav : Classes.inactiveNav
      }
    >
      <SvgArrowRight color={"#ffffff"} />
      <div className={Classes.text}>{props.title}</div>
    </NavLink>
  );
};

export default GameLink;
