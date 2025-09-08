import Typography from "@/components/Typography";
import Image from "next/image";

export default function FooterSponsors() {
  return (
    <div className="flex flex-col items-center justify-center bg-primary-300">
        <Typography.Poppins className="mt-10 mb-14 text-white" level={3}>SPONSORS</Typography.Poppins>
        <div className="footer-sponsors-logos">
            <img src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/LOGO PNG.webp" alt="Sponsor PT.STANZA CITRA PERKASA" className="mb-28 h-60">
            </img>
        </div>
    </div>
    );
}