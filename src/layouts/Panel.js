import "./styles/Panel.css";
import OptionBar from "../components/OptionBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateGame from "./CreateGame";
import YourGames from "./YourGames";
import Game from "./Game";
import { useState } from "react";
import Answers from "./Answers";

const Panel = (props) => {
  const [gameAmount, setGameAmount] = useState(0);

  return (
    <div className="container">
      <OptionBar
        nameAndSurname={props.nameAndSurname}
        userPk={props.userPk}
        setGameAmount={setGameAmount}
        gameAmount={gameAmount}
      />
      <div className="content">
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route
            path="/stworzgre"
            element={
              <CreateGame
                userPk={props.userPk}
                setGameAmount={setGameAmount}
                gameAmout={gameAmount}
              />
            }
          />
          <Route
            path="/twojegry"
            element={<YourGames userPk={props.userPk} />}
          />
          <Route
            path="/gra/*"
            element={
              <Game
                userPk={props.userPk}
                nameAndSurname={props.nameAndSurname}
              />
            }
          />
          <Route path="/odpowiedzi/*" element={<Answers />} />
        </Routes>
      </div>
    </div>
  );
};

export default Panel;
