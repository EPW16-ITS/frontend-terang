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

  const isAnnouncementSelected = pathname === "/announcement";

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

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
      <nav
        className={`Navbar ${isMenuOpen ? "hidden-nav" : "open"} bg-[#1F0C49CC]
          border border-white xs:border-white sm:border-white md:border-white rounded-full fixed-center item-center xs:w-[90%] sm:w-[60%] md:w-[50%] lg:w-[55%] top-2 left-1/2 -translate-x-1/2 z-50 py-2 px-4`}
      >
        {/* Logo */}
        <div className="Navbar-logo">
          <Image src="/components/Logo.svg" alt="logo" width={40} height={40} />
          <Image src="/components/LOGO NEEW.svg" alt="logo-caption" width={35} height={35} />
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={handleMenuToggle}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>

        {/* Navigation Links */}
        <div
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 Menu ${
            isMenuOpen ? "link-hidden" : ""
          }`}
        >
          <div className="link flex gap-0">
            <NavLink href="/" label="Home" isActive={pathname === "/"} />
            <NavLink href="/about" label="About" isActive={pathname === "/about"} />
            <NavLink href="/event" label="Event" isActive={pathname === "/event"} />
          </div>
        </div>

        {/* Announcement Button */}
        <div className="button group min-w-[120px] hover:fill-third-200">
          <Button.Secondary
            type="outline"
            size="sm"
            onClick={() => handleExternalLinkClick("https://epwits.up.railway.app/findyourteam")}
            className={isAnnouncementSelected ? "selected" : ""}
          >
            <Typography.Poppins
              size="sm"
              level={8}
              className="transition-all duration-300 font-normal text-center w-full"
              style={{ whiteSpace: "nowrap" }}
            >
              Announcement
            </Typography.Poppins>
          </Button.Secondary>
        </div>
      </nav>

      {/* Hidden Menu */}
      {isMenuOpen && <MenuHidden onClose={handleMenuToggle} />}
    </>
  );
}

// ✅ NavLink with hover-bold and text hover color
function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link href={href} className="group min-w-[80px]">
      <Button.Tertiary
        type="text"
        size="sm"
        className={isActive ? "selected" : ""}
      >
        <Typography.Poppins
          level={8}
          size="sm"
          className="transition-all duration-300 font-normal text-center w-full group-hover:text-third-100"
          style={{ whiteSpace: "nowrap" }}
        >
          {label}
        </Typography.Poppins>
      </Button.Tertiary>
    </Link>
  );
}
