import React from "react";
import "./Hero.css";
import image from "../../Images/hero-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-container span h1 ",
      {
        y: 100,
        opacity: 0,
        skewY: 1,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 1.1,
        skewY: 0,
      }
    );
    gsap.fromTo(
      ".social-icon a .icon",
      {
        y: 100,
      },
      {
        y: 0,
        duration: 1.15,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      ".scroll .box",
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1.5,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      ".hero-section .me",
      {
        scale: 1.25,
        opacity: 0,
      },
      {
        scale: 1.35,
        duration: 1.5,
        opacity: 1,
      }
    );
  });

  return (
    <div className="hero-section">
      <div className="hero-container">
        {/* <span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>-</span><span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span> */}
        <span className="heroText">
          <h1>Front-End Developer</h1>
        </span>
        <br />
        <span className="heroText">
          <h1>&</h1>
        </span>
        <br />
        <span className="heroText">
          <h1>Designer</h1>
        </span>
      </div>

      {/* <img className='me' src="./Images/hero-img.png" alt="" /> */}
      {/* <img className='me' src={require("../../Images/hero-img.png")} alt="" /> */}
      <img className="me" src={image} alt="" />

      <div className="social-icon">
        <a
          target="_blank"
          href="https://www.instagram.com/_anshul_sharma_?igsh=MWRueW91NW81dWRsMA=="
        >
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/anshul-sharma-6132a6205/"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
        </a>
      </div>

      <div className="scroll">
        <div className="box">scroll</div>
        <div id="line" className="box">
          line
        </div>
      </div>
    </div>
  );
};

export default Hero;
