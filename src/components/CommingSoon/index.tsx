"use client"
import ParticlesBackground from "@/utilities/particlebg/particlebackground";
import Image from "next/image";
import Typography from "../Typography";
import Button from "../Button";
import { FaHome, FaInstagram } from "react-icons/fa";
export default function ComingSoon() {
  const handleClick = () => {
    window.location.href = ('/')
  }
  const handleClick2 = () => {
    window.location.href = ('https://www.instagram.com/epwits')
  }
  return (
    <div className="h-screen w-full bg-gradient-to-b from-primary-400  to-primary-100 ">
      <ParticlesBackground />
      <section className="flex justify-center md:items-start md:px-52 md:mx-auto flex-col w-full h-full gap-5 md:gap-10 px-5">
        <Typography.Sirukota level={7} className="text-white md:text-8xl">COMING SOON!</Typography.Sirukota>
        <Typography.Steelfish level={8} className="text-white md:text-5xl">We Are Sorry that our website is currently under development. Soon, you will experience our new contents and features.</Typography.Steelfish>
        <div className="flex flex-col md:flex-row   md:justify-start  gap-3 md:gap-5 z-30">
          <Button.Primary type="default" suffix={<FaHome size={20} />} className="flex  " onClick={handleClick}>Go Home</Button.Primary>
          <Button.Primary type="outline" suffix={<FaInstagram size={20} />} className="flex" onClick={handleClick2}>Instagram</Button.Primary>
        </div>
      </section>
    </div>
  )
}