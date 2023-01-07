import MilionairesQuesstion from "./MillionairesQuestion";
import OpenQuestion from "./OpenQuestion";
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
            tasks.push(
              <ClosedQuestionReady
                key={data[i].question_pk}
                question={data[i].question}
                answer={data[i].answer}
                location={data[i].location}
                id={data[i].question_pk}
              />
            );
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
      <MilionairesQuesstion />
      <OpenQuestion />
      {loadedTasks}
      <ClosedQuestion setData={props.setData} />
    </div>
  );
};

export default ListOfQuestions;
