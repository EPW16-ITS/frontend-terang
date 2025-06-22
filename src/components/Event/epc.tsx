import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const EPC = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="relative w-full h-[900px] overflow-hidden bg-primary-300 px-6 md:px-16 py-12">
        {/* Pattern Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/Pattern.webp"
            alt="Pattern Background"
            fill
            className="object-cover opacity-100"
            priority
          />
        </div>

        <div className="absolute left-[0%]">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/GerigiKuning.webp"
            alt="Gerigi Kuning"
            width={200}
            height={200}
          />
        </div>
        {/* Rectangle Rounded Kubu Kiri - Glass Effect */}
        <div className="absolute left-[3%] top-1/2 transform -translate-y-1/2 w-[515px] h-[534px] bg-white/20 backdrop-blur-sm border-2 border-third-50 z-30"
          style={{
            borderRadius: '0 50px 0 50px' // Sudut kanan atas dan kiri bawah rounded
          }}>
          <div className="w-full h-full p-6 flex flex-col">
            {/* Konten untuk kubu kiri */}
            <Typography.SuperComic
              level={3}
              className="text-white text-left"
            >
              What is EPC?
            </Typography.SuperComic>
            <Typography.Poppins
              level={7}
              className="text-white text-left mb-4"
            >
              Engineering Physics Challenge (EPC) merupakan kegiatan kompetisi tahunan tingkat nasional tentang bidang fisika, matematika terapan, dan aplikasinya dalam bidang ilmu teknik fisika yang diperuntukkan untuk siswa - siswi SMA/SMK/MA sederajatnya.
            </Typography.Poppins>
            <Typography.SuperComic
              level={3}
              className="text-white text-left"
            >
              What is EPC?
            </Typography.SuperComic>
          </div>
        </div>
        {/* Rectangle Rounded Kubu Kanan - Solid Fill */}
        <div className="absolute right-[3%] top-[45%] transform -translate-y-1/2 w-[640px] h-[461px] bg-primary-200 border-2 z-30"
          style={{
            borderRadius: '100px 0 100px 0', // Sudut kiri atas dan kanan bawah rounded
            borderColor: '#EADEF7'
          }}>
          <div className="w-full h-full p-6 flex items-center justify-center">
            {/* Konten untuk kubu kanan */}
            <p className="text-white text-center">Konten Kanan</p>
          </div>
        </div>
        {/* Text with Tailwind classes only */}
        <Typography.Homica
          level={4}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBD921] to-[#FEF9DE] text-center z-40 relative"
          style={{
            WebkitTextStroke: "64px rgb(var(--color-primary-100))"
          }}
        >
          ENGINEERING PHYSICS
          CHALLENGE
        </Typography.Homica>
      </div>
    </div>
  );
};

export default EPC;