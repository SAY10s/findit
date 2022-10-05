import SvgMoon from "./svg/SvgMoon";
import SvgSun from "./svg/SvgSun";
import Classes from "./styles/themeChange.module.css";

const ThemeChange = (props) => {
  return (
    <div
      className={Classes.themeChange}
      onClick={() => {
        props.isDark ? props.isDarkFunction(false) : props.isDarkFunction(true);
      }}
    >
      {props.isDark ? <SvgSun /> : <SvgMoon />}
    </div>
  );
};

export default ThemeChange;
