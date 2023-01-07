import Classes from "../styles/question.module.css";
import { useRef } from "react";

const ClosedQuestion = (props) => {
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
              answerRef.current.value,
              locationRef.current.value
            );
          }}
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
          ref={answerRef}
          className={Classes.answer}
          placeholder="Odpowiedź"
          onChange={() => {
            props.setData(
              questionRef.current.value,
              answerRef.current.value,
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
              answerRef.current.value,
              locationRef.current.value
            );
          }}
        />
        <button className={Classes.delete}>!</button>
      </div>
    </div>
  );
};

export default ClosedQuestion;
