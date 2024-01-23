import React from "react";
import "./Hero2.css";
import image from "../../Images/herobg-2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
  useEffect(() => {
    
    
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
      ".bgcont",
      {
        scale: 0.95,
        opacity: 0,
      },
      {
        scale: 1,
        duration: 1.5,
        opacity: 1,
      }
    );
    gsap.fromTo(".bgcont",
    {
       y:0
    },
    {
       y:100,
       duration:1,
       boxShadow:"0px 10px 35px rgba(23,23,23)",
       scrollTrigger:{
          trigger:" .bgcont",
          scroller:"body",
          // markers:true,
          start:"top 10%",
          end:"top top",
          scrub:1
       }
    })
  });

  return (
    <div id="Hero" className="hero-section">
      {/* <div className="hero-container">
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
      </div> */}

      {/* <img className='me' src="./Images/hero-img.png" alt="" /> */}
      {/* <img className='me' src={require("../../Images/hero-img.png")} alt="" /> */}
      <div className="bgcont">
      <img className="img" src={image} alt="" />
      </div>

      <div className="social-icon">
        <a
          target="_blank" rel="noreferrer"
          href="https://www.instagram.com/_anshul_sharma_?igsh=MWRueW91NW81dWRsMA=="
        >
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
        <a
          target="_blank" rel="noreferrer"
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

export default Hero2;
