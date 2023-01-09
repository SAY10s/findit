import Classes from "../styles/question.module.css";
import SvgDownload from "../svg/SvgDownload";
import SvgEye from "../svg/SvgEye";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router";

const MilionairesQuesstion = (props) => {
  const navigate = useNavigate();
  function handleDownload() {
    const canvas = document.getElementById(props.id);
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `pytanie${props.id}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  let answer = props.answer.split("|");
  function handleSeeAnswer() {
    navigate(`/panel/odpowiedzi/${props.id}`);
  }

  return (
    <div className={Classes.questionWrapper}>
      <div className={Classes.top}>
        <input
          type={"text"}
          className={Classes.questionInput}
          defaultValue={props.question}
        />
        <select>
          <option value="milionaires">Milionerzy</option>
          <option value="closed">Zamknięte</option>
          <option value="opened">Otwarte</option>
        </select>
      </div>
      <div>
        <input
          type={"text"}
          className={Classes.answer}
          defaultValue={answer[1]}
        />
        <input
          type={"text"}
          className={Classes.answer}
          defaultValue={answer[2]}
        />
        <input
          type={"text"}
          className={Classes.answer}
          defaultValue={answer[3]}
        />
        <input
          type={"text"}
          className={Classes.answer}
          defaultValue={answer[4]}
        />
        <input
          type={"text"}
          className={Classes.location}
          defaultValue={props.location}
        />
        <button className={Classes.delete} onClick={handleDownload}>
          <SvgDownload color="#ffffff" />
        </button>
        <button className={Classes.delete} onClick={handleSeeAnswer}>
          <SvgEye color="#ffffff" />
        </button>
        <div className={Classes.hide}>
          <QRCodeCanvas
            id={props.id}
            value={props.id}
            size={512}
            level={"H"}
            includeMargin={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MilionairesQuesstion;
