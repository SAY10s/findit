import MilionairesQuesstion from "./MillionairesQuestion";
import OpenQuestion from "./OpenQuestion";
import ClosedQuestion from "./ClosedQuestion";

const ListOfQuestions = (props) => {
  return (
    <div>
      <div>Lista pytań</div>
      <MilionairesQuesstion />
      <OpenQuestion />
      <ClosedQuestion
        setQuestion={props.setQuestion}
        setAnswer={props.setAnswer}
        setLocation={props.setLocation}
      />
    </div>
  );
};

export default ListOfQuestions;
