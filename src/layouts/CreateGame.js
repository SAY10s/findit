import Classes from "./styles/CreateGame.module.css";
import { useRef } from "react";

const CreateGame = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const authorRef = useRef();

  return (
    <div className={Classes.container}>
      <div className={Classes.div1}>Tytuł: </div>
      <div className={Classes.div2}>Opis: </div>
      <div className={Classes.div3}>
        <input type={"text"} ref={titleRef} />
      </div>
      <div className={Classes.div4}>
        <input type={"text"} ref={descriptionRef} />
      </div>
      <div className={Classes.div5}>Autor: </div>
      <div className={Classes.div6}>
        <input type={"text"} ref={authorRef} />
      </div>
      <div className={Classes.div7}>
        <hr />
      </div>
      <div className={Classes.div8}>Tabelka</div>
    </div>
  );
};

export default CreateGame;
