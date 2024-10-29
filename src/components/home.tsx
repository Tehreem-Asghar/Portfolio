"use client";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaTwitter ,FaEnvelope  } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import '../../public/style/home.css'

export default function Home() {
  return (
    <main className="home">
     <section className="imageSec"> 
    <Image src={'/image/tehreem.jpg'}  height={200} width={200} alt='Tehreem' className="homeImage"/>
    </section>
        <section className="textSec">
        <h3 >{`Hello, It's Me`} </h3>
        <h1>Tehreem Asghar </h1>
        <h2>
          <ReactTyped
            strings={[
              "And I'm <span class='write'>Full Stack Developer</span>",
            ]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
        </h2>
        <p>
          I am a full-stack developer passionate about solving complex problems
          with simple, effective solutions. Technology is my creative journey,
          and I am committed to making a positive impact through my work.
        </p>
        <div className="followLink">
        <Link href="https://www.linkedin.com/in/tehreem-asghar-1003772b7/" target="_blank">
              <FaLinkedin className="icon" />
            </Link>
            <Link href="https://github.com/Tehreem-Asghar" target="_blank">
              <FaGithub className="icon" />
            </Link>
            <Link href="https://x.com/Tehreem1794730?t=rtAKTdmt8QBsRD6a56XXSQ&s=08" target="_blank">
              <FaTwitter className="icon" />
            </Link>
            <Link href="mailto:tehreemmeo818@gmail.com" target='_blank'>
          <FaEnvelope className='icon' />
        </Link>
        </div>
      </section>
    </main>
  );
}
