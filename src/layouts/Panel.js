import "./styles/Panel.css";
import OptionBar from "../components/OptionBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Panel = (props) => {
  return (
    // <Router>
    <div className="container">
      <OptionBar nameAndSurname={props.nameAndSurname} userPk={props.userPk} />
      <div className="content">
        <Routes>
          <Route path="/" element={<div>NIc</div>} />
          <Route path="/stworzgre" element={<div>Stworz</div>} />
        </Routes>
      </div>
    </div>
    // </Router>
  );
};

export default Panel;
