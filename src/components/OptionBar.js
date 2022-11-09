import Classes from "./styles/optionBar.module.css";
import UserBox from "./UserBox";
import { NavLink } from "react-router-dom";
import SvgMenu from "./svg/SvgMenu";
import SvgPlus from "./svg/SvgPlus";
import GameLink from "./GameLink";
import { useState, useEffect } from "react";

const OptionBar = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedLinks, setLoadedLinks] = useState([]);
  let links = [];

  let formData = new FormData();
  formData.append("user_pk", `${props.userPk}`);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost/xamppprojects/finditbackend/gameLink.php`, {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        if (typeof data[0] !== "undefined") {
          for (let i = 0; i < data.length; i++) {
            console.log("siur");
            console.log(data[i].title);
            links.push(<GameLink key={data[i].title} title={data[i].title} />);
          }
          console.log("bruh", links);
          console.log("links1: ", links);
          setLoadedLinks(links);
        } else console.log("FUCK NOT WORKING");
        setIsLoading(false);
      });
  }, []);

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
