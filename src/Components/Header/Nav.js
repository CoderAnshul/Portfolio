import React from 'react'
import { useState ,useEffect } from 'react';
import copyright from '../../Images/copyright - 1.png'
// import image from '../../Images/nav-img.png'
// import { Link } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import "./nav.css";


gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
const[navOpen, setNavOpen]  = useState(false);


   useEffect(() => {
      gsap.fromTo(".navbar .logo , .navbar h1",
      {
         y:-100,
         opacity:0
      },
      {
         y:0,
         duration:1.6,
         opacity:1
         
      })
      gsap.fromTo(".menu-toggle",
      {
         y:-100,
         opacity:0
      },
      {
         y:0,
         duration:1.9,
         opacity:1
      })
      gsap.fromTo(".bignav #right",
      {
         stagger:0.3
      },
      {
         backgroundColor: "rgba(23,23,23)",
         boxShadow:"5px 5px 25px rgba(23,23,23,0.9)",
         duration:1,
         height:"50px",
         width:"35vw",
         scrollTrigger:{
            trigger:".bignav #right",
            scroller:"body",
            // markers:true,
            start:"top -88%",
            end:"top -88%",
            scrub:1
         }
      })
      gsap.fromTo(".bignav #left",
      {
         stagger:0.3
      },
      {
         backgroundColor: "rgba(23,23,23)",
         boxShadow:"5px 5px 25px rgba(23,23,23,0.9)",
         duration:1,
         height:"50px",
         width:"15vw",
         scrollTrigger:{
            trigger:".bignav #left",
            scroller:"body",
            // markers:true,
            start:"top -88%",
            end:"top -88%",
            scrub:1
         }
      })
      
   })

  return (
   <>
   
    <div className="nav">
         <div className="nav-container">
             <div className="navbar">
                <div className="logo"><img src={copyright} alt="logo" />
                <h1>Anshul Sharma</h1>
        </div>

                <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                     <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                        <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                        <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                     </div>
                 </div>
             </div>
             <div className="nav-overlay" 
             style={{
                top: navOpen ? "0" : "-120%",
                transitionDelay: navOpen ? "0s" : "0s",
             }}
             >
             <ul className="nav-links">
               <li className="nav-item">
                  <a href="/" onClick={() => setNavOpen(!navOpen)}
                  style={{
                     top: navOpen ? "0 ":"120px",
                     transitionDelay : navOpen ? "0.9s" : "0s"
                  }}>Home</a>
                  <div className="nav-item-wrapper"></div>




               </li>
               <li className="nav-item">
                  <a href="#About" onClick={() => setNavOpen(!navOpen)} 
                  style={{
                     top: navOpen ? "0 ":"120px",
                     transitionDelay : navOpen ? "1s" : "0s"
                  }}
                  >
                     About</a>
                  <div className="nav-item-wrapper"></div>





               </li>
               <li className="nav-item">
                  <a href="#Project" onClick={() => setNavOpen(!navOpen)}
                  style={{
                     top: navOpen ? "0 ":"120px",
                     transitionDelay : navOpen ? "1.1s" : "0s"
                  }}>Projects</a>
                  <div className="nav-item-wrapper"></div>




               </li>
               <li className="nav-item">
                  <a href="#Skills" onClick={() => setNavOpen(!navOpen)}
                  style={{
                     top: navOpen ? "0 ":"120px",
                     transitionDelay : navOpen ? "1.2s" : "0s"
                  }}>Skills</a>
                  <div className="nav-item-wrapper"></div>




               </li>
               <li className="nav-item">
                  <a href="#Contact" onClick={() => setNavOpen(!navOpen)}
                  style={{
                     top: navOpen ? "0 ":"120px",
                     transitionDelay : navOpen ? "1.3s" : "0s"
                  }}>Contact</a>
                  <div className="nav-item-wrapper"></div>




               </li>
             </ul>
             <div className="nav-footer">
               <div className="location" style={{
                  bottom:navOpen ? "0" : "-20px",
                  opacity:navOpen ? "1" : "0",
                  transitionDelay: navOpen ? "1.4s" : "0s"
               }}>
                  <span>Gwalior, India</span>
               </div>
               <div className="nav-social-media">
                  <ul>
                     <li>
                        <a href="/" style={{
                  bottom:navOpen ? "0" : "-20px",
                  opacity:navOpen ? "1" : "0",
                  transitionDelay: navOpen ? "1.5s" : "0s"
               }}>Github</a>
                     </li>


                     <li>
                        <a href="/" style={{
                  bottom:navOpen ? "0" : "-20px",
                  opacity:navOpen ? "1" : "0",
                  transitionDelay: navOpen ? "1.6s" : "0s"
               }}>LinkedIn</a>
                     </li>
                  </ul>
               </div>
             </div>
             </div>
         </div>
         
    </div>

    <div className="bignav">
            <div id="left">
               <img src={copyright} alt="copyright logo" />
               <h1>Anshul sharma</h1>
            </div>
            <div id="right">
               <a href="/"><h4>Home</h4></a>
               <a href="#Project"><h4>Work</h4></a>
               <a href="#Skills"><h4>Skills</h4></a>
               <a href="#Contact"><h4>Contact</h4></a>
            </div>
         </div>

    </>
  )
}

export default Nav