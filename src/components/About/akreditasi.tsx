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
            {/* ---------- SECTION 2: KONTEN ---------- */}
            <div className="overflow-hidden relative w-full bg-gradient-to-b from-[#2F126D] to-[#F85F73] pt-[100px] pb-20">
                <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
                    <Image
                        src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Pattern.svg"
                        alt="Pattern"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                <div
                    className="absolute z-10 opacity-60 w-[1013px] h-[76px] overflow-hidden"
                    style={{ top: "0px", left: "214px" }}
                >
                    <Image
                        src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/BG_ObjekMiring.svg"
                        alt="bg miring"
                        width={1013}
                        height={76}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                <div className="relative z-10 mx-auto w-[208px] h-[208px] rounded-full border-4 border-[#FBD921] flex items-center justify-center">
                    <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-b from-[#4D2C72] via-[#E5CEFF] to-[#4D2C72] flex items-center justify-center shadow-lg">
                        <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#6B2C91] border-[2px] border-black flex items-center justify-center z-20">
                            <div className="w-[2px] h-[10px] bg-black"></div>
                        </div>
                        <div className="relative w-[168px] h-[168px] rounded-full overflow-hidden">
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

                <div className="relative z-10 mt-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Box Deskripsi */}
                    <div className="lg:col-span-2 relative bg-[#4D2C72] border-[2px] border-yellow-400 rounded-md shadow-lg px-8 py-10 h-fit text-white">
                        <div className="absolute -top-6 left-6 -rotate-[3deg] bg-gradient-to-b from-[#FBD921] via-[#F2E4CE] to-[#FBD921] px-4 py-2 rounded-md shadow font-bold text-black w-[433.35px] h-[56px] flex items-center justify-center z-10">
                            <div className="absolute left-2 w-[10px] h-[10px] rounded-full bg-[#6B2C91] border-[2px] border-black flex items-center justify-center">
                                <div className="w-[2px] h-[10px] bg-black"></div>
                            </div>
                            <span className="text-[18px] font-[Poppins] font-semibold">What is Teknik Fisika?</span>
                            <div className="absolute right-2 w-[10px] h-[10px] rounded-full bg-[#6B2C91] border-[2px] border-black flex items-center justify-center">
                                <div className="w-[2px] h-[10px] bg-black"></div>
                            </div>
                        </div>
                        <p className="text-lg font-[Poppins] leading-relaxed">
                            Pendidikan Teknik Fisika merupakan pendidikan keteknikan yang memadukan konsep-konsep keteknikan/rekayasa (engineering) dengan penguasaan dasar ilmu fisika dan matematika yang kuat untuk menghasilkan aplikasi kreatif dan inovatif.
                        </p>
                        <p className="mt-4 text-lg font-[Poppins] leading-relaxed">
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
                    <div className="bg-[#4D2C72] border-[2px] border-yellow-400 rounded-md shadow-lg px-8 py-6 text-white">
                        <p className="text-xl font-bold font-[Poppins] mb-4">Tiga program studi utama, yaitu :</p>
                        <ul className="list-disc list-inside space-y-2 font-[Poppins]">
                            <li>Program Studi Sarjana (S1) Teknik Fisika (jalur Reguler, IUP, dan Lintas Jalur)</li>
                            <li>Program Studi Magister (S2) Teknik Fisika</li>
                            <li>Program Studi Doktor (S3) Teknik Fisika</li>
                        </ul>
                    </div>
                </div>

                {/* Box Akreditasi */}
                <div className="relative z-10 mt-16 max-w-7xl mx-auto px-6">
                    <div className="bg-[#4D2C72] border-[2px] border-yellow-400 rounded-md shadow-lg p-6 relative text-white">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#FBD921] via-[#F2E4CE] to-[#FBD921] px-4 py-2 rounded-md shadow font-bold text-black w-[200px] h-[56px] flex items-center justify-center">
                            <div className="absolute left-2 w-[10px] h-[10px] rounded-full bg-[#6B2C91] border-[2px] border-black flex items-center justify-center">
                                <div className="w-[2px] h-[10px] bg-black"></div>
                            </div>
                            <span className="text-[18px] font-[Poppins] font-semibold">Akreditasi</span>
                            <div className="absolute right-2 w-[10px] h-[10px] rounded-full bg-[#6B2C91] border-[2px] border-black flex items-center justify-center">
                                <div className="w-[2px] h-[10px] bg-black"></div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-12 mt-14">
                            {[
                                {
                                    src: "https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/iabee-Photoroom%201.svg",
                                    alt: "IABEE",
                                    text: "Program Studi Sarjana (S1) terakreditasi IABEE (Indonesian Accreditation Board for Engineering Education).",
                                },
                                {
                                    src: "https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/image%204.svg",
                                    alt: "ASIIN",
                                    text: "Program Studi Magister (S2) ASIIN (Akkreditierungsagentur für Studiengänge der Ingenieurwissenschaften, der Informatik, der Naturwissenschaften und der Mathematik).",
                                },
                                {
                                    src: "https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/image-Photoroom%201.svg",
                                    alt: "LAM Teknik",
                                    text: "Program Studi Sarjana (S1) : Akreditasi Unggul berdasarkan keputusan LAM Teknik No. 0023/SK/LAM Teknik/PYT/IV/2023 Program Studi Magister (S2) : Akreditasi Unggul berdasarkan keputusan LAM Teknik No. 0029/SK/LAM Teknik/AM/IV/2023 Program Studi Doktor (S3) : Akreditasi Unggul berdasarkan keputusan LAM Teknik No. 0133/SK/LAM Teknik/AD/IV/2023",
                                },
                            ].map(({ src, alt, text }, i) => (
                                <div key={i} className="flex items-center gap-4 max-w-[300px]">
                                    <div className="relative w-[110px] h-[110px] flex-shrink-0">
                                        <div className="absolute inset-0 rounded-full p-[4px]" style={{
                                            background: "linear-gradient(to bottom, #FBD921, #F2E4CE, #FBD921)"
                                        }}>
                                            <div className="w-full h-full rounded-full bg-[#DDF3FF] flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src={src}
                                                    alt={alt}
                                                    width={60}
                                                    height={60}
                                                    className="object-contain w-[60px] h-[60px]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[12px] font-semibold font-[Poppins] text-white">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex justify-center">
                            <Link
                                href="https://www.its.ac.id/tfisika/id/tentang-kami/penghargaan/"
                                target="_blank"
                                className="group px-6 py-3 border border-[#1F0C49] rounded-full text-[14px] Font-bold Font-[Poppins] font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                                style={{
                                    background: "linear-gradient(to bottom, #FBD921, #F2E4CE, #FBD921)",
                                    color: "#1F0C49"
                                }}
                            >
                                Selengkapnya

                                <div className="w-6 h-6 relative">
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