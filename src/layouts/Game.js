import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import Classes from "./styles/Game.module.css";
import ListOfQuestions from "../components/Questions/ListOfQuestions";

const Game = (props) => {
  const sampleLocation = useLocation();

  const [gamePk, setGamePk] = useState("0");
  // const [title, setTitle] = useState("(Tit)le Holder");
  // const [description, setDescription] = useState("Lorem ipsum");
  const [currentNewestTaskId, setCurrentNewestTaskId] = useState(0);
  const [renderPlz, setRenderPlz] = useState(0);

  let game = sampleLocation.pathname.split("/panel/gra/").join("");
  console.log(`Tytuł: ${game}`);

  let formData = new FormData();
  formData.append("user_pk", `${props.userPk}`);
  formData.append("title", `${game}`);
  useEffect(() => {
    fetch(`http://localhost/niko/finditbackend/game.php`, {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        console.log(
          `Tytuł: ${data[0].title} Opis: ${data[0].description} GamePk: ${data[0].game_pk}`
        );
        // setTitle(data[0].title);
        // setDescription(data[0].description);
        setGamePk(data[0].game_pk);
      });
  }, [sampleLocation]);

  //----------------------------------

  function handleAdd(e) {
    e.preventDefault();
    let formData = new FormData();

    formData.append("question", `${question}`);
    formData.append("answer", `${answer}`);
    formData.append("location", `${location}`);
    formData.append("id", `${currentNewestTaskId}`);
    formData.append("idGry", `${gamePk}`);

    fetch(`http://localhost/niko/finditbackend/createTask.php`, {
      method: "POST",
      body: formData,
    }).then((data) => {
      console.log("ADDED TASK chyba");
      setCurrentTaskType("");
      setRenderPlz(Math.random() * 3);
    });
  }

  function setData(question, answer, location) {
    setQuestion(question);
    setAnswer(answer);
    setLocation(location);
  }

  const [question, setQuestion] = useState("question");
  const [answer, setAnswer] = useState("answer");
  const [location, setLocation] = useState("location");

  const [currentTaskType, setCurrentTaskType] = useState("");

  return (
    <div className={Classes.container}>
      <ListOfQuestions
        renderPlz={renderPlz}
        setRenderPlz={setRenderPlz}
        setData={setData}
        setCurrentNewestTaskId={setCurrentNewestTaskId}
        gamePk={gamePk}
        currentTaskType={currentTaskType}
        setCurrentTaskType={setCurrentTaskType}
      />
      <button className={Classes.zapisz} onClick={handleAdd}>
        Zapisz
      </button>
    </div>
  );
};

export default Game;
