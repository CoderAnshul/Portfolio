import React, { useEffect} from "react";
import "./About.css";
import leftComma from "../../Images/left-quote.png";
import rightComma from "../../Images/right-quote.png";
import cv from "../../Images/ANSHUL SHARMA.pdf";
import gsap from 'gsap';
import { ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useEffect(() => {
    var tl = gsap.timeline();

    var cont = document.querySelector('.about');
    var clickbtn = document.querySelector('#play');

      cont.addEventListener("mouseenter",function(){
      gsap.to(clickbtn,{
          scale:1.2,
          opacity:1
      })
  })
    cont.addEventListener("mouseleave",function(){
      gsap.to(clickbtn,{
          scale:0,
          opacity:0
      })
  })
    cont.addEventListener("mousemove",function(dets){
      gsap.to(clickbtn,{
          left:dets.x-40,
          top:dets.y-70
      })
  })
  

    tl.fromTo(".about",
    {
      backgroundColor:"#171717",
    },
    {
      backgroundColor:"#EDEDED",
      scrollTrigger:{
        trigger: ".about",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 50%",
        scrub:1
      }
    })

    tl.fromTo(".quote span h2",
    {
      y:100,
      opacity:0,
      skewY:"3deg",
    },
    {
      y:0,
      opacity:1,
      duration:1,
      skewY:"0deg",
      // stagger:0.3,
      scrollTrigger:{
        trigger: ".quote h2",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 80%",
        scrub:3
        // once:true
      }
    })


    // --------------------------------- Comma 

    tl.fromTo(".quote .leftComma",
    {
      y:-70,
      x:-70,
      opacity:0
    },
    {
      x:0,
      y:0,
      duration:1,
      scrub:3,
      opacity:1,
      scrollTrigger:{
        trigger: ".quote h2",
        scroller:"body",
        // markers:true,
        start:"top 110%",
        end:"top 1000%",
        scrub:3
      }
    })
    tl.fromTo(".quote .rightComma",
    {
      y:70,
      x:70,
      opacity:0
    },
    {
      x:0,
      y:0,
      duration:1,
      
      opacity:1,
      scrollTrigger:{
        trigger: ".quote h2",
        scroller:"body",
        // markers:true,
        start:"top 110%",
        end:"top 100%",
        scrub:3
      }
    })

    tl.fromTo(".about-me .aboutHeading h2",
    {
      y:100,
      opacity:0
    },
    {
      y:0,
      duration:0.5,
      opacity:1,
      stagger:0.1,
      scrollTrigger:{
        trigger: ".about-me .aboutHeading h2",
        scroller:"body",
        // markers:true,
        start:"top 110%",
        end:"top 100%",
        scrub:3
      }
    })

    tl.fromTo(".about-me span h4",
    {
      y:100,
      opacity:0,
      skewY:"2deg"
    },
    {
      y:0,
      opacity:1,
      duration:0.8,
      skewY:"0deg",
      stagger:0.2,
      scrollTrigger:{
        trigger: ".about-me span h4",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 88%",
        scrub:5
      }
    })

  
  })

  return (
    <div id="About" className="about">
        <a id="play" href={cv} download="Anshul Sharma(CV)"><label htmlFor="a">click me</label></a>
        
      <div className="quote">

        <span ><h2>Through development and design, I</h2></span>
        <span><h2>produce engaging digital experiences that</h2></span>
        <span><h2>uplift and connect with people.</h2></span>

        <img className="leftComma" src={leftComma} alt="" />
        <img className="rightComma" src={rightComma} alt="" />

      </div>

      <div className="about-me">

        <div className="aboutHeading">
            {/* <h2>A</h2>
            <h2>b</h2>
            <h2>o</h2>
            <h2>u</h2>
            <h2>t &nbsp;</h2>
            <h2>m</h2>
            <h2>e</h2> */}

            <h2>About me</h2>
        </div>

        <span>
          <h4 className="pText">Hello there, I'm Anshul Sharma a <span id="paratext">front-end developer.</span>Over the</h4>
          </span>
        <span>
          <h4 className="pText">past few years, I have developed websites, and in that time, I have</h4>
          </span>
        <span>
          <h4 className="pText">discovered a lot about both web development and myself. I'm</h4>
          </span>
        <span>
          <h4 className="pText">eager to put what I've learned into practice with you and make a</h4>
          </span>
        <span>
          <h4 className="pText"> significant impact on the digital landscape.</h4>
          </span>
       
      </div>
    </div>
  );
};

export default About;
