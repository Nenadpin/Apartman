import React from "react";
import data from "../Data/dataTerms";

const Terms = ({ lng }) => {
  return (
    <div>
      <h4>{lng === "en" ? `Terms:` : `Uslovi:`}</h4>
      <hr></hr>
      <br></br>
      <p style={{ whiteSpace: "pre-line", fontSize: "large" }}>
        {lng === "en" ? data.termsEn : data.termsSr}
      </p>
    </div>
  );
};

export default Terms;
