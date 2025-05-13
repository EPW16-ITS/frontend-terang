
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

interface SideBarProps {
    onClick: () => void;
    style?: React.CSSProperties;
}

export default function SidebarMobile({ onClick }: SideBarProps): React.ReactElement {


    return (
        <div className="sidebarMobile ">
            <FaRegUserCircle size={30} color="white" />
            <FaBars size={30} color="white" onClick={onClick} />
        </div>
    )
}

