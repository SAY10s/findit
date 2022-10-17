import Classes from "./styles/LandingPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = (props) => {
  const [isUnloading, setIsUnloading] = useState(false);

  const navigate = useNavigate();
  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  async function goToPage(url = "/XDD", time = 1200) {
    setIsUnloading(true);
    await wait(time);
    navigate(url);
  }

  return (
    <div>
      {/* {props.isDark ? (
        <div
          onClick={() => {
            props.isDarkFunction(false);
          }}
        >
          Your app is in dark mode
        </div>
      ) : (
        <div
          onClick={() => {
            props.isDarkFunction(true);
          }}
        >
          Your app is in a light mode
        </div>
      )} */}
      <div className={`${Classes.logo} ${isUnloading ? Classes.logoOut : ""}`}>
        find<span>.it</span>
      </div>
      <div
        className={`${Classes.btn} ${Classes.btn1} ${
          isUnloading ? Classes.btnOut1 : ""
        }`}
        onClick={() => {
          goToPage("/signin");
        }}
      >
        GRAJ
      </div>
      <div
        className={`${Classes.btn} ${Classes.btn2} ${
          isUnloading ? Classes.btnOut2 : ""
        }`}
        onClick={() => {
          goToPage("/signin");
        }}
      >
        TWÓRZ
      </div>
    </div>
  );
};

export default LandingPage;
