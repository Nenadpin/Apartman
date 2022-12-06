import { Button } from "@mui/material";
import React from "react";

const Navbar = ({ lng, disp, setDisp }) => {
  return (
    <div className="navbar">
      <Button
        color="info"
        variant="contained"
        size="large"
        onClick={() => {
          if (disp === 1) setDisp(0);
          else setDisp(1);
        }}
      >
        {lng === "en" ? "Home" : "Opis"}
      </Button>
      <Button
        color="info"
        variant="contained"
        size="large"
        onClick={() => setDisp(2)}
      >
        {lng === "en" ? "Reserve" : "Zakupi"}
      </Button>
      <Button
        color="info"
        variant="contained"
        size="large"
        onClick={() => setDisp(3)}
      >
        {lng === "en" ? "Galery" : "Slike"}
      </Button>
      <Button
        color="info"
        variant="contained"
        size="large"
        onClick={() => setDisp(4)}
      >
        {lng === "en" ? "Terms" : "Uslovi"}
      </Button>
      <Button
        color="info"
        variant="contained"
        size="large"
        onClick={() => setDisp(5)}
      >
        {lng === "en" ? "Contact" : "Kontakt"}
      </Button>
      <Button
        color="info"
        variant="contained"
        size="large"
        onClick={() => setDisp(6)}
      >
        {lng === "en" ? "Feed" : "Utisci"}
      </Button>
    </div>
  );
};

export default Navbar;
