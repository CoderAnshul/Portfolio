import React , {useEffect} from "react";
import "./Footer.css";
import image from "../../Images/hero-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import gsap from 'gsap';

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// import Timer from '../Timer';

const Footer = () => {

      useEffect(() => {
        var tl = gsap.timeline();
        tl.fromTo(" .footer-container h2",
        {
          y:100,
          opacity:0,
        },
        {
          y:0,
          duration:1.2,
          opacity:1,
          duration:1,
          stagger:0.2,
          scrollTrigger:{
            trigger: " .footer-container h2",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 50%",
            scrub:3
          }
        })
        tl.fromTo(" .footer-container-two .left .footerIcon",
        {
          y:100,
          opacity:0,
        },
        {
          y:0,
          duration:1.2,
          opacity:0.8,
          duration:0.8,
          stagger:0.1,
          scrollTrigger:{
            trigger: " .footer-container-two .left  .footerIcon",
            scroller:"body",
            // markers:true,
            start:"top 120%",
            end:"top 100%",
            scrub:5
          }
        })
        tl.fromTo(" .footer-container-two .center",
        {
          y:100,
          opacity:0,
        },
        {
          y:0,
          duration:1.2,
          skew:0,
          opacity:1,
          duration:0.8,
          stagger:0.1,
          scrollTrigger:{
            trigger: " .footer-container-two .center",
            scroller:"body",
            // markers:true,
            start:"top 120%",
            end:"top 100%",
            scrub:3
          }
        })
        tl.fromTo(" .footer-container-two .right",
        {
          y:100,
          opacity:0,
        },
        {
          y:0,
          duration:1.2,
          skew:0,
          opacity:1,
          duration:0.8,
          stagger:0.1,
          scrollTrigger:{
            trigger: " .footer-container-two .center",
            scroller:"body",
            // markers:true,
            start:"top 120%",
            end:"top 100%",
            scrub:3
          }
        })
        tl.fromTo(" .footer .footer-container-three",
        {
          y:100,
          opacity:0,
        },
        {
          y:0,
          duration:1.2,
          skew:0,
          opacity:1,
          duration:0.8,
          stagger:0.1,
          scrollTrigger:{
            trigger: ".footer .footer-container-three",
            scroller:"body",
            // markers:true,
            start:"top 120%",
            end:"top 100%",
            scrub:3
          }
        })
        


      })


  return (
    <div id="Contact" className="footer">
      {/* <img src={image} alt="" /> */}

      <div className="footerBG">
        <span className="footer-container">
          <h2>
            Let's turn your <span>idea's</span>
          </h2>
        </span>
        <span className="footer-container">
          <h2>
            into <span>reality</span>
          </h2>
        </span>
      </div>

      <div className="footer-container-two">
        <div className="left">
          <a target="_blank" 
          href="https://www.instagram.com/_anshul_sharma_?igsh=MWRueW91NW81dWRsMA==">
            <FontAwesomeIcon className="footerIcon" icon={faInstagram} />
          </a>


          <a
            target="_blank"
            href="https://www.linkedin.com/in/anshul-sharma-6132a6205/"
          >
            <FontAwesomeIcon className="footerIcon" icon={faLinkedinIn} />
          </a>


          <a target="_blank"
           href="https://github.com/CoderAnshul">
            <FontAwesomeIcon className="footerIcon" icon={faGithub} />
          </a>
        </div>
        <div className="center">
          <img src={image} alt="" />
        </div>
        <div className="right">
          <div className="locationBox">


            <div className="boxLeft">
              <h4>
                Gwalior, India
              </h4>
            </div>
            <div className="boxRight">location</div>
          </div>



          <div className="emailBox">
            <div className="boxLeft">anshul.sharma6163@gmail.com</div>
            <div className="boxRight">email</div>
          </div>
        </div>
      </div>

      <div className="footer-container-three">
        <h4>All rights reserved || designed by : anshul sharma</h4>
      </div>
    </div>
  );
};

export default Footer;
