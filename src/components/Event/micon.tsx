import React from "react";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const Micon = () => {
  return (
    // Main Content Section
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#39488E] from-0% to-[#101428] to-50%">
      <Typography.CrystalUniverseRegular
        level={9}
        className="z-40 text-third-50 text-right"
      >
        Microcontroller
      </Typography.CrystalUniverseRegular>
      <Typography.Homica
        level={2}
        className="z-40 text-third-50 text-right"
      >
        Contest
      </Typography.Homica>
    </section>
  );
};

export default Micon;
