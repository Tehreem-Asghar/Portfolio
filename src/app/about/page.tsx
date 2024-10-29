'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import React from "react";
import Image from "next/image";
import '../../../public/style/about.css'
import Skills from "@/components/skills";


function About() {

  useEffect(()=>{
    AOS.init({
      duration :1000
    });
  },[])

  return (
    <main className="about">
      <h1>About Me</h1>
         <section className="aboutSec">
           <div className="imageSection"  data-aos="zoom-in-right" >
        <Image src={'/image/tehreem.jpg'}  height={250} width={250} alt='Tehreem' className="aboutImage"/>
        </div>
         <div className="textSection"   data-aos="zoom-in-left">
           <p className="para">
            Hello! I&apos;m Tehreem Asghar, a full stack developer from new
            Karachi, Pakistan. My journey into tech began while I was preparing
            for my second-year exams, when I learned about a test being held for
            admission to a new AI and tech-focused university at the Governor
            House. Out of 500,000 students who took the test, only 50,000 were
            selected—Alhamdulillah, I was one of them.
          </p>
          <p className="mt-4">
            While the university was being set up, I started learning HTML, CSS,
            and JavaScript. Once classes began, I trained in TypeScript. After
            completing the initial assignments and passing the interview, I
            earned the title of senior student. Currently, I am studying Next.js
            and also pursuing my BA through private exams, focusing on both my
            education and skills.
          </p>
        </div>
       </section>
      <section >

        <h2 className="mySkill">My Skills</h2>
      <Skills/>
      </section>

    </main>
  );
}

export default About;