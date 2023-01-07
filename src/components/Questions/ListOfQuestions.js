import MilionairesQuesstion from "./MillionairesQuestion";
import MilionairesQuesstionReady from "./MillionairesQuestionReady";
import OpenQuestion from "./OpenQuestion";
import OpenQuestionReady from "./OpenQuestionReady";
import ClosedQuestion from "./ClosedQuestion";
import ClosedQuestionReady from "./ClosedQuestionReady";

import { useEffect, useState } from "react";
import Classes from "../styles/question.module.css";

const ListOfQuestions = (props) => {
  const [loadedTasks, setLoadedTasks] = useState([]);
  let tasks = [];

  let formData = new FormData();
  formData.append("game_id", `${props.gamePk}`);
  useEffect(() => {
    fetch(`http://localhost/niko/finditbackend/taskList.php`, {
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
            let answer = data[i].answer.split("|");
            if (answer[0] == "01") {
              tasks.push(
                <ClosedQuestionReady
                  key={data[i].question_pk}
                  question={data[i].question}
                  answer={data[i].answer}
                  location={data[i].location}
                  id={data[i].question_pk}
                />
              );
            } else if (answer[0] == "02") {
              tasks.push(
                <OpenQuestionReady
                  key={data[i].question_pk}
                  question={data[i].question}
                  answer={data[i].answer}
                  location={data[i].location}
                  id={data[i].question_pk}
                />
              );
            } else if (answer[0] == "03") {
              tasks.push(
                <MilionairesQuesstionReady
                  key={data[i].question_pk}
                  question={data[i].question}
                  answer={data[i].answer}
                  location={data[i].location}
                  id={data[i].question_pk}
                />
              );
            } else {
              <div>Sus</div>;
            }

            props.setCurrentNewestTaskId(data[i].in_game_id);
          }
          setLoadedTasks(tasks);
        } else {
          console.log("2FUCK NOT WORKING2");
          setLoadedTasks([]);
          props.setCurrentNewestTaskId(0);
        }
      });
  }, [props.gamePk, props.renderPlz]);

  return (
    <div className={Classes.list}>
      {loadedTasks}
      {props.currentTaskType}
      <div
        onClick={() =>
          props.setCurrentTaskType(
            <MilionairesQuesstion setData={props.setData} />
          )
        }
      >
        Stwórz "Milionerzy"
      </div>
      <div
        onClick={() =>
          props.setCurrentTaskType(<OpenQuestion setData={props.setData} />)
        }
      >
        Stwórz "Otwarte"
      </div>
      <div
        onClick={() =>
          props.setCurrentTaskType(<ClosedQuestion setData={props.setData} />)
        }
      >
        Stwórz "Zamknięte"
      </div>
    </div>
  );
};

export default ListOfQuestions;
