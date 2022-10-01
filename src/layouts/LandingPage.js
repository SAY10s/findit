import Classes from "./styles/LandingPage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [isUnloading, setIsUnloading] = useState(false);

  const navigate = useNavigate();
  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  async function goToPage() {
    setIsUnloading(true);
    await wait(1200);
    navigate(`/Signin`);
  }

  return (
    <div>
      <div className={`${Classes.logo} ${isUnloading ? Classes.logoOut : ""}`}>
        find<span>.it</span>
      </div>
      <div
        className={`${Classes.btn} ${Classes.btn1} ${
          isUnloading ? Classes.btnOut1 : ""
        }`}
        onClick={goToPage}
      >
        GRAJ
      </div>
      <div
        className={`${Classes.btn} ${Classes.btn2} ${
          isUnloading ? Classes.btnOut2 : ""
        }`}
        onClick={goToPage}
      >
        TWÓRZ
      </div>
    </div>
  );
};

export default LandingPage;
