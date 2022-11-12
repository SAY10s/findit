import { useLocation } from "react-router";

const Game = (props) => {
  const sampleLocation = useLocation();
  console.log(sampleLocation);

  return (
    <div>
      {sampleLocation.pathname.split("/panel/gra/").join("")} {props.userPk}
    </div>
  );
};

export default Game;
