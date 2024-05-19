import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "./styles/preloader.css";
import logo from "../images/logo/H Transparent.png";

const Preloader = React.memo(({ setCharged }) => {
  const preloader = useRef();
  const [progress, setProgress] = useState(() => 0);
  const aux = { value: 0 };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".logo",
      { y: -20, opacity: 0 },
      { duration: 0.5, opacity: 1, y: 0 }
    );
    tl.fromTo(
      ".letter1",
      { y: 20 },
      { duration: 0.05, opacity: 1, y: 0, stagger: 0.03 },
      "-=.3"
    );
    tl.fromTo(
      ".letter2",
      { y: 20 },
      { duration: 0.05, opacity: 1, y: 0, stagger: 0.03 },
      "-=.5"
    );
    tl.fromTo(
      ".letter3",
      { y: 20 },
      { duration: 0.05, opacity: 1, y: 0, stagger: 0.03 },
      "-=.3"
    );
    tl.to(
      aux,
      {
        duration: 5,
        value: 100,
        ease: "power2.inOut",
        onUpdate: () => {
          parseInt(aux.value) !== progress && setProgress(parseInt(aux.value));
        },
        onComplete: () => setCharged(true)
      },
      "-=.3"
    );
    tl.to(
      ".letter1",
      { duration: 0.05, opacity: 0, y: -20, stagger: 0.03 },
      "-=.5"
    );
    tl.to(
      ".letter2",
      { duration: 0.05, opacity: 0, y: -20, stagger: 0.03 },
      "-=.5"
    );
    tl.to(
      ".letter3",
      { duration: 0.05, opacity: 0, y: -20, stagger: 0.03 },
      "-=.3"
    );
    tl.to(preloader.current, { duration: 1, opacity: 0, ease: "power4.in" });
    tl.to(preloader.current, { display: "none" });
  }, []);

  return (
    <div ref={preloader} className="preloader">
      <div className="logo">
        <img src={logo} alt="Charity Logo" />
      </div>
      <p className="text">
        <span className="letters">
          {"Transforming lives,".split("").map((letter, i) => (
            <span key={i} className="letter1">
              {letter}
            </span>
          ))}
        </span>
        <span className="letters">
          {"one person at a time,".split("").map((letter, i) => (
            <span key={i} className="letter2">
              {letter}
            </span>
          ))}
        </span>
        <span className="letters">
          {"with your help".split("").map((letter, i) => (
            <span key={i} className="letter3">
              {letter}
            </span>
          ))}
        </span>
      </p>
      <div>
        <p className="count">{progress}%</p>
      </div>
    </div>
  );
});

export default Preloader;
