"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import MenuHidden from "./Menu-hidden";

interface NavbarProps {
  className?: string;
  href?: string;
}

export default function NavbarItem({ className, href }: NavbarProps): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Toggle menu
  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  // External link for announcement button
  const handleExternalLinkClick = (path: string) => {
    window.location.href = path;
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`Navbar ${isMenuOpen ? "hidden-nav" : "open"} bg-secondary-25`}>
        {/* Logo */}
        <div className="Navbar-logo">
          <Image src="/components/Logo.svg" alt="logo" width={60} height={60} />
          <Image src="/components/LOGO NEEW.svg" alt="logo-caption" width={50} height={50} />
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={handleMenuToggle}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>

        {/* Navigation Links fixed center */}
        <div
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 Menu ${
            isMenuOpen ? "link-hidden" : ""
          }`}
        >
          <div className="link flex gap-6">
            <NavLink href="/" label="Home" isActive={pathname === "/"} />
            <NavLink href="/about" label="About" isActive={pathname === "/about"} />
            <NavLink href="/event" label="Event" isActive={pathname === "/event"} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="button group min-w-[140px] hover:fill-third-200">
          <Button.Secondary
            type="outline"
            size="base"
            onClick={() => handleExternalLinkClick("/register")}
          >
            <Typography.Poppins
              size="sm"
              level={6}
              className="transition-all duration-300 font-normal group-hover:font-bold text-center w-full"
              style={{ whiteSpace: "nowrap" }}
            >
              Announcement
            </Typography.Poppins>
          </Button.Secondary>
        </div>
      </nav>

      {/* Hidden Menu for Mobile */}
      {isMenuOpen && <MenuHidden onClose={handleMenuToggle} />}
    </>
  );
}

// Helper component for navigation links
function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      className={`transition-all duration-300 px-4 py-1 rounded-full ${
        isActive
          ? "bg-primary-25 text-white"
          : hover
          ? "text-third-100"
          : "text-white"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Typography.Poppins level={6} size="sm" className="mt-1">
        {label}
      </Typography.Poppins>
    </Link>
  );
}
