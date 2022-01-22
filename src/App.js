import React, { useEffect, useRef, useState } from "react";
import people from "./person";

//corpo do projeto

const Project = () => {
  const [state, setState] = useState(0);
  const { name, job, image } = people[state];
  const ref = useRef(0);

  useEffect(() => {
    console.log(ref.current++ + " clicked");
  });

  return (
    <>
      <section id="container">
        <div id="img">{image}</div>
        <div id="name">
          <h1>{name}</h1>
        </div>
        <div id="job">
          <h1>{job}</h1>
        </div>
        <header id="container2">
          {/* primeiro botão */}
          <div id="button">
            <button
              onClick={() => {
                setState(state + 1);
              }}
            >
              NEXT
            </button>
          </div>
          {/* segundo botão */}
          <div id="button">
            <button
              onClick={() => {
                setState(state - 1);
              }}
            >
              PREV
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default Project;
