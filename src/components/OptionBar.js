import Classes from "./styles/optionBar.module.css";
import UserBox from "./UserBox";
import { NavLink } from "react-router-dom";
import SvgMenu from "./svg/SvgMenu";
import SvgPlus from "./svg/SvgPlus";
import GameLink from "./GameLink";
import { useState, useEffect } from "react";

const OptionBar = (props) => {
  const [loadedLinks, setLoadedLinks] = useState([]);
  let links = [];

  let formData = new FormData();
  formData.append("user_pk", `${props.userPk}`);

  useEffect(() => {
    fetch(`https://findit.zs6sobieski.pl/php/gameLink.php`, {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        console.log("LOADOWANIE");

        return response.json();
      })
      .then((data) => {
        links = [];
        if (typeof data[0] !== "undefined") {
          for (let i = 0; i < data.length; i++) {
            links.push(
              <GameLink
                key={data[i].game_pk}
                title={data[i].title}
                gamePk={data[i].game_pk}
              />
            );
          }
          setLoadedLinks(links);
        } else console.log("FUCK NOT WORKING");
      });
  }, [props.gameAmount]);

  let name = props.nameAndSurname.split(" ");

  return (
    <div className={Classes.options}>
      <div className={Classes.logo}>
        find<span>.it</span>
      </div>
      <hr />
      <div className={Classes.links}>
        <NavLink
          to="twojegry"
          className={({ isActive }) =>
            isActive ? Classes.activeNav : Classes.inactiveNav
          }
        >
          <div>
            <SvgMenu color={"#ffffff"} />
          </div>
          <div className={Classes.text}>Twoje gry</div>
        </NavLink>
        <NavLink
          to="stworzgre"
          className={({ isActive }) =>
            isActive ? Classes.activeNav : Classes.inactiveNav
          }
        >
          <SvgPlus color={"#ffffff"} />
          <div className={Classes.text}>Stwórz grę</div>
        </NavLink>
        <hr className={Classes.hr2} />
        {loadedLinks}
      </div>
      <UserBox nameAndSurname={name[0]} />
    </div>
  );
};

export default OptionBar;
