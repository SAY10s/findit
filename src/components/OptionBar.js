import Classes from "./styles/optionBar.module.css";
import UserBox from "./UserBox";
import { NavLink } from "react-router-dom";
import SvgMenu from "./svg/SvgMenu";
import SvgPlus from "./svg/SvgPlus";
import GameLink from "./GameLink";

const OptionBar = (props) => {
  let name = props.nameAndSurname.split(" ");

  let formData = new FormData();
  formData.append("user_pk", `${props.userPk}`);

  let links = [];

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
          links.push(<div>{data[i].title}</div>);
        }
        console.log("links1: ", links);
      } else console.log("FUCK NOT WORKING");
    });

  console.log("links1: ", links);
  let links2 = [
    <GameLink key="tit1" title="test1" />,
    <GameLink key="tit2" title="test2" />,
  ];
  console.log("links2: ", links2);

  return (
    <div className={Classes.options}>
      <div className={Classes.logo}>
        find<span>.it</span>
      </div>
      <hr />
      <div className={Classes.links}>
        <NavLink
          to="t1"
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
          to="t2"
          className={({ isActive }) =>
            isActive ? Classes.activeNav : Classes.inactiveNav
          }
        >
          <SvgPlus color={"#ffffff"} />
          <div className={Classes.text}>Stwórz grę</div>
        </NavLink>
        <hr className={Classes.hr2} />
        {links}
      </div>
      <UserBox nameAndSurname={name[0]} />
    </div>
  );
};

export default OptionBar;
