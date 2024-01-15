import React, {useEffect} from "react";
import "./Skills.css";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(".skills .skillHeading h2",
    {
      y:100,
      opacity:0
    },
    {
      y:0,
      duration:0.5,
      opacity:1,
      stagger:0.1,
      scrollTrigger: {
        trigger: ".skills .skillHeading h2",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 70%",
        scrub:3
      }
    })

    tl.fromTo(".skillContainer-one .left h2",
    {
        x:-100,
        opacity:0
    },
    {
        x:0,
      duration:0.5,
      opacity:1,
      stagger:0.1,
      scrollTrigger: {
        trigger: ".skillContainer-one .left h2",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 70%",
        scrub:3
      }
    })
    tl.fromTo(".skillContainer-one .left p",
    {
        x:-100,
        opacity:0
    },
    {
        x:0,
      duration:0.5,
      opacity:1.1,
      stagger:0.1,
      scrollTrigger: {
        trigger: ".skillContainer-one .left p",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 70%",
        scrub:3
      }
    })


    tl.fromTo(".skillContainer-one .right h1",
    {
        x:-100,
        opacity:0
    },
    {
        x:0,
      duration:0.5,
      opacity:1.1,
      stagger:0.1,
      scrollTrigger: {
        trigger: ".skillContainer-one .right h1",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 70%",
        scrub:3
      }
    })


// ------------------ skill container two animation----------------



    tl.fromTo(".skillContainer-two .left h2",
    {
        x:-100,
        opacity:0
    },
    {
        x:0,
    duration:0.5,
    opacity:1.1,
    stagger:0.1,
    scrollTrigger: {
        trigger: ".skillContainer-two .left h2",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 70%",
        scrub:3
    }
    })


    tl.fromTo(".skillContainer-two .left p",
    {
        x:-100,
        opacity:0
    },
    {
        x:0,
      duration:0.5,
      opacity:1.1,
      stagger:0.1,
      scrollTrigger: {
        trigger: ".skillContainer-two .left p",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 70%",
        scrub:3
      }
    })

    

    tl.fromTo(".skillContainer-two .right h1",
    {
        x:-100,
        opacity:0
    },
    {
        x:0,
      duration:0.5,
      opacity:1.1,
      stagger:0.1,
      scrollTrigger: {
        trigger: ".skillContainer-two .right h1",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 70%",
        scrub:3
      }
    })
    
 
  })


  return (
    <div id="Skills" className="skills">
      <div className="skillHeading">
        {/* <h2>s</h2>
        <h2>k</h2>
        <h2>i</h2>
        <h2>l</h2>
        <h2>l</h2>
        <h2>s</h2> */}
        <h2>skills</h2>
      </div>

      <div className="skillContainer">

        <div className="skillContainer-one">
          <div className="left">
            <h2>my experties.</h2>
            <p>I concentrate on everything web and design related. My aim is to provide everyone with an inspiring and uplifted digital experience with each of my services.</p>
          </div>
          <div className="right">
            <h1>Web Development</h1>
            <h1>Web Design</h1>
            <h1>Wireframing</h1>
            <h1>UI/UX Design</h1>
          </div>
        </div>
        
        <div className="skillContainer-two">
          <div className="left">
            <h2>my digital tool box.</h2>
            <p>My tech stack . I'm constantly curious to learn more about the technologies I use now and new ones that might broaden my horizons.</p>
          </div>
          <div className="right">
            <h1> HTML  CSS  JS  C  C++  Java  Python  Bootstarp  Tailwind  React  figma  gsap</h1>
            
            
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Skills;
