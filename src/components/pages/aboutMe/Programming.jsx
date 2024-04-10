import React, { useEffect, useRef, useState } from "react";
import "./Aboutme.css";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import css from "../../../files/css.png";
import js from "../../../files/js.png";
import django from "../../../files/django.png";
import react_2 from "../../../files/react.png";
import python from "../../../files/python.jpg";

export default function Programming() {
  const [btnDis, setBtnDIs] = useState(true);
  const [isOpen, setIsopen] = useState([
    {
      id: 0,
      language: "React",
      description: `I started taking online courses since 2023, beginning with basic
      concepts and currently Im learning the advanced topics such as
      Context, Redux, Next.js, Forms and other third party
      libraries. Currently Im capable of: 
      building web applications from scratch,
      Adding new features to a webpage,
      Eradicating bugs,
      Building intermediate animations,
      Data manipulation,
      And lots of other things.
      `,
      isOpen: false,
      image: react_2,
    },
    {
      id: 1,
      language: "JavaScript",
      description: `JavaScript was my first programming language and I have full control on its concepts. Before changing my field to React, I made sure that I can develop anything with JS. Therefore, I created games, automated services such as text-to-speech weather forcast, and cryptocurrency data illustrator`,
      isOpen: false,
      image: js,
    },
    {
      id: 2,
      language: "Python",
      description:
        "In order to develope strong logical thinking in programming world, I decided to take courses of Python in Armenian Code Academy. In this period I mastered the fundementals and solved difficult problems, thus, I developed strong logical mindset",
      isOpen: false,
      image: python,
    },
    {
      id: 3,
      language: "Django",
      description:
        "My field is mainly focused on web-developement. So along my side-learnings in Python, I started learning Web libraries, which led me to learning basic concepts of Django.",
      isOpen: false,
      image: django,
    },
    {
      id: 4,
      language: "CSS",
      description:
        "GUI and styling play a huge role in any application. Therefore, I spent some time in that category, focusing in CSS5, Bootstrap and Tailwind. This website is an example of my CSS skills",
      isOpen: false,
      image: css,
    },
  ]);
  useEffect(() => {
    const founded_true = isOpen.find(obj=> obj.isOpen) 
    if (founded_true) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const openEvent = (id) => {
    setIsopen((prev) => {
      const newArray = [...prev].map((obj) => {
        return obj.id === id
          ? { ...obj, isOpen: true }
          : { ...obj, isOpen: false };
      });

      return newArray;
    });
    setBtnDIs(false);
  };

  const thedata = isOpen.filter((obj) => obj.isOpen);

  const displayLanguages = isOpen.map((obj, index) => {
    return (
      <div
        onClick={() => (btnDis ? openEvent(obj.id) : handleClick())}
        className="language"
      >
        <h1>{obj.language}</h1>
        <img
          style={{ backgroundColor: "transparent" }}
          src={obj.image}
          alt=""
        />
      </div>
    );
  });

  const handleClick = () => {
    setIsopen((prev) => [...prev].map((obj) => ({ ...obj, isOpen: false })));
    setBtnDIs(true);
  };

  return (
    <>

{/* <div>
      <h1>Projects</h1>
    </div> */}





    <div className="programming">
      {isOpen.find((e) => e.isOpen === true) && (
        <div onClick={handleClick} className="details-container">
          <div
            style={{ maxHeight: (window.innerHeight / 5) * 3.5 }}
            className="details"
          >
            <h3 className="details-language">{thedata[0].language}</h3>

            <div className="description-container">
              <div className="description">{thedata[0].description}</div>
            </div>
          </div>
        </div>
      )}

      {displayLanguages}
    </div>

    
    
    
    </>
  );
}

{
  /* <motion.div layout onClick={()=>setIsopen(prev=>!prev)} className="pp">
        <motion.h2 layout>framer motion</motion.h2>
        {isOpen && 
        <motion.div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            nisi tempore dicta modi error dolor saepe doloribus cum, nulla
            cumque? Amet dolorum nisi, saepe velit ducimus voluptates quae quasi
            reiciendis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            est!
          </p>
        </motion.div> }
      </motion.div> */
}
