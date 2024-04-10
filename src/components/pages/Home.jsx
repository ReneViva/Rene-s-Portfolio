import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../files/giphy.gif";
import Rene_resume from "../../files/Rene's Resume.pdf";
import "../../assets/Home.css";
import { TypeAnimation } from "react-type-animation";


export default function Home() {
  const [displayMajor, setDisplayMajor] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayMajor((prev) => !prev);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const brief_explanation_style = {
    color: "aliceblue",
    fontFamily: "playfair",
    position: "absolute",
    fontSize: "2vw",
    top: "45%", // Position text in the middle vertically
    left: "50%", // Position text in the middle horizontally
    transform: "translate(-50%, -50%)", // Center the text precisely
    width: "80%",
    textAlign: "left",
  };
  const brief_explanation_style_mobile = {
    color: "aliceblue",
    fontFamily: "playfair",
    position: "absolute",
    fontSize: "1.3rem",
    top: "35%", // Position text in the middle vertically
    left: "50%", // Position text in the middle horizontally
    transform: "translate(-50%, -50%)", // Center the text precisely
    width: "80%",
    height:'auto',
    textAlign: "left",
    
  };

  return (
    <div className="gif">
      <h1 className="displayMajor">
        {displayMajor
          ? `I am a Website Developer`
          : `I'm skillful in Front-end development`}
      </h1>


      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          `Hello and welcome to my website! Feel free to explore and discover more
        about my expertise and experiences. I'm passionate about continuously
        learning and growing in my career. You can also download my CV to get a
        glimpse of my qualifications and achievements. Let's embark on this
        journey together! Feel free to explore and find more about me.`,
          1000, // wait 1s before replacing "Mice" with "Hamsters"
        ]}
        wrapper="span"
        speed={50}
        style={window.innerWidth >= 740? brief_explanation_style:brief_explanation_style_mobile}
        repeat={Infinity}
        className="bried-explanation"

      />

      <button className="download-cv">
        <Link
          to={Rene_resume}
          download="Rene's Resume"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </Link>
      </button>
      <img src={logo} alt="" />
    </div>
  );
}
