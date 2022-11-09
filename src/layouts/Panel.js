import "./styles/Panel.css";
import OptionBar from "../components/OptionBar";

const Panel = (props) => {
  return (
    <div className="container">
      <OptionBar nameAndSurname={props.nameAndSurname} userPk={props.userPk} />
      <div className="content"></div>
    </div>
  );
};

export default Panel;
