import React,{useEffect} from 'react'
import "./Project.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import project1 from "../../Images/Group-1.png"
import project2 from "../../Images/Group-2.png"
import project3 from "../../Images/Group-3.png"
import project4 from "../../Images/Group-4.png"
import project5 from "../../Images/Group-5.png"

gsap.registerPlugin(ScrollTrigger);

const Project = () => {

    useEffect(() => {
        var tl = gsap.timeline();

        

        


        tl.fromTo(" .projectHeading h2",
        {
          y:100,
          opacity:0
        },
        {
          y:0,
          duration:0.5,
          opacity:1,
          stagger:0.3,
          scrollTrigger: {
            trigger: " .projectHeading h2",
            scroller:"body",
            // markers:true,
            start:"top 100%",
            end:"top 85%",
            scrub:3
          }
        })

        gsap.fromTo(".container-one",
        {
            y:100,
            opacity:0
        },
        {
            y:0,
          duration:0.5,
          opacity:1,
          stagger:0.3,
          scrollTrigger: {
            trigger: " .container-one",
            scroller:"body",
            // markers:true,
            start:"top 102%",
            end:"top 95%",
            scrub:3
          }
        })
        gsap.fromTo(".containerPart-two",
        {
            y:100,
            opacity:0
        },
        {
            y:0,
          duration:0.5,
          opacity:1,
          stagger:0.3,
          scrollTrigger: {
            trigger: " .containerPart-two",
            scroller:"body",
            // markers:true,
            start:"top 102%",
            end:"top 95%",
            scrub:3
          }
        })
        gsap.fromTo(".containerPart-three",
        {
            y:100,
            opacity:0
        },
        {
            y:0,
          duration:0.5,
          opacity:1,
          stagger:0.5,
          scrollTrigger: {
            trigger: " .containerPart-three",
            scroller:"body",
            // markers:true,
            start:"top 98%",
            end:"top 95%",
            scrub:3
          }
        })
    })

  return (
    <div id='Project' className='Project'>

        <div className="projectHeading">
            <h2>Projects</h2>
        </div>

        {/* -------- Project containers --------- */}


        
        <div className="container-one">
            <div id='img-container' className="img-container">
                <a target='_blank' href="https://coderanshul.github.io/Duo-Studio-clone/"><img src={project1} alt="" /></a> 
            </div>

            <div className="img-info">

                <div className="tech">
                    <div className="year"><h4>2023</h4></div>
                    <div className="img-tech">
                        <h4>HTML • CSS • JavaScript</h4>
                    </div>
                </div>

                <div className="img-name">
                    <h4>DUO STUDIO CLONE</h4>
                </div>

                <div className="imgAbout">
                    <h4>Frontend Development</h4>
                </div>

            </div>
        </div>


        <div  className="containerPart-two">

            <div className="container-two">
                <div id='img-container' className="img-container2">
                    <a target='_blank' href="https://coderanshul.github.io/Sundown/"><img src={project2} alt="" /></a>
                </div>

                <div className="img-info2">
                <div className="tech2">
                        <div className="year2"><h4>2023</h4></div>
                        <div className="img-tech2">
                            <h4>HTML • CSS • JavaScript</h4>
                        </div>
                    </div>

                    <div className="img-name2">
                        <h4>SUNDOWN STUDIO</h4>
                    </div>

                    <div className="imgAbout2">
                        <h4>Frontend Development</h4>
                    </div>
                </div>
            </div>

            <div className="container-three">

                <div className="img-container3">
                    <a target='_blank' href="https://coderanshul.github.io/Red-Store/"><img src={project3} alt="" /></a>
                </div>

                <div className="img-info3">
            <div className="tech3">
                        <div className="year3"><h4>2023</h4></div>
                        <div className="img-tech3">
                            <h4>HTML • CSS • JavaScript • figma</h4>
                        </div>
                    </div>

                    <div className="img-name3">
                        <h4>RED STORE</h4>
                    </div>

                    <div className="imgAbout3">
                        <h4>Web Design • Frontend Development</h4>
                    </div>
            </div>
            </div>

        </div>

        <div className="containerPart-three">

            <div className="container-four">
                <div id='img-container' className="img-container4">
                    <a target='_blank' href="https://coderanshul.github.io/REJOUICE/"><img src={project4} alt="" /></a>
                </div>

                <div className="img-info4">
                <div className="tech4">
                        <div className="year4"><h4>2023</h4></div>
                        <div className="img-tech4">
                            <h4>HTML • CSS • JavaScript </h4>
                        </div>
                    </div>

                    <div className="img-name4">
                        <h4>THE VENTURE AGENCY</h4>
                    </div>

                    <div className="imgAbout4">
                        <h4>Frontend Development</h4>
                    </div>
                </div>
            </div>

            <div className="container-five">
                <div id='img-container' className="img-container5"><a target='_blank' href="https://coderanshul.github.io/Text-Summarizer/"><img src={project5} alt="" /></a></div>

                <div className="img-info5">
                <div className="tech5">
                        <div className="year5"><h4>2023</h4></div>
                        <div className="img-tech5">
                            <h4>HTML • CSS • JavaScript • figma</h4>
                        </div>
                    </div>

                    <div className="img-name5">
                        <h4>TEXT - SUMMARIZER</h4>
                    </div>

                    <div className="imgAbout5">
                        <h4>Web Design • Frontend Development</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project