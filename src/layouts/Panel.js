import "./styles/Panel.css";
import OptionBar from "../components/OptionBar";

const Panel = () => {
  return (
    <div className="container">
      <OptionBar />
      <div className="content"></div>
    </div>
  );
};

export default Panel;
