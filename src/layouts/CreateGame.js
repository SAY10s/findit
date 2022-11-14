import Classes from "./styles/CreateGame.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router";

const CreateGame = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const authorRef = useRef();

  const navigate = useNavigate();
  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
  async function goToPage(url = "/XDD", time = 1200) {
    await wait(time);
    navigate(url);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    formData.append("title", `${title}`);
    formData.append("description", `${description}`);
    formData.append("author", `${props.userPk}`);

    fetch(`http://localhost/xamppprojects/finditbackend/createGame.php`, {
      method: "POST",
      body: formData,
    }).then((data) => {
      console.log("!!!here");
      props.setGameAmount(Math.random() * 3);
      goToPage(`/panel/gra/${title}`, 0);
    });
  }
  return (
    <form className={Classes.container}>
      <div className={Classes.div1}>Tytuł: </div>
      <div className={Classes.div2}>Opis: </div>
      <div className={Classes.div3}>
        <input type={"text"} ref={titleRef} />
      </div>
      <div className={Classes.div4}>
        <input type={"text"} ref={descriptionRef} />
      </div>
      <div className={Classes.div5}>Autor: </div>
      <div className={Classes.div6}>
        <input type={"text"} ref={authorRef} />
      </div>
      <div className={Classes.div7}>
        <hr />
      </div>
      <div className={Classes.div8}>
        <button onClick={handleSubmit}>Stwórz grę</button>
      </div>
    </form>
  );
};

export default CreateGame;
