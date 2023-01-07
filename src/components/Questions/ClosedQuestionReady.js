import Classes from "../styles/question.module.css";
import { useRef } from "react";
import SvgDownload from "../svg/SvgDownload";

const ClosedQuestionReady = (props) => {
  return (
    <div className={Classes.questionWrapper}>
      <div className={Classes.top}>
        <input
          type={"text"}
          defaultValue={props.question}
          className={Classes.questionInput}
        />
        <select>
          <option value="closed">Zamknięte</option>
          <option value="opened">Otwarte</option>
          <option value="milionaires">Milionerzy</option>
        </select>
      </div>
      <div>
        <input
          type={"text"}
          defaultValue={props.answer}
          className={Classes.answer}
        />
        <input
          type={"text"}
          defaultValue={props.location}
          className={Classes.location}
        />
        <button className={Classes.delete}>
          <SvgDownload color="#ffffff" />
        </button>
      </div>
    </div>
  );
};

export default ClosedQuestionReady;
