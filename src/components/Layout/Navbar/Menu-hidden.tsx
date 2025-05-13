import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import DropdownHidden from "./DropdownHidden";
import { NavbarProps } from "@/types/components/Navbar";
import { FaRegTimesCircle } from "react-icons/fa";

interface MenuHiddenProps extends NavbarProps {
  onClose: () => void;
}

export default function MenuHidden({
  className,
  onClose,
}: MenuHiddenProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const handleExternalLinkClick = (path: string) => {
    window.location.href = path;
  };


  return (
    <div className={`Content-Hidden ${className}`}>
      <div className="Image-Hidden">
        <Image src="./components/Logo.svg" alt="logo" width={80} height={80} />
        <Image
          src="./components/LOGO NEEW.svg"
          alt="logo-caption"
          width={100}
          height={100}
        />
      </div>
      <div className="link-hidden">
        <Link href="/" className={`link-1 ${className}`} onClick={onClose}>
          <Typography.Poppins level={7} size="sm">
            Home
          </Typography.Poppins>
        </Link>
        <Link href="/about" className={`link-2 ${className}`} onClick={onClose}>
          <Typography.Poppins level={7} size="sm">
            About
          </Typography.Poppins>
        </Link>
        <Button.Primary
          onClick={() => setIsOpen(!isOpen)}
          type="text"
          size="sm"
          className="flex"
        >
          <Typography.Poppins
            level={7}
            className={`menu-label ${className}`}
            size="sm"
          >
            Event{!isOpen ? <FaAngleDown size={10} /> : <FaAngleUp size={10} />}
          </Typography.Poppins>
          {isOpen && (
            <div className="content-dropdown-hidden">
              <DropdownHidden onClose={onClose} />
            </div>
          )}
        </Button.Primary>
      </div>
      <div className="Button-Hidden">
        <Button.Primary
          className="flex"
          fullWidth
          type="outline"
          size="base"
          onClick={() => handleExternalLinkClick("/login")}
        >
          Login
        </Button.Primary>

        <Button.Secondary
          className="flex"
          fullWidth
          type="default"
          size="base"
          onClick={() => handleExternalLinkClick("/register")}
        >
          Register
        </Button.Secondary>

        <div className="Event-Close" onClick={onClose}>
          <FaRegTimesCircle size={50} />
        </div>
      </div>
    </div>
  );
}
