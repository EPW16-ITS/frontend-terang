import Typography from "@/components/Typography";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6";
import Footerhidden from "./FooterHidden";

export default function FooterItem() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Image
            src="./components/Logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <div className="footer-logo-name">
            <Image
              src="./components/LOGO NEEW.svg"
              alt="logo-caption"
              width={100}
              height={100}
            />
            <Typography.Poppins level={6} size="lg">
              Engineering Physics Week
            </Typography.Poppins>
          </div>
        </div>
        <Footerhidden />
      </div>

      <div className="footer-right-content">
        <div className="footer-event">
          <Typography.Poppins level={5}>OUR EVENT</Typography.Poppins>
          <div className="footer-event-list">
            <Link href={`/injection`}>
              <Typography.Poppins level={7} size="sm">
                Injection
              </Typography.Poppins>
            </Link>
            <Link href={`/micon`}>
              <Typography.Poppins level={7} size="sm">
                MICON
              </Typography.Poppins>
            </Link>
            <Link href={`/epc`}>
              <Typography.Poppins level={7} size="sm">
                EPC
              </Typography.Poppins>
            </Link>
            <Link href={`/ephyfest`}>
              <Typography.Poppins level={7} size="sm">
                Ephyfest
              </Typography.Poppins>
            </Link>
          </div>
        </div>
        <div className="footer-menu">
          <Typography.Poppins level={5}>LINKS</Typography.Poppins>
          <div className="footer-menu-list">
            <Link className="list-1" href="/">
              <Typography.Poppins level={7} size="base">
                Home
              </Typography.Poppins>
            </Link>
            <Link className="list-2" href="/about">
              <Typography.Poppins level={7} size="base">
                About
              </Typography.Poppins>
            </Link>
            <Link className="list-4" href="/register">
              <Typography.Poppins level={7} size="base">
                Announcement
              </Typography.Poppins>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
