
import React from "react";

//https://codesandbox.io/p/sandbox/react-draggable-list-01ico?file=%2Fsrc%2Fapp.tsx%3A1%2C26

export default function Programming() {
  const initialItems = [
    {
      id: 0,
      text: `JavaScript and React : since 2020 I continuously learned concepts of
    JavaScript and currently I'm improving my skills in React`,
      color: "transparent",
    },

    {
      id: 1,
      text: `Python : Took courses in Armenian Code Academy and mastered
    fundamentals`,
      color: "transparent",
    },
    {
      id: 2,
      text: `Technical and Fundamental Analysis: The duration that I was trader I also
    took several online courses`,
      color: "transparent",
    },
    {
      id: 3,
      text: `English : taking seveal english classes i managed to improve my
    skills, also my IELTS score is 7`,
      color: "transparent",
    },
  ];




  return (
    <div className="demo">
      <ul className="inside-ul">
        {initialItems.map((item) => (
          <li key={item.id}>
            <button

              style={{
                color: "aliceblue",
                fontSize: "125%",
                background: item.color,
                
              }}
            >
              <span>{item.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
