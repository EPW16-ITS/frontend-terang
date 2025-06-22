import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/Typography";
import CloseIconButton from "@/components/Button/Close";
import Button from "@/components/Button";
import { NavbarProps } from "@/types/components/Navbar";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"; // Tambahkan import icon yang diperlukan

interface MenuHiddenProps extends NavbarProps {
  onClose: () => void;
}

export default function MenuHidden({
  className,
  onClose,
}: MenuHiddenProps): React.ReactElement {
  const handleExternalLinkClick = (path: string) => {
    window.location.href = path;
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[300px] bg-primary-300 z-50 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${className}`}
    >
      {/* Kontainer atas: Logo + Link Navigasi */}
      <div>
        {/* Tombol Close */}
        <CloseIconButton onClick={onClose} className="absolute top-4 right-4" />

        {/* Logo */}
        <div className="navbar-logo flex flex-col items-center mt-10">
          <Image
            src="/components/Navbar Logo.svg"
            alt="logo"
            width={154}
            height={93}
          />
        </div>

        {/* Link Navigasi */}
        <div className="mt-8 flex flex-col items-center gap-6 text-white">
          <Link href="/" onClick={onClose}>
            <Typography.Poppins level={7} size="sm">
              Home
            </Typography.Poppins>
          </Link>
          <Link href="/about" onClick={onClose}>
            <Typography.Poppins level={7} size="sm">
              About
            </Typography.Poppins>
          </Link>
          <Link href="/event" onClick={onClose}>
            <Typography.Poppins level={7} size="sm">
              Event
            </Typography.Poppins>
          </Link>
          <Link href="/register" onClick={onClose}>
            <Typography.Poppins level={7} size="sm">
              Announcement
            </Typography.Poppins>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-primary-400 w-full px-4 py-6 flex flex-col items-center gap-3 text-white">
        <div className="footer-social flex gap-6">
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin size={26} />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram size={26} />
          </Link>
          <Link href="https://tiktok.com" target="_blank">
            <FaTiktok size={26} />
          </Link>
        </div>
        <Typography.Poppins
          level={10}
          size="sm"
          className="copyright text-center"
        >
          ©2025 Engineering Physics Week. All Rights Reserved
        </Typography.Poppins>
      </div>
    </div>
  );
}
