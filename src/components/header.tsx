"use client";
import React from "react";
import "../../public/style/header.css";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import { ImCross } from "react-icons/im";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menue = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* logo */}
      <Link href={"/"}>
        <Image
          src={"/image/tehreem.jpg"}
          height={40}
          width={40}
          alt="Tehreem"
          className="header-logo"
        />
      </Link>
      <nav className="navigat">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/project"}>Projects</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>

      
      {/* menue button */}
      <IoMenuSharp className={"menuebtn"} onClick={() => menue()} />
      {/* if menue button is true then show this */}
      {isOpen && (
        <main className="open">
          <ImCross className="cross" onClick={() => setIsOpen(false)} />

          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/project"}>Projects</Link>
          <Link href={"/contact"}>Contact</Link>
        </main>
      )}
    </header>
  );
}

export default Header;
