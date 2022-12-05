import Classes from "./styles/task.module.css";
import { useLocation } from "react-router";
import Task from "./Task";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import SvgPlus from "./svg/SvgPlus";

const TaskTable = (props) => {
  const sampleLocation = useLocation();
  const [loadedTasks, setLoadedTasks] = useState([]);
  const [currentNewestTaskId, setCurrentNewestTaskId] = useState(0);
  const [renderPlz, setRenderPlz] = useState(0);
  let tasks = [];

  let formData = new FormData();
  console.log(`gamePk: ${props.gamePk}`);

  formData.append("game_id", `${props.gamePk}`);

  let newQuestion;
  let newAnswer;
  let newLocation;

  function handleAdd(e) {
    e.preventDefault();
    let formData = new FormData();

    alert(currentNewestTaskId);
    newQuestion = prompt("Podaj pytanie: ");
    newAnswer = prompt("Podaj odpowiedź: ");
    newLocation = prompt("Podaj lokację");

    formData.append("question", `${newQuestion}`);
    formData.append("answer", `${newAnswer}`);
    formData.append("location", `${newLocation}`);
    formData.append("id", `${currentNewestTaskId}`);
    formData.append("idGry", `${props.gamePk}`);

    fetch(`http://localhost/xamppprojects/finditbackend/createTask.php`, {
      method: "POST",
      body: formData,
    }).then((data) => {
      console.log("ADDED TASK chyba");
      setRenderPlz(Math.random() * 3);
    });
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
                id={data[i].question_pk}
              />
            );
            setCurrentNewestTaskId(data[i].in_game_id);
          }
          setLoadedTasks(tasks);
        } else {
          console.log("2FUCK NOT WORKING2");
          setLoadedTasks([]);
          setCurrentNewestTaskId(0);
        }
      });
  }, [props.gamePk, renderPlz]);

  return (
    <>
      <div className={Classes.tableHeader}>
        <div></div>
        <div>Pytanie: </div>
        <div>Odpowiedź: </div>
        <div>Lokalizajca: </div>
        {/* <div onClick={handleShow}>Odp</div> */}
      </div>
      <div className={Classes.taskTable}>
        {loadedTasks}
        <div className={Classes.task} onClick={handleAdd}>
          <div>
            <SvgPlus color="#ffffff" />
          </div>
          <div>Miejsce na pytanie</div>
          <div>Odp1;Odp2;Odp3</div>
          <div>Lokalizacja kodu QR</div>
          <div></div>
        </div>
      </div>
      {/* <button onClick={handleAdd}>Dodaj zadnie!</button> */}
    </>
  );
};

export default TaskTable;
