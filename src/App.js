'use client';
import './App.css';
import React, { useEffect } from 'react'
import Hero from "./Components/Hero/Hero"
import Nav from "./Components/Header/Nav"
import About from "./Components/About/About"
import Project from './Components/Project/Project';
// import Work from './Components/Work/Work';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer'
import "../src/locomotive-scroll.css";
// import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);



function App() {

  useEffect(() => {
    var cont = document.querySelector('.App');
    var clickbtn = document.querySelector('.custom-cursor');
    // var div = document.querySelector("#img-container");

    // div.addEventListener("mouseenter",function(){
    //   clickbtn.style.width = "7vw"
    //   clickbtn.style.height = "7vw"
    //   clickbtn.style.transition = "0.2s linear"
    // })
    // div.addEventListener("mouseleave",function(){
    //   clickbtn.style.width = "20px"
    //   clickbtn.style.height = "20px"
    //   clickbtn.style.transition = "0s linear"
    // })
    
    // var crsrenter = document.querySelector("h1");
    // crsrenter.forEach(function(){
    //     cont.addEventListener("mouseenter",function(){
    //     gsap.to(clickbtn,{
    //       scale:3,
    //       color:"#EDEDED",
          
    //   })
    // })
    //   cont.addEventListener("mouseleave",function(){
    //   gsap.to(clickbtn,{
    //       scale:1,
    //   })
    // })
    //   })
    
    cont.addEventListener("mousemove",function(dets){
      clickbtn.style.left = dets.x + "px"
      clickbtn.style.top = dets.y + "px"
      // gsap.to(clickbtn,{
      //     left:dets.x,
      //     top:dets.y
      // })
    })
  }, [])



  return (
    <div className="App"  >
      <div className="custom-cursor"></div>
      <Nav  />
      <Hero  />
      <About />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

