import React from "react";
import Home from "./Home";
import Reserve from "./Reserve";
import Galery from "./Galery";
import Terms from "./Terms";
import Contact from "./Contact";
import Feedback from "./Feedback";
const Frame = ({ lng, disp, setDisp }) => {
  return (
    <div className="frame">
      {disp === 1 ? (
        <Home lng={lng} />
      ) : disp === 2 ? (
        <Reserve setDisp={setDisp} />
      ) : disp === 3 ? (
        <Galery />
      ) : disp === 4 ? (
        <Terms lng={lng} />
      ) : disp === 5 ? (
        <Contact />
      ) : disp === 6 ? (
        <Feedback setDisp={setDisp} />
      ) : null}
    </div>
  );
};

export default Frame;
