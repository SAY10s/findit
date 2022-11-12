import { useLocation } from "react-router";
import Classes from "./styles/CreateGame.module.css";

const Game = (props) => {
  const sampleLocation = useLocation();
  console.log(sampleLocation);

  let game = sampleLocation.pathname.split("/panel/gra/").join("");
  console.log(`Tytuł: ${game}`);

  let formData = new FormData();
  formData.append("user_pk", `${props.userPk}`);
  formData.append("title", `${game}`);

  fetch(`http://localhost/xamppprojects/finditbackend/game.php`, {
    method: "POST",
    body: formData,
  }).then((data) => {
    console.log(data[0].title, data[0].description);
  });

  return (
    <form className={Classes.container}>
      <div className={Classes.div1}>Tytuł: </div>
      <div className={Classes.div2}>Opis: </div>
      <div className={Classes.div3}>tytuł</div>
      <div className={Classes.div4}>opis w płynie, skurwesynie</div>
      <div className={Classes.div5}>Autor: </div>
      <div className={Classes.div6}>{props.userPk} Kim Kitsuragi</div>
      <div className={Classes.div7}>
        <hr />
      </div>
      <div className={Classes.div8}>tabelka </div>
    </form>
  );
};

export default Game;
