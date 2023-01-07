import MilionairesQuesstion from "./MillionairesQuestion";
import OpenQuestion from "./OpenQuestion";
import ClosedQuestion from "./ClosedQuestion";

const ListOfQuestions = (props) => {
  return (
    <div>
      <div>Lista pytań</div>
      <MilionairesQuesstion />
      <OpenQuestion />
      <ClosedQuestion setData={props.setData} />
    </div>
  );
};

export default ListOfQuestions;
