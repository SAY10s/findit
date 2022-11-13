import Classes from "./styles/task.module.css";

const Task = (props) => {
  return (
    <div className={Classes.task}>
      <div>{props.question}</div>
      <div>{props.answer}</div>
      <div>{props.location}</div>
    </div>
  );
};

export default Task;
