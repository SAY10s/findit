import { useLocation } from "react-router";
import Classes from "./styles/CreateGame.module.css";
import { useState, useEffect } from "react";

const Game = (props) => {
  const sampleLocation = useLocation();
  console.log(sampleLocation);

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
    fetch(`http://localhost/xamppprojects/finditbackend/game.php`, {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        console.log(data[0].title, data[0].description);
        setTitle(data[0].title);
        setDescription(data[0].description);
      });
  }, [sampleLocation]);

  return (
    <form className={Classes.container}>
      <div className={Classes.div1}>Tytuł: </div>
      <div className={Classes.div2}>Opis: </div>
      <div className={Classes.div3}>{title}</div>
      <div className={Classes.div4}>{description}</div>
      <div className={Classes.div5}>Autor: </div>
      <div className={Classes.div6}>
        {props.userPk} {props.nameAndSurname}
      </div>
      <div className={Classes.div7}>
        <hr />
      </div>
      <div className={Classes.div8}>tabelka </div>
    </form>
  );
};

export default Game;
