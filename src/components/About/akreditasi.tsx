import Typography from "@/components/Typography";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Link from "next/link";

const Akreditasi = () => {
    return (
        <div>
            {/* ---------- SECTION 2 ---------- */}
            <div className="overflow-hidden relative min-h-screen w-full bg-gradient-to-b from-[#2F126D] to-[#F85F73] pt-[100px] pb-20">
                {/* Pattern Background */}
                <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
                    <Image
                        src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Pattern.svg"
                        alt="Pattern"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                {/* BG Miring di Tengah dan Responsif */}
                <div className="absolute z-10 top-0 left-0 w-full flex justify-center h-[76px] overflow-hidden opacity-60 md:top-[-10px] sm:top-[-18px] ">
                    <Image
                        src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/BG_ObjekMiring.svg"
                        alt="bg miring"
                        width={0}
                        height={0}
                        className="  w-full xs:w-[250px] sm:w-[400px] md:w-[600px] lg:w-[1000px] h-[31px] sm:h-[76px]"
                        priority
                    />
                </div>

                {/* Lingkaran Tengah */}
                <div className="relative z-20 lg:top-[-60px] md:top-[-60px] sm:top-[-80px] xs:top-[-80px] mx-auto w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[208px] lg:h-[208px] rounded-full border-4 border-[#FBD921] flex items-center justify-center">
                    <div className="w-[112px] h-[112px] sm:w-[140px] sm:h-[140px] lg:w-[200px] lg:h-[200px] rounded-full bg-gradient-to-b from-[#4D2C72] via-[#E5CEFF] to-[#4D2C72] flex items-center justify-center shadow-lg">
                        <div className="absolute top-[4px] sm:top-[6px] lg:top-[8px] left-1/2 transform -translate-x-1/2 w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] lg:w-[10px] lg:h-[10px] rounded-full bg-[#6B2C91] border-[1.5px] sm:border-[2px] border-black flex items-center justify-center z-20">
                            <div className="w-[1px] h-[6px] sm:w-[1.5px] sm:h-[8px] lg:w-[2px] lg:h-[10px] bg-black"></div>
                        </div>
                        <div className="relative w-[90px] h-[90px] sm:w-[128px] sm:h-[128px] lg:w-[168px] lg:h-[168px] rounded-full overflow-hidden">
                            <Image
                                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/logotf.svg"
                                alt="Logo TF"
                                width={168}
                                height={168}
                                className="object-contain w-full h-full"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Konten Deskripsi */}
                <div className="relative z-5 
  lg:mt-[-90px] md:mt-[-55px] sm:mt-[-75px] xs:mt-[-70px] 
  w-full max-w-7xl mx-auto 
  px-4 sm:px-6 lg:px-8 
  grid grid-cols-1 lg:grid-cols-3 
  gap-4 
  md:items-center ">
                    {/*kotak ungu atas*/}
                    {/* Box Deskripsi */}
                    <div className="lg:col-span-2 relative bg-[#4D2C72] border-[2px] border-yellow-400 rounded-md shadow-lg md:z-4 px-8 py-10  lg:h-[394px] text-white">{/* ubah */}
                        <div className="absolute lg:-top-6 lg:left-[220px] lg:-rotate-[3deg] md:-top-[20px] sm:-top-[20px] xs:-top-[20px] bg-gradient-to-b from-[#FBD921] via-[#F2E4CE] to-[#FBD921] px-4 py-2 rounded-md shadow font-bold text-black lg:w-[433.35px] lg:h-[56px] md:w-[433.35px] md:h-[56px] sm:w-[350px] sm:h-[40px] xs:w-[180px] xs:h-[23px]  md:transform md:left-1/2 md:-translate-x-1/2 sm:transform  sm:left-1/2  sm:-translate-x-1/2 xs:transform xs:left-1/2 xs:-translate-x-1/2 flex items-center justify-center z-10"> {/*what is*/}
                            <div className="absolute left-2 w-[10px] h-[10px] rounded-full bg-[#6B2C91] border-[2px] border-black flex items-center justify-center">
                                <div className="w-[2px] h-[10px] bg-black"></div>
                            </div>
                            <span className="lg:md:sm:text-[18px] xs:text-[12px] md:mx-auto font-[Poppins] font-semibold">What is Teknik Fisika?</span>
                            <div className="absolute right-2 w-[10px] h-[10px] rounded-full bg-[#6B2C91] border-[2px] border-black flex items-center justify-center">
                                <div className="w-[2px] h-[10px] bg-black"></div>
                            </div>
                        </div>
                        <p className="lg:text-[20px] md:text-[20px]sm:text-[12px] xs:text-[12px] font-[Poppins] leading-relaxed">
                            Pendidikan Teknik Fisika merupakan pendidikan keteknikan yang memadukan konsep-konsep keteknikan/rekayasa (engineering) dengan penguasaan dasar ilmu fisika dan matematika yang kuat untuk menghasilkan aplikasi kreatif dan inovatif.
                        </p>
                        <p className="mt-4 lg:text-[20px] md:text-[20px]sm:text-[12px] xs:text-[12px] font-[Poppins] leading-relaxed">
                            Lulusan teknik fisika diharapkan mampu memecahkan permasalahan dan menghasilkan karya inovatif dalam bidang teknologi pada saat ini maupun di masa mendatang berdasarkan analisis dan metode ilmiah.
                        </p>
                        <Image
                            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Logo%20Tekfis%20-%20Putih%201.svg"
                            alt="Watermark"
                            width={150}
                            height={150}
                            className="absolute bottom-4 right-4 opacity-10"
                        />
                    </div>

                    {/* Box Program Studi */}
                    <div className="bg-[#4D2C72] w-full mx-auto mt-[-8px] border-[2px] border-yellow-400 lg:h-[395px] rounded-md shadow-lg px-8 py-8 h-fit text-white"> {/*mau kuubah program studi*/}
                        <p className="lg:text-[20px] md:text-[20px]sm:text-[12px] xs:text-[12px] font-bold font-[Poppins] mb-4">Tiga program studi utama, yaitu :</p>
                        <ul className="list-disc list-inside space-y-2 font-[Poppins] lg:text-[20px] md:text-[20px]sm:text-[12px] xs:text-[12px]">
                            <li>Program Studi Sarjana (S1) Teknik Fisika           (jalur Reguler, IUP, dan Lintas Jalur)</li>
                            <li>Program Studi Magister (S2) Teknik Fisika</li>
                            <li>Program Studi Doktor (S3) Teknik Fisika</li>
                        </ul>
                    </div>
                </div>

                {/* Box Akreditasi */}
                <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 mt-8">
                    <div className="w-full max-w-[1220px] mx-auto bg-[#4D2C72] border-[2px] border-yellow-400 rounded-md shadow-lg px-4 sm:px-6 lg:px-8 py-8 text-white">

                        {/* Label Akreditasi */}
                        <div className="flex absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#FBD921] via-[#F2E4CE] to-[#FBD921] px-4 py-2 rounded-md shadow font-bold text-black w-[200px] h-[56px] items-center justify-center">
                            <div className="absolute left-2 w-[10px] h-[10px] rounded-full bg-[#6B2C91] border-[2px] border-black flex items-center justify-center">
                                <div className="w-[2px] h-[10px] bg-black"></div>
                            </div>
                            <span className="text-[18px] font-[Poppins] font-semibold">Akreditasi</span>
                            <div className="absolute right-2 w-[10px] h-[10px] rounded-full bg-[#6B2C91] border-[2px] border-black flex items-center justify-center">
                                <div className="w-[2px] h-[10px] bg-black"></div>
                            </div>
                        </div>

                        {/* Konten Akreditasi */}
                        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 mt-8">
                            {[
                                {
                                    src: "https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/iabee-Photoroom%201.svg",
                                    alt: "IABEE",
                                    short: "Program Studi Sarjana (S1) terakreditasi IABEE.",
                                    full: "Program Studi Sarjana (S1) terakreditasi IABEE (Indonesian Accreditation Board for Engineering Education).",
                                },
                                {
                                    src: "https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/image%204.svg",
                                    alt: "ASIIN",
                                    short: "Program Studi Magister (S2) ASIIN.",
                                    full: "Program Studi Magister (S2) ASIIN (Akkreditierungsagentur für Studiengänge der Ingenieurwissenschaften, der Informatik, der Naturwissenschaften und der Mathematik).",
                                },
                                {
                                    src: "https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/image-Photoroom%201.svg",
                                    alt: "LAM Teknik",
                                    short: "Program Studi Sarjana (S1): Akreditasi Unggul berdasarkan keputusan LAM Teknik.",
                                    full: "Program Studi Sarjana (S1): Akreditasi Unggul berdasarkan keputusan LAM Teknik No. 0023/SK/LAM Teknik/PYT/IV/2023. Program Studi Magister (S2): Akreditasi Unggul berdasarkan keputusan LAM Teknik No. 0029/SK/LAM Teknik/AM/IV/2023. Program Studi Doktor (S3): Akreditasi Unggul berdasarkan keputusan LAM Teknik No. 0133/SK/LAM Teknik/AD/IV/2023.",
                                },
                            ].map(({ src, alt, short, full }, i) => (
                                <div key={i} className="flex items-start gap-4 max-w-full lg:max-w-[400px]">
                                    {/* Gambar Akreditasi */}
                                    <div className="relative w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] flex-shrink-0">
                                        <div className="absolute inset-0 rounded-full p-[4px]" style={{
                                            background: "linear-gradient(to bottom, #FBD921, #F2E4CE, #FBD921)"
                                        }}>
                                            <div className="w-full h-full rounded-full bg-[#DDF3FF] flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={src}
                                                    alt={alt}
                                                    className="object-contain w-[60%] h-[60%]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Teks Akreditasi */}
                                    <p className="text-[12px] sm:text-[13px] font-[Poppins] font-semibold">
                                        <span className="block lg:hidden">{short}</span>
                                        <span className="hidden lg:block">{full}</span>
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Tombol Selengkapnya */}
                        <div className="mt-6 flex justify-center">
                            <Link
                                href="https://www.its.ac.id/tfisika/id/tentang-kami/penghargaan/"
                                target="_blank"
                                className="group px-5 sm:px-6 py-2 sm:py-3 border border-[#1F0C49] rounded-full text-[13px] sm:text-[14px] font-[Poppins] font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                                style={{
                                    background: "linear-gradient(to bottom, #FBD921, #F2E4CE, #FBD921)",
                                    color: "#1F0C49"
                                }}
                            >
                                Selengkapnya
                                <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 24 24"
                                        className="rounded-full"
                                    >
                                        <defs>
                                            <mask id="cutout">
                                                <rect width="100%" height="100%" fill="white" />
                                                <text
                                                    x="50%"
                                                    y="50%"
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                    fontSize="14"
                                                    fontWeight="bold"
                                                    fill="black"
                                                    fontFamily="Poppins, sans-serif"
                                                >
                                                    &gt;
                                                </text>
                                            </mask>
                                        </defs>
                                        <circle cx="12" cy="12" r="12" fill="#1F0C49" mask="url(#cutout)" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Akreditasi;