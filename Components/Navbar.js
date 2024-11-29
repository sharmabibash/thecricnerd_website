"use client";
import Link from "next/link";
import gsap from 'gsap';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen && screen.width <= 1024) {
      gsap.to(".Navbar", {
        x: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    } else if (!isOpen && screen.width <= 1024) {
      gsap.to(".Navbar", {
        x: "400px",
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="flex h-20 w-full items-center justify-between px-4 md:px-6 bg-[#2e3192]">
        <a
          className="mr-6 flex items-center justify-between bg-0/50 rounded-full"
          href="/"
        >
          <img
            src="/Images/Logo/The Cricket Nerd.png"
            alt="Logo"
            width={75}
            height={75}
            className="bg-white rounded-[50%]"
          /><span className="text-white ml-2 font-bold text-[18px]">The Cricket Nerd</span>
        </a>
        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  h-10 w-10 lg:hidden"
          data-state={isOpen ? "open" : "closed"}
          onClick={toggleMenu}
        >
          {isOpen ? <i className='bx bx-x text-5xl text-white' ></i> : <i className='bx bx-menu-alt-right text-4xl text-white'></i>}
        </button>
        <nav className={`Navbar ${isOpen ? 'Active' : ''}`}>
          <ul className="flex flex-col list-none justify-center lg:flex-row lg:gap-9">
            <li>
              <Link href="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link href="/News" onClick={closeMenu}>News</Link>
            </li>
            <li>
              <Link href="/Matches" onClick={closeMenu}>Matches</Link>
            </li>
            <li>
              <Link href="/Videos" onClick={closeMenu}>Videos</Link>
            </li>
            <li>
              <Link href="/Statistics" onClick={closeMenu}>Players</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
