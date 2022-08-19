import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  useEffect(() => {
    console.log(router.asPath);
  }, [router]);
  const link2 = useRef();

  return (
    <header id="#" className="top-0 z-50 shadow-sm sticky">
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite.com/">
          <Image
            alt="Flowbite logo"
            height="32"
            src="https://flowbite.com/docs/images/logo.svg"
            width="32"
          />
          <span className="self-center whitespace-nowrap pl-3 text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex space-x-1 md:order-2">
          <Navbar.Toggle />
          <DarkThemeToggle />
        </div>
        <Navbar.Collapse>
          <Link href="/" passHref>
            <a
              className={`navbar-link ${
                router.pathname === "/" && "navbar-link-active"
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/about" passHref>
            <a className={`navbar-link ${
                router.pathname === "/about" && "navbar-link-active"
              }`}>About</a>
          </Link>
          <Link href="/services" passHref>
            <a className={`navbar-link ${
                router.pathname === "/services" && "navbar-link-active"
              }`}>Services</a>
          </Link>
          <Link href="/projects" passHref>
            <a className={`navbar-link ${
                router.pathname === "/projects" && "navbar-link-active"
              }`}>Projects</a>
          </Link>
          <Link href="/contact" passHref>
            <a className={`navbar-link ${
                router.pathname === "/contact" && "navbar-link-active"
              }`}>Contact</a>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
