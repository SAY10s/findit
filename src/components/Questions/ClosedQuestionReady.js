import Classes from "../styles/question.module.css";
import { useRef } from "react";
import SvgDownload from "../svg/SvgDownload";
import { QRCodeCanvas } from "qrcode.react";

const ClosedQuestionReady = (props) => {
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

  return (
    <div className={Classes.questionWrapper}>
      <div className={Classes.top}>
        <input
          type={"text"}
          defaultValue={props.question}
          className={Classes.questionInput}
        />
        <select>
          <option value="closed">Zamknięte</option>
          <option value="opened">Otwarte</option>
          <option value="milionaires">Milionerzy</option>
        </select>
      </div>
      <div>
        <input
          type={"text"}
          defaultValue={props.answer}
          className={Classes.answer}
        />
        <input
          type={"text"}
          defaultValue={props.location}
          className={Classes.location}
        />
        <button className={Classes.delete} onClick={handleDownload}>
          <div>
            <SvgDownload color="#ffffff" />
          </div>
          <div className={Classes.hide}>
            <QRCodeCanvas
              id={props.id}
              value={props.id}
              size={512}
              level={"H"}
              includeMargin={true}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ClosedQuestionReady;
