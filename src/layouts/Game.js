import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import Classes from "./styles/Game.module.css";
import ListOfQuestions from "../components/Questions/ListOfQuestions";

const Game = (props) => {
  const sampleLocation = useLocation();

  const [gamePk, setGamePk] = useState("0");
  const [title, setTitle] = useState("(Tit)le Holder");
  const [description, setDescription] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti odio impedit consequatur eius labore saepe? Laboriosam nam repudiandae ad molestiae nihil aut tempora veritatis odit distinctio, nulla magnam a voluptatem!"
  );

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
        setTitle(data[0].title);
        setDescription(data[0].description);
        setGamePk(data[0].game_pk);
      });
  }, [sampleLocation]);

  function save() {
    alert(`Question: ${question}\nAnswer: ${answer}\nLocation: ${location}`);
  }

  const [question, setQuestion] = useState("question");
  const [answer, setAnswer] = useState("answer");
  const [location, setLocation] = useState("location");

  return (
    <div className={Classes.container}>
      <ListOfQuestions
        setQuestion={setQuestion}
        setAnswer={setAnswer}
        setLocation={setLocation}
      />
      <button className={Classes.zapisz} onClick={save}>
        Zapisz
      </button>
    </div>
  );
};

export default Game;
