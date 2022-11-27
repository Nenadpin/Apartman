import React from "react";
import data from "../Data/dataHome";
const Home = ({ lng }) => {
  return (
    <div style={{ fontSize: "large" }}>
      <h2>{lng === "en" ? `Description:` : `Opis:`}</h2>
      <hr></hr>
      <p>{lng === "en" ? data.descEn : data.descSr}</p>
      <br></br>
      <h2>{lng === "en" ? `Environment:` : `Okolina:`}</h2>
      <hr></hr>
      <p>{lng === "en" ? data.envEn : data.envSr}</p>
      <br></br>
      <h2>{lng === "en" ? `Hosts:` : `Domacini:`}</h2>
      <hr></hr>
      <p>{lng === "en" ? data.hostsEn : data.hostsSr}</p>
    </div>
  );
};

export default Home;
