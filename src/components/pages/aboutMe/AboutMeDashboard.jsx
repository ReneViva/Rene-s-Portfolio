import React, { useEffect, useRef, useState } from "react";
import "./Aboutme.css";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";
import Crypto from "./Crypto";
import ScrollAnimation from "./Features.jsx/ScrollAnimation";
import pm from "../../../files/pm.jpg";
import nft from '../../../files/nft.jpg'
import code from '../../../files/code.jpg'
import jswall from '../../../files/jswall.jpg'
export default function AboutMeDashboard() {
  const { scrollYProgress } = useScroll();
  const images = [pm, <Crypto />, nft , code, jswall];
  const text = `Greetings! I'm Rene Vartanian, a passionate individual born in 2005,
driven by curiosity and a relentless pursuit of knowledge. My journey
began with a solid foundation in physics and mathematics, Because of my major in high school.#During the exhilarating rise of Bitcoin, I delved into the world of
        cryptocurrency trading, eager to explore its potential. Recognizing the
        importance of theoretical knowledge, I diligently pursued courses in both technical
        and fundamental analysis.#I encountered challenges that prompted a
        pivot in my career trajectory. Intrigued by the burgeoning realm of NFTs
        (Non-Fungible Tokens), I embarked on a new venture alongside a talented
        designer friend. Together, we crafted unique digital assets.#        In my role overseeing social marketing, I honed my skills in audience
        engagement and brand promotion, driving demand for our creations.
        However, I recognized the need for a robust online presence to showcase
        our work effectively. This realization sparked my interest in web development.# At the age of 16, I took my first steps into the world of
        JavaScript. Since then, with my thirst for knowledge and excellence, I've immersed myself in a continuous cycle of
        learning and growth, embracing new technologies and frameworks.`;

  const seperateText = text.split("#");
  const displayText = seperateText.map((str, index) => {
    return <ScrollAnimation key={index} display={images[index]} text={str} />;
  });

  return <div>{displayText}</div>;
}
