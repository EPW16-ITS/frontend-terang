import Link from "next/link";
import Typography from "@/components/Typography";
import { FaRobot, FaBookOpen, FaHeadSideVirus, FaAtom } from "react-icons/fa6";

interface DropdownProps {
    activeLink: string;
    onClick: (href: string) => void;
    onMouseEnter: (href: string) => void;
    onMouseLeave: () => void; 
    hover: string;
}

export default function Dropdown({ activeLink, onClick, onMouseEnter, onMouseLeave, hover }: DropdownProps): React.ReactElement {
    const items = [
        { href: "/micon", label: "MICON", description: "Microcontroller Contest", icon: <FaRobot size={25} /> },
        { href: "/injection", label: "Injection", description: "Science Project and Innovation", icon: <FaBookOpen size={25} /> },
        { href: "/epc", label: "EPC", description: "Engineering Physics Challenge", icon: <FaHeadSideVirus size={25} /> },
        { href: "/ephyfest", label: "Ephyfest", description: "Big Event EPW 15", icon: <FaAtom size={25} /> }
    ];

    return (
        <div className="dropdown">
            {items.map((item) => (
                <Link href={item.href} key={item.href} onClick={() => onClick(item.href)}
                      onMouseEnter={() => onMouseEnter(item.href)}
                      onMouseLeave={onMouseLeave}>
                    <div className={`dropdown-item flex items-center gap-5 mb-3 ${activeLink === item.href ? "text-primary-400" : "text-white"}`}>
                        <div className={`${hover === item.href ? "text-primary-400" : "text-white"}`}>
                            {item.icon}
                        </div>
                        <div className="flex flex-col justify-center items-start">
                            <Typography.Poppins className={`${hover === item.href ? "text-primary-400" : "text-white"}`} size="sm" level={6}>
                                {item.label}
                            </Typography.Poppins>
                            <Typography.Poppins className={`${hover === item.href ? "text-primary-400" : "text-white"}`} size="sm" level={8}>
                                {item.description}
                            </Typography.Poppins>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
