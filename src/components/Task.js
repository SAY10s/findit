import Classes from "./styles/task.module.css";
import { useNavigate } from "react-router";

const Task = (props) => {
  const navigate = useNavigate();

  function handleShow() {}

  return (
    <div className={Classes.task}>
      <div>{props.id}</div>
      <div>{props.question}</div>
      <div>{props.answer}</div>
      <div>{props.location}</div>
      <div onClick={handleShow}>Odp</div>
    </div>
  );
};

export default Task;
