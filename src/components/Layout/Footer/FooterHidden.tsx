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
                <Link className="list-3" href="/login">
                    <Typography.Poppins level={6} size="sm">Login</Typography.Poppins>
                </Link>
                <Link className="list-4" href="/login">
                    <Typography.Poppins level={6} size="sm">Register</Typography.Poppins>
                </Link>
            </div>
            <div className="footer-social">
                <Link href="">
                    <FaLinkedin size={34} className="" />
                </Link>
                <Link href="">
                    <FaInstagram size={34} className="" />
                </Link>
                <Link href="">
                    <FaTiktok size={34} className="" />
                </Link>
            </div>
            <Typography.Poppins level={9} size="base" className="copyright">©2025 Engineering Physics Week. All Right Reserved</Typography.Poppins>
        </>
    )
}
