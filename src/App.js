import { useState } from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import "./index.css";
import Frame from "./components/Frame";

function App() {
  const [lng, setLng] = useState("en");
  const [disp, setDisp] = useState(0);
  return (
    <div className="App">
      <Navbar lng={lng} disp={disp} setDisp={setDisp} />
      <Main setLng={setLng} />
      {disp ? <Frame lng={lng} disp={disp} setDisp={setDisp} /> : null}
    </div>
  );
}

export default App;
