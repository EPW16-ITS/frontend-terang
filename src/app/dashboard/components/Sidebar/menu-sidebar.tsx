"use client";
import Typography from "../../../../components/Typography";
import {
  FaBookReader,
  FaBrain,
  FaChevronRight,
  FaChevronDown,
  FaMicrochip,
  FaReact,
} from "react-icons/fa";
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import { registrationStatusAtom } from "@/stores/atom";
import { useAtom } from "jotai";
import { useState } from "react";
interface DropdownItem {
  name: string;
  href: string;
}

interface LinkItem {
  name?: string;
  names?: string;
  href?: string;
  icons?: JSX.Element;
  iconss?: JSX.Element;
  dropdown?: DropdownItem[];
}

export default function MenuSidebar({
  onClose,
}: {
  onClose: () => void;
}) {

  const [registrationStatus] = useAtom(registrationStatusAtom);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const handleDropdownToggle = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const links: LinkItem[] = [
    {
      names: "Dashboard",
      href: "/dashboard/users",
      iconss: <FaHouse size={30} />,
    },
    {
      name: "Injection",
      icons: <FaBookReader size={30} />,
      dropdown: [
        {
          name: "Informasi Pendaftaran",
          href: "/injection",
        },
        {
          name: registrationStatus.injection ? "Status Pendaftaran" : "Registrasi",
          href: registrationStatus.injection
            ? "/dashboard/users/status-injection"
            : "/dashboard/users/registration-injection",
        },
      ],
    },
    {
      name: "EPC",
      icons: <FaBrain size={30} />,
      dropdown: [
        {
          name: "Informasi Pendaftaran",
          href: "/epc",
        },
        {
          name: registrationStatus.epc ? "Status Pendaftaran" : "Registrasi",
          href: registrationStatus.epc
            ? "/dashboard/users/status-epc"
            : "/dashboard/users/registration-epc",
        },
      ],
    },
    {
      name: "Micon",
      icons: <FaMicrochip size={30} />,
      dropdown: [
        {
          name: "Informasi Pendaftaran",
          href: "/micon",
        },
        {
          name: registrationStatus.micon ? "Status Pendaftaran" : "Registrasi",
          href: registrationStatus.micon
            ? "/dashboard/users/status-micon"
            : "/dashboard/users/registration-micon",
        },
      ],
    },
    {
      name: "Ephyfest",
      icons: <FaReact size={30} />,
      dropdown: [
        {
          name: "Informasi Pendaftaran",
          href: "/ephyfest",
        },
        {
          name: registrationStatus.ephyfest ? "Status Pendaftaran" : "Registrasi",
          href: registrationStatus.ephyfest
            ? "/dashboard/users/status-ephyfest"
            : "/dashboard/users/registration-ephyfest",
        },
      ],
    },
  ];

  return (
    <div>
      {links.map(({ name, href, icons, dropdown, iconss, names }) => (
        <ul key={name || names} className="mb-4">
          <li
            className={`flex flex-row justify-between items-center p-5 rounded-xl text-white hover:text-primary-400 hover:bg-primary-100 transition-all duration-300`}
            onClick={() => dropdown && handleDropdownToggle(name || names!)}
          >
            {href && !dropdown ? (
              <Link
                href={href}
                className="flex flex-row-reverse items-center gap-8"
                onClick={onClose}
              >
                {names || name}
                {iconss || icons}
              </Link>
            ) : (
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex items-center gap-8">
                  {icons}
                  <Typography.Poppins size="sm" className="" level={8}>
                    {name}
                  </Typography.Poppins>
                </div>
                {dropdown && (
                  <div>
                    {activeDropdown === (name || names) ? (
                      <FaChevronDown size={20} />
                    ) : (
                      <FaChevronRight size={20} />
                    )}
                  </div>
                )}
              </div>
            )}
          </li>
          {activeDropdown === (name || names) && dropdown && (
            <ul className="ml-2 mt-5 space-y-5">
              {dropdown.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} onClick={onClose} className="text-white">
                    <Typography.Poppins level={8} size="sm">
                      {item.name}
                    </Typography.Poppins>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </ul>
      ))}
    </div>
  );
}
