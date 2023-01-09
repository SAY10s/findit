import Classes from "../styles/question.module.css";
import { useRef } from "react";
import SvgDownload from "../svg/SvgDownload";

const OpenQuestion = (props) => {
  const questionRef = useRef();
  const answerRef = useRef();
  const locationRef = useRef();

  return (
    <div className={Classes.questionWrapper}>
      <div className={Classes.top}>
        <input
          type={"text"}
          ref={questionRef}
          className={Classes.questionInput}
          placeholder="Pytanie"
          onChange={() => {
            props.setData(
              questionRef.current.value,
              `02|`,
              locationRef.current.value
            );
          }}
        />
        <select>
          <option value="opened">Otwarte</option>
          <option value="closed">Zamknięte</option>
          <option value="milionaires">Milionerzy</option>
        </select>
      </div>
      <div>
        <input
          type={"text"}
          ref={answerRef}
          className={Classes.answerBLANK}
          placeholder="Odpowiedź"
          onChange={() => {
            props.setData(
              questionRef.current.value,
              `02|`,
              locationRef.current.value
            );
          }}
        />
        <input
          type={"text"}
          ref={locationRef}
          className={Classes.location}
          placeholder="Lokalizacja"
          onChange={() => {
            props.setData(
              questionRef.current.value,
              `02|`,
              locationRef.current.value
            );
          }}
        />
        <button className={Classes.delete}>
          <SvgDownload color="#ffffff" />
        </button>
      </div>
    </div>
  );
};

export default OpenQuestion;
