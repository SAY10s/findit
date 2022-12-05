import Classes from "../components/styles/answer.module.css";

const Answer = (props) => {
  return (
    <div className={Classes.answer}>
      <div>
        {props.name} {props.surname}
      </div>
      <div>{props.answer}</div> <div>{props.is_correct}</div>
    </div>
  );
};

export default Answer;
