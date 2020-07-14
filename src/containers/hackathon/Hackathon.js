import React from "react";
import "./Hackathon.css";
import HackathonSection from "./HackathonSection";
import { Fade } from "react-reveal";

export default function Hackathon(props) {
  const theme = props.theme;
  return (
    <div className="main" id="hackathon">
      <div className="hackathon-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="hackathon-header" style={{ color: theme.text }}>HACKATHONS</h1>
        </Fade>
      </div>
      <HackathonSection theme={theme} />
    </div>
  );
}