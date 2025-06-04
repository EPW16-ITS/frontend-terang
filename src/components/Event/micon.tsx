import React from "react";
import Typography from "@/components/Typography";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Micon = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#39488E] to-[#101428] px-6 md:px-16 py-12">

      {/* Judul */}
      <Typography.CrystalUniverseRegular
        level={7}
        className="z-40 text-third-50 text-center"
      >
        Microcontroller
      </Typography.CrystalUniverseRegular>
      <Typography.Homica
        level={4}
        className="z-40 text-third-50 text-center mb-10"
      >
        Contest
      </Typography.Homica>

      {/* Flex container untuk deskripsi dan timeline */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
        {/* Timeline */}
        <div className="md:w-1/2 w-full">
          <Typography.Homica
            level={5}
            className="z-40 text-fifth-50 text-center mb-4"
          >
            TIMELINE !!
          </Typography.Homica>
          {[
            "7 Juli - 19 Juli 2025\nPendaftaran Batch I",
            "21 Juli - 2 Agustus 2025\nPendaftaran Batch II",
            "4-16 Agustus 2025\nPendaftaran Batch III",
            "17-31 Agustus 2025\nPenyisihan",
            "6 September 2025\nSemi Final",
            "24 September 2025\nPengumuman Finalis",
            "25 Oktober 2025\nFinal"
          ].map((item, idx) => (
            <Typography.Poppins
              key={idx}
              size="sm"
              level={10}
              className="z-40 text-white text-center whitespace-pre-line"
            >
              {item}
            </Typography.Poppins>
          ))}
        </div>

        {/* Deskripsi */}
        <div className="md:w-1/2 w-full">
          <Typography.Poppins
            level={5}
            className="z-40 text-fifth-50 text-center mb-6"
          >
            MICON (Microcontroller Contest) merupakan kompetisi tahunan yang
            ditujukan bagi siswa/i SMA dan SMK sederajat dengan fokus pada
            bidang instrumentasi. Kompetisi ini menjadi wadah bagi siswa/i
            SMA/SMK/sederajat untuk mengembangkan pengetahuan tentang
            mikrokontroler.
          </Typography.Poppins>
        </div>
      </div>

      {/* Flex container: Swiper & Benefit */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Swiper Section */}
        <div className="w-full md:w-1/2">
          <Swiper
            loop={true}
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation={true}
            className="rounded-xl shadow-lg"
          >
            {["micon1.jpg", "micon2.jpg", "micon3.jpg"].map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex justify-center">
                  <Image
                    src={`https://raw.githubusercontent.com/EPW16-ITS/assets/main/${img}`}
                    alt={`Poster Micon ${idx + 1}`}
                    width={420}
                    height={240}
                    className="rounded-xl shadow-lg max-w-[420px] w-full h-auto object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Benefit Section */}
        <div className="w-full md:w-1/2">
          <Typography.CrystalUniverseRegular
            level={5}
            className="z-40 text-third-50 text-center mb-2"
          >
            Benefit
          </Typography.CrystalUniverseRegular>
          {[
            "Sertifikat Nasional",
            "Modul & Pelatihan",
            "Public Exhibition"
          ].map((benefit, idx) => (
            <Typography.Poppins
              key={idx}
              size="lg"
              level={8}
              className="z-40 text-white text-center"
            >
              {benefit}
            </Typography.Poppins>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Micon;
