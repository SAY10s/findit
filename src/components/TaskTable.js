import Classes from "./styles/task.module.css";
import { useLocation } from "react-router";
import Task from "./Task";
import { useState, useEffect } from "react";

const TaskTable = (props) => {
  const sampleLocation = useLocation();
  const [loadedTasks, setLoadedTasks] = useState([]);
  let tasks = [];

  let formData = new FormData();
  console.log(`gamePk: ${props.gamePk}`);

  formData.append("game_id", `${props.gamePk}`);

  let newQuestion;
  let newAnswer;
  let newLocation;

  function handleAdd(e) {
    e.preventDefault();
    newQuestion = prompt("Podaj pytanie: ");
    newAnswer = prompt("Podaj odpowiedź: ");
    newLocation = prompt("Podaj lokację");
  }

  useEffect(() => {
    fetch(`http://localhost/xamppprojects/finditbackend/taskList.php`, {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        tasks = [];
        if (typeof data[0] !== "undefined") {
          console.log(data[0]);

          for (let i = 0; i < data.length; i++) {
            tasks.push(
              <Task
                key={data[i].question_pk}
                question={data[i].question}
                answer={data[i].answer}
                location={data[i].location}
              />
            );
          }
          setLoadedTasks(tasks);
        } else {
          console.log("2FUCK NOT WORKING2");
          setLoadedTasks([]);
        }
      });
  }, [props.gamePk]);

  return (
    <>
      <div className={Classes.taskTable}>{loadedTasks}</div>
      <button onClick={handleAdd}>Dodaj zadnie!</button>
    </>
  );
};

export default TaskTable;
