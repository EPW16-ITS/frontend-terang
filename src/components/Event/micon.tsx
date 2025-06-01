import React from "react";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const Micon = () => {
  return (
    // Main Content Section
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#39488E] to-[#101428]">
      
      {/* Judul */}
      <Typography.CrystalUniverseRegular
        level={7}
        className="z-40 text-third-50 text-right"
      >
        Microcontroller
      </Typography.CrystalUniverseRegular>

      <Typography.Homica
        level={4}
        className="z-40 text-third-50 text-right"
      >
        Contest
      </Typography.Homica>

      {/* Deskripsi */}
      <Typography.Poppins
        level={4}
        className="z-40 text-fifth-50 text-right"
      >
        MICON (Microcontroller Contest) merupakan kompetisi tahunan yang ditujukan bagi siswa/i SMA dan SMK sederajat dengan fokus pada bidang instrumentasi. Kompetisi ini menjadi wadah bagi siswa/i SMA/SMK/sederajat untuk mengembangkan pengetahuan tentang mikrokontroler.
      </Typography.Poppins>

      {/* Benefit Section */}
      <Typography.CrystalUniverseRegular
        level={5}
        className="z-40 text-third-50 text-right mt-10"
      >
        Benefit
      </Typography.CrystalUniverseRegular>

      <Typography.Poppins
        size="lg"
        level={8}
        className="z-40 text-white text-right"
      >
        Sertifikat Nasional
      </Typography.Poppins>

      <Typography.Poppins
        size="lg"
        level={8}
        className="z-40 text-white text-right"
      >
        Modul & Pelatihan
      </Typography.Poppins>

      <Typography.Poppins
        size="lg"
        level={8}
        className="z-40 text-white text-right"
      >
        Public Exhibition
      </Typography.Poppins>
      <Typography.Homica
        level={5}
        className="z-40 text-fifth-50 text-left mt-10"
      >
        TIMELINE !!
      </Typography.Homica>
      <Typography.Poppins
        size="sm"
        level={10}
        className="z-40 text-white text-left"
      >
        7 Juli - 19 Juli 2025
        Pendaftaran Batch I
      </Typography.Poppins>
      <Typography.Poppins
        size="sm"
        level={10}
        className="z-40 text-white text-left"
      >
        21 Juli - 2 Agustus 2025
        Pendaftaran Batch II
      </Typography.Poppins>
      <Typography.Poppins
        size="sm"
        level={10}
        className="z-40 text-white text-left"
      >
        4-16 Agustus 2025
        Pendaftaran Batch III
      </Typography.Poppins>
      <Typography.Poppins
        size="sm"
        level={10}
        className="z-40 text-white text-left"
      >
        17-31 Agustus 2025
        Penyisihan
      </Typography.Poppins>
      <Typography.Poppins
        size="sm"
        level={10}
        className="z-40 text-white text-left"
      >
        6 September 2025
        Semi Final
      </Typography.Poppins>
      <Typography.Poppins
        size="sm"
        level={10}
        className="z-40 text-white text-left"
      >
        24 September 2025
        Pengumuman Finalis
      </Typography.Poppins>
      <Typography.Poppins
        size="sm"
        level={10}
        className="z-40 text-white text-left"
      >
        25 Oktober 2025
        Final
      </Typography.Poppins>
    </section>
  );
};

export default Micon;
