import React from "react";
import TrainingCalendar from "../../components/calendar/TrainingCalendar";
import Message from "../../components/message/Message";
import Footer from "../../components/footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="homeTop">
          <TrainingCalendar />
        </div>
        <div className="homeMiddle">
          <Message />
        </div>
        <div className="homeBottom">
          <Footer />
        </div>
      </div>
    </>
  );
}
