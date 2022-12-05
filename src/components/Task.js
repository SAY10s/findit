import Classes from "./styles/task.module.css";
import { useNavigate } from "react-router";
import SvgDownload from "./svg/SvgDownload";
import SvgEye from "./svg/SvgEye";
import { QRCodeCanvas } from "qrcode.react";

const Task = (props) => {
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

  return (
    <div className={Classes.task}>
      <div>
        <SvgEye color="#ffffff" />
      </div>
      <div>{props.question}</div>
      <div>{props.answer}</div>
      <div>{props.location}</div>
      <div onClick={handleDownload}>
        <SvgDownload color="#ffffff" />
        <QRCodeCanvas
          id={props.id}
          value={props.id}
          size={512}
          level={"H"}
          includeMargin={true}
        />
      </div>
    </div>
  );
};

export default Task;
