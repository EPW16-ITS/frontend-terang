import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/Typography";
import CloseIconButton from "@/components/Button/Close";
import Button from "@/components/Button"; // Pastikan Secondary benar-benar diekspor dari sini
import { NavbarProps } from "@/types/components/Navbar";
import { FaRegTimesCircle } from "react-icons/fa";

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
      className={`fixed top-0 left-0 h-full w-[300px] bg-[#1F0C49CC] z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${className}`}
    >
      {/* Tombol Close */}
      <CloseIconButton
  onClick={onClose}
  className="absolute top-4 right-4"
/>

      {/* Logo */}
      <div className="navbar-logo flex flex-col items-center mt-10">
        <Image src="/components/Navbar Logo.svg" alt="logo" width={154} height={93} />
      </div>

      {/* Link Navigasi + Button Announcement */}
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
  );
}
