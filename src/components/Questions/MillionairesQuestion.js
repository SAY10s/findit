import Classes from "../styles/question.module.css";
import { useRef } from "react";
import SvgDownload from "../svg/SvgDownload";

const MilionairesQuesstion = (props) => {
  const questionRef = useRef();
  const answerRef1 = useRef();
  const answerRef2 = useRef();
  const answerRef3 = useRef();
  const answerRef4 = useRef();
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
              `03|${answerRef1.current.value}|${answerRef2.current.value}|${answerRef3.current.value}|${answerRef4.current.value}|`,
              locationRef.current.value
            );
          }}
        />
        <select>
          <option value="milionaires">Milionerzy</option>
          <option value="closed">Zamknięte</option>
          <option value="opened">Otwarte</option>
        </select>
      </div>
      <div>
        <input
          type={"text"}
          ref={answerRef1}
          className={Classes.answer}
          placeholder="Odpowiedź"
          onChange={() => {
            props.setData(
              questionRef.current.value,
              `03|${answerRef1.current.value}|${answerRef2.current.value}|${answerRef3.current.value}|${answerRef4.current.value}|`,
              locationRef.current.value
            );
          }}
        />
        <input
          type={"text"}
          ref={answerRef2}
          className={Classes.answer}
          placeholder="Odpowiedź"
          onChange={() => {
            props.setData(
              questionRef.current.value,
              `03|${answerRef1.current.value}|${answerRef2.current.value}|${answerRef3.current.value}|${answerRef4.current.value}|`,
              locationRef.current.value
            );
          }}
        />
        <input
          type={"text"}
          ref={answerRef3}
          className={Classes.answer}
          placeholder="Odpowiedź"
          onChange={() => {
            props.setData(
              questionRef.current.value,
              `03|${answerRef1.current.value}|${answerRef2.current.value}|${answerRef3.current.value}|${answerRef4.current.value}|`,
              locationRef.current.value
            );
          }}
        />
        <input
          type={"text"}
          ref={answerRef4}
          className={Classes.answer}
          placeholder="Odpowiedź"
          onChange={() => {
            props.setData(
              questionRef.current.value,
              `03|${answerRef1.current.value}|${answerRef2.current.value}|${answerRef3.current.value}|${answerRef4.current.value}|`,
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
              `03|${answerRef1.current.value}|${answerRef2.current.value}|${answerRef3.current.value}|${answerRef4.current.value}|`,
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

export default MilionairesQuesstion;
