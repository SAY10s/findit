import { Link } from "react-router-dom";
import Classes from "./styles/Error404.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
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
    navigate(`/`);
  }
  return (
    <div className={Classes.container}>
      <div className={`${Classes.error} ${isUnloading ? Classes.out1 : ""}`}>
        Error<span>404</span>
      </div>
      <div
        className={`${Classes.description} ${isUnloading ? Classes.out2 : ""}`}
      >
        Strona o podanym adresie nie istnieje.
      </div>
      <div
        className={`${Classes.link} ${isUnloading ? Classes.out3 : ""}`}
        onClick={goToPage}
      >
        Strona główna
      </div>
    </div>
  );
};

export default Error404;
