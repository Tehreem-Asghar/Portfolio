'use client'
import React from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import '../../public/style/card.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const cardDetail = [
    {
      name: "E-Commerce Plan-a-Plants Website",
      imageSrc: "/image/plants.png",
      link: "https://plan-a-plants.vercel.app/",
    },
    {
      name: "Code Books Website",
      imageSrc: "/image/books.png",
      link: "https://codingbooks.vercel.app/",
    },
    {
      name: "Phones Website",
      imageSrc: "/image/phones.png",
      link: "https://e-commerce-website-milestone-03.vercel.app/",
    },
    {
      name: "Delicious Recipes Blog website",
      imageSrc: "/image/blogs.png",
      link: "https://assignment-milestone-03.vercel.app/",
    },
    {
      name: "Birthday Wish Application",
      imageSrc: "/image/birthday.png",
      link: "https://birthday-wish-application-with-next-js.vercel.app/",
    },
      
    {
        name: "Number Guessing Game",
        imageSrc: "/image/numberGuessing.png",
        link: "https://number-guessing-game-with-next-js.vercel.app/",
      },
  
      {
        name:"Weather Widget Application",
        imageSrc: "/image/weather.png",
        link: "https://weather-widget-app-tau.vercel.app/",
      },
  

      {
        name:"Countdown Timer",
        imageSrc: "/image/countdown.png",
        link: "https://countdown-timer-vert-ten.vercel.app/",
      },  
  ];




  export default function Card() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);


    return (
        <main className="projectContainer">
            {cardDetail.map((items , index) => {
                return (
                    <section key={index} className="aboutProject" data-aos="fade-down" >
                       <Image src={items.imageSrc} height={300} width={400} alt={items.name} className="projectImage"/>
                       <div className="projectText">
                        <p>{items.name}</p>
                         <span className="Icon"> <Link href={items.link}> <MdOutlineArrowOutward /> </Link> </span>
                       </div>
                    </section>
                );
            })}
        </main>
    );
}

