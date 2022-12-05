import { useLocation } from "react-router";
import Classes from "./styles/CreateGame.module.css";
import { useState, useEffect } from "react";
import TaskTable from "../components/TaskTable";

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
    fetch(`http://localhost/xamppprojects/finditbackend/game.php`, {
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

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${"siur"}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <form className={Classes.container}>
      <div className={Classes.div1}>Tytuł: </div>
      <div className={Classes.div2}>Opis: </div>
      <div className={Classes.div3}>
        <div className={Classes.input}>{title}</div>
      </div>
      <div className={Classes.div4}>
        <div className={Classes.input}>{description}</div>
      </div>
      <div className={Classes.div5}>Autor: </div>
      <div className={Classes.div6}>
        <div className={Classes.input}>
          {props.userPk} {props.nameAndSurname}
        </div>
      </div>
      <div className={Classes.div7}>
        <hr />
      </div>
      <div className={Classes.div8}>
        <TaskTable gamePk={gamePk} />
      </div>
    </form>
  );
};

export default Game;
