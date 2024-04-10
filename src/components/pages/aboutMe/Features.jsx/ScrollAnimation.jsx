import React, { useEffect, useRef, useState } from "react";
import "../Aboutme.css";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";

export default function ScrollAnimation({ text, display }) {
  const ref = useRef(null);
  const refImg = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const displayDisplay = () => {
    if (typeof display == "string") {
      return <img className="images" src={display} alt="" />;
    } else {
      return display
    }
  };

  return (
    <>
      <div className="scroll-container" ref={ref}>
        <motion.div
          className="text"
          variants={{
            hidden: { opacity: 0, y: 0, x: 0 },
            visible: { opacity: 1, y: 0, x: innerWidth / 7 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {text}
        </motion.div>
      </div>

      <div ref={refImg}>
        <motion.div
          className="text"
          variants={{
            hidden: { opacity: 0, y: 0, x: 0 },
            visible: { opacity: 1, y: 0, x: (window.innerWidth * 4) / 7 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 2, delay: 0 }}
        >
          {displayDisplay()}
        </motion.div>
      </div>
    </>
  );
}
