import Link from "next/link"
import Typography from "@/components/Typography"
import { FaLinkedin,FaInstagram, FaTiktok} from "react-icons/fa6"

export default function Footerhidden() {
    return (
        <>
            <div className="content-hidden">
                <Link className="list-1" href="/">
                    <Typography.Poppins level={6} size="sm">Home</Typography.Poppins>
                </Link>
                <Link className="list-2" href="/about">
                    <Typography.Poppins level={6} size="sm">About</Typography.Poppins>
                </Link>
                <Link className="list-3" href="/event">
                    <Typography.Poppins level={6} size="sm">Event</Typography.Poppins>
                </Link>
                <Link className="list-4" href="https://epwits.up.railway.app/findyourteam">
                    <Typography.Poppins level={6} size="sm">Announcement</Typography.Poppins>
                </Link>
            </div>
            <div className="footer-social">
                <Link href="https://www.linkedin.com/company/engineering-physics-week">
                    <FaLinkedin size={34} className="" />
                </Link>
                <Link href="https://www.instagram.com/epwits">
                    <FaInstagram size={34} className="" />
                </Link>
                <Link href="https://www.tiktok.com/@epw.its?_t=ZS-8xUhKXWlKzK&_r=1">
                    <FaTiktok size={34} className="" />
                </Link>
            </div>
            <Typography.Poppins level={9} size="base" className="copyright">©2025 Engineering Physics Week. All Right Reserved</Typography.Poppins>
        </>
    )
}
