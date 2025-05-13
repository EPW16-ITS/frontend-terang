"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import MenuHidden from "./Menu-hidden";
import Dropdown from "./Dropdown";


interface NavbarProps {
    className?: string;
    href?: string;
    
}
export default function NavbarItem({className,href}:NavbarProps): React.ReactElement {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string>("");
    const [hover, setHover] = useState<string>("");
    // Toggle menu
    const handleMenuToggle = () => setIsMenuOpen(prev => !prev);

    // Handle click for external navigation links
    const handleExternalLinkClick = (path: string) => {
        window.location.href = path;
    };

    // Handle click for internal links
    const handleLinkClick = (href: string) => setActiveLink(href);

    // Handle hover for dropdown
    const handleMouseOut = (href: string) => setHover(href);
    const handleMouseEnter = (href: string) => setHover(href);
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
            setIsDropdownOpen(false); // Reset dropdown when menu is closed
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className={`Navbar ${isMenuOpen ? "hidden-nav" : "open"}`}>
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

                {/* Navigation Links */}
                <div className={`Menu ${isMenuOpen ? "link-hidden" : ""}`}>
                    <div className="link">
                        <NavLink
                            href="/"
                            label="Home"
                            isActive={activeLink === "/"}
                            onClick={() => handleLinkClick("/")}
                            
                        />
                        <NavLink
                            href="/about"
                            label="About"
                            isActive={activeLink === "/about"}
                            onClick={() => handleLinkClick("/about")}
                        />
                        <NavLink
                            href="/event"
                            label="Event"
                            isActive={activeLink === "/event"}
                            onClick={() => handleLinkClick("/event")}
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="button">
                    <Button.Secondary type="outline" size="base" onClick={() => handleExternalLinkClick('/register')}>
                        <Typography.Poppins size="sm" level={6}>Announcement</Typography.Poppins>
                    </Button.Secondary>
                </div>
            </nav>

            {/* Hidden Menu for Mobile */}
            {isMenuOpen && <MenuHidden onClose={handleMenuToggle} />}
        </>
    );
}

// Helper component for navigation links
function NavLink({ href, label, isActive, onClick }: { href: string, label: string, isActive: boolean, onClick: () => void }) {
    const [hover, setHover] = useState<string>("");

    const handleMouseEnter = () => setHover(href);
    const handleMouseLeave = () => setHover("");
    return (
        <Link href={href} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} className={` ${isActive ? "text-primary-400" : "text-white"}`} onClick={onClick}>
            <Typography.Poppins level={6} size="sm" className="mt-1">{label}</Typography.Poppins>
        </Link>
    );
}
