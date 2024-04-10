import React from "react";
import Programming from "./Features.jsx/DragAndDrop";
import "./Aboutme.css";
export default function Education() {
  return (
    <div className="education">
      <div>
        <h3>Academical</h3>
        <p>
          I studied at an Iranian school, and my tendency was in Math and physics.
          At high school, we learned advanced concepts of mathematics such as Calculus, Trigonometry, Statistics, Probability,
          Limit and Advance Derivative, and their use-cases in graphs, Continuity, and Integral and physics such as acceleration, movement
          calculations, rotational movements, vibrations, waves, their
          collisions and in nuclear physics.
        </p>
      </div>

      <div>
        <h3>Non-Academical </h3>
        <Programming />

      </div>
    </div>
  );
}
