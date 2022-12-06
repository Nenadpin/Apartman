import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Feedback = ({ setDisp }) => {
  const rewRef = collection(db, "feed");
  const [feed, setFeed] = useState("");
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const getFeed = async () => {
      try {
        const result = await getDocs(rewRef);
        setFeedData(
          result.docs.map((doc) => ({
            date: doc.data().date,
            feed: doc.data().feed,
          }))
        );
      } catch (err) {
        console.log(err);
      }
    };
    getFeed();
  }, []);

  const feedSubmit = async () => {
    try {
      await addDoc(rewRef, { date: new Date().toDateString(), feed: feed });
    } catch (err) {
      alert("Server error. Try again.");
    } finally {
      setDisp(0);
      alert("Thank You for Your feedback...");
    }
  };
  return (
    <div className="feed">
      <div className="prevFeed">
        <ul>
          {feedData.map((f, index) => {
            return (
              <li key={index}>
                <strong>{f.date}</strong> : {f.feed}
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="newFeed">
        <textarea
          value={feed}
          onChange={(e) => setFeed(e.target.value)}
        ></textarea>
        <Button onClick={feedSubmit} variant="contained">
          OK
        </Button>
      </div>
    </div>
  );
};

export default Feedback;
