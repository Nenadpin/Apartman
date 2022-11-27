import React, { useRef, useState, useEffect } from "react";
import "../styles.css";
import DatePicker from "sassy-datepicker";
import { Button, TextField } from "@mui/material";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";

let startDate = "",
  endDate = "";

const Reserve = ({ setDisp }) => {
  const usersRef = collection(db, "guests");
  const start = useRef();
  const end = useRef();
  const [no, setNo] = useState(2);
  const [user, setUser] = useState("");
  const [resDates, setResDates] = useState([]);
  const [days, setDays] = useState(1);

  const email = async () => {
    let templateParams = {
      name: user,
      begin: start.current.innerText,
      end: end.current.innerText,
      adults: no,
    };
    emailjs
      .send(
        "service_ldkwpqe",
        "template_cylxu9a",
        templateParams,
        "mXHHu8eoKOzJ7U8pb"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    const getRes = async () => {
      try {
        const result = await getDocs(usersRef);
        setResDates(
          result.docs.map((doc) => ({
            date: doc.data().date,
            days: doc.data().days,
          }))
        );
      } catch (err) {
        console.log(err);
      }
    };
    getRes();
  }, []);

  useEffect(() => {
    localStorage.setItem("closed", JSON.stringify(resDates));
  }, [resDates]);

  const onChange = (date) => {
    if (date.toDateString() !== new Date().toDateString() && date < new Date())
      alert("Check-in date is wrong!");
    else {
      if (startDate === "" && endDate === "") {
        startDate = date;
        start.current.innerText = date.toDateString();
      } else if (date <= startDate) alert("Check-out date is wrong!");
      else {
        endDate = date;
        end.current.innerText = date.toDateString();
        setDays(() => Math.floor((endDate - startDate) / (3600 * 24000) + 0.5));
      }
    }
    if (endDate !== "" && !checkDates(startDate, endDate)) {
      alert("The apartment is occupied in given period!");
      reset();
    }
  };

  const checkDates = (start, end) => {
    let closedDates = [];
    let dates = JSON.parse(localStorage.getItem("closed"));
    for (let i = 0; i < dates.length; i++) {
      let currentDate = new Date(dates[i].date);
      for (let j = 0; j < dates[i].days; j++) {
        closedDates.push(
          new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() + j
          )
        );
      }
    }
    for (let i = 0; i < closedDates.length; i++) {
      if (start <= closedDates[i] && closedDates[i] <= end) {
        return false;
      }
    }
    return true;
  };

  const reset = () => {
    startDate = "";
    endDate = "";
    setUser("");
    start.current.innerText = "";
    end.current.innerText = "";
  };

  const resSubmit = async () => {
    if (!no) {
      alert("You must enter number of guests!");
    } else if (!user) {
      alert("You must enter contact details!");
    } else if (!endDate) {
      alert("Complete the reservation dates, please!");
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      await addDoc(usersRef, { date: startDate.toDateString(), days: days });
    } catch (err) {
      alert("Server error. Try again.");
    } finally {
      email();
      setDays(1);
      reset();
      setDisp(0);
      localStorage.removeItem("closed");

      alert("Thank You for reservation. We will contact You soon...");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "10px",
      }}
    >
      <div className="resInput">
        <h2>Number of adults:</h2>
        <TextField
          sx={{ width: "60px", backgroundColor: "white" }}
          size="small"
          variant="outlined"
          required
          type="number"
          value={no}
          onChange={(e) => {
            if (e.target.value > 1 && e.target.value < 5) setNo(e.target.value);
          }}
        />
      </div>
      <DatePicker onChange={onChange} />
      <div className="rezDetails">
        <p style={{ fontWeight: "bold" }}>
          Check-in: <span style={{ fontWeight: "normal" }} ref={start}></span>
        </p>
        <p style={{ fontWeight: "bold" }}>
          Check-out: <span style={{ fontWeight: "normal" }} ref={end}></span>
        </p>
      </div>
      <TextField
        sx={{ backgroundColor: "white" }}
        className="rezDetails"
        size="small"
        variant="outlined"
        required
        placeholder="Contact (phone/email)"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <div className="resBtn">
        <Button onClick={reset} color="info" variant="outlined" size="large">
          Reset
        </Button>
        <Button
          onClick={resSubmit}
          color="info"
          variant="contained"
          size="large"
        >
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default Reserve;
