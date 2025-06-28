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
                <Link href="">
                    <FaLinkedin size={34} className="https://www.linkedin.com/company/engineering-physics-week" />
                </Link>
                <Link href="">
                    <FaInstagram size={34} className="https://www.instagram.com/epwits" />
                </Link>
                <Link href="">
                    <FaTiktok size={34} className="https://www.tiktok.com/@epw.its?_t=ZS-8xUhKXWlKzK&_r=1" />
                </Link>
            </div>
            <Typography.Poppins level={9} size="base" className="copyright">©2025 Engineering Physics Week. All Right Reserved</Typography.Poppins>
        </>
    )
}
