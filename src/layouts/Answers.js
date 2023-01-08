import { useLocation } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import Answer from "../components/Answer";
import Classes from "../components/styles/answer.module.css";

const Answers = () => {
  const sampleLocation = useLocation();
  const [loadedAnswers, setLoadedAnswers] = useState([]);

  let id = sampleLocation.pathname.split("/panel/odpowiedzi/").join("");
  console.log(`Id pytania: ${id}`);

  let renderPlz = 0;
  let formData = new FormData();
  formData.append("question_id", `${id}`);

  let answers = [];

  useEffect(() => {
    fetch(`https://findit.zs6sobieski.pl/php/getanswer.php`, {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        answers = [];
        if (typeof data[0] !== "undefined") {
          console.log(data[0]);
          for (let i = 0; i < data.length; i++) {
            answers.push(
              <Answer
                name={data[i].name}
                surname={data[i].surname}
                answer={data[i].answer}
                is_correct={data[i].is_correct == 1 ? "Tak" : "Nie"}
              />
            );
          }
          setLoadedAnswers(answers);
        } else {
          console.log("3FUCK NOT WORKING3");
        }
        console.log(data);
      });
  }, [renderPlz]);

  return (
    <>
      <div className={Classes.headerTable}>
        <div className={Classes.header}>
          <div>Imię:</div>
          <div>Odpowiedź:</div> <div>Poprawne:</div>
        </div>
      </div>
      <div className={Classes.answerTable}>{loadedAnswers}</div>
    </>
  );
};

export default Answers;
