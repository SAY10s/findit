import { useState, useEffect } from "react";
import GameLink from "../components/GameLink";

const YourGames = (props) => {
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
      });
  }, []);
  return <div> {loadedLinks} </div>;
};

export default YourGames;
