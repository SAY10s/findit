import Classes from "./styles/CreateGame.module.css";

const CreateGame = () => {
  return (
    <div className={Classes.container}>
      <div className={Classes.div1}>Tytuł: </div>
      <div className={Classes.div2}>Opis: </div>
      <div className={Classes.div3}>Romantyzm</div>
      <div className={Classes.div4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus
        ab veritatis, voluptas accusamus tenetur praesentium officiis omnis unde
        quas recusandae veniam provident porro? Repudiandae saepe similique a
        assumenda quod.
      </div>
      <div className={Classes.div5}>Autor: </div>
      <div className={Classes.div6}>Kim Kitsuragi</div>
      <div className={Classes.div7}>KRYCHA</div>
      <div className={Classes.div8}>Tabelka</div>
    </div>
  );
};

export default CreateGame;
