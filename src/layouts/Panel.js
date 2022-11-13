import "./styles/Panel.css";
import OptionBar from "../components/OptionBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateGame from "./CreateGame";
import YourGames from "./YourGames";
import Game from "./Game";

const Panel = (props) => {
  return (
    <div className="container">
      <OptionBar nameAndSurname={props.nameAndSurname} userPk={props.userPk} />
      <div className="content">
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route
            path="/stworzgre"
            element={<CreateGame userPk={props.userPk} />}
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
        </Routes>
      </div>
    </div>
  );
};

export default Panel;
