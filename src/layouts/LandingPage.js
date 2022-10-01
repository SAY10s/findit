import Classes from "./styles/LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className={Classes.logo}>
        find<span>.it</span>
      </div>
      <Link to="Signin">
        <div className={`${Classes.btn} ${Classes.btn1}`}>GRAJ</div>
      </Link>
      <Link to="Signin">
        <div className={`${Classes.btn} ${Classes.btn2}`}>TWÓRZ</div>
      </Link>
    </div>
  );
};

export default LandingPage;
