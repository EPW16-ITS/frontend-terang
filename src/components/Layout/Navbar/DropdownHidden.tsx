import Link from "next/link"
import { FaRobot, FaBookOpen, FaHeadSideVirus, FaAtom } from "react-icons/fa6"
import Typography from "@/components/Typography"
import { NavbarProps } from "@/types/components/Navbar"

interface DropdownHiddenProps extends NavbarProps {
    onClose: () => void;
}
export default function DropdownHidden({onClose}:DropdownHiddenProps):React.ReactElement {
    return (
        <div className="dropdown-hidden">
            <Link href="/micon" onClick={onClose}>
                <div className="items-1-hidden">
                    <FaRobot size={25} />
                    <Typography.Poppins className="" size="sm" level={8}>MICON</Typography.Poppins>
                </div>
            </Link>
            <Link href="/injection" onClick={onClose}>
                <div className="items-2-hidden">
                    <FaBookOpen size={25} />
                    <Typography.Poppins className="" size="sm" level={8}>Injection</Typography.Poppins>
                </div>
            </Link>
            <Link href="/epc" onClick={onClose}>
                <div className="items-3-hidden" >
                    <FaHeadSideVirus size={25} />
                    <Typography.Poppins className="" size="sm" level={8}>EPC</Typography.Poppins>
                </div>
            </Link>
            <Link href="/ephyfest" onClick={onClose}>
                <div className="items-4-hidden">
                    <FaAtom size={25} />
                    <Typography.Poppins className="" size="sm" level={8}>Ephyfest</Typography.Poppins>
                </div>
            </Link>

        </div>
    )
}