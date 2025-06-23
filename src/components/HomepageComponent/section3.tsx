"use client";

import Typography from "@/components/Typography";
export default function Home3() {
  return (
    <div>
        {/* Section 3 */}
      <section className="relative overflow-hidden w-full min-h-screen bg-[#1F0C49]">
          {/* Background Pattern */}
          <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Pattern.svg"
          alt="Background Pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-5 z-0"
            />

                {/* Decorative Gears */}
            <div>
                <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GerigiKuning.svg"
                    alt="Gerigi Kuning"
                    className="absolute top-0 left-1/2 w-[70%] md:max-w-64 lg:max-w-80 xl:max-w-[400px] h-auto z-0 -translate-x-[50%] -translate-y-[15%] rotate-[0deg] opacity-60"
                />
                <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GirBiruTua.svg"
                    alt="Gir Biru Tua"
                    className="absolute top-0 right-0 w-[50%] md:max-w-44 lg:max-w-52 xl:max-w-72 h-auto z-0 translate-x-[35%] md:-translate-x-[75%] lg:-translate-x-[95%] xl:-translate-x-[180%] translate-y-[60%] xl:translate-y-[50%] opacity-60"
                />
                <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-benang-biru.svg"
                    alt="Benang Biru"
                    className="absolute top-0 left-0 w-[200%] md:max-w-80 lg:max-w-[400px] xl:max-w-[600px] h-auto z-0 -translate-x-[20%] xl:-translate-x-[10%] translate-y-[100%] xl:translate-y-[70%] rotate-[30deg] opacity-100"
                />
                <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GerigiPink.svg"
                    alt="Gir Biru Tua"
                    className="absolute bottom-0 left-0 w-[50%] md:max-w-64 lg:max-w-80 xl:max-w-[500px] h-auto z-0 -translate-x-[35%] translate-y-[25%] rotate-[20deg] opacity-60"
                />
                <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-benang-biru.svg"
                    alt="Benang Biru"
                    className="absolute bottom-0 right-0 w-[200%] md:max-w-80 lg:max-w-[400px] xl:max-w-[600px] h-auto z-0 translate-x-[20%] xl:translate-x-[10%] -translate-y-[60%] lg:-translate-y-[85%] rotate-[210deg] opacity-100"
                />
            </div>

                {/* Event Section */}
            <div className="relative w-[90%] h-[100vh] mx-[5%] flex flex-col justify-center items-center z-10">
                <Typography.Homica
                    level={9}
                    size="xl"
                    className="hidden md:block md:text-6xl text-8xl mb-12 text-secondary-50"
                >
                    E V E N T !!
                </Typography.Homica>

                    {/* Cards Container */}
                <div className="w-full flex flex-wrap justify-center gap-[4%] xl:gap-[3%]">

                    {/* Card 1 */}
                    <div className="w-[22%] h-[60vh] flex flex-col items-center py-4 xl:max-w-[17%]">
                        {/* Card */}
                        <div className="h-[40vh] bg-[#E5CEFF] rounded-[25px] flex flex-col px-[4%] py-4 md:max-w-[100%]">
                            <img
                                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-swiper2.webp"
                                alt="Gambar 1"
                                className="w-full h-auto border-[3px] border-primary-300 rounded-[15px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]"
                            />
                                {/* Text */}
                            <div className="flex-grow flex items-center justify-center">
                                <Typography.Poppins className="text-xs xl:text-lg font-bold text-center text-primary-50 md:mx-6 xl:mx-12">
                                Kompetisi pembuatan karya tulis ilmiah inovatif
                                </Typography.Poppins>
                            </div>
                        </div>

                        {/* Title and Button */}
                        <div className="w-full flex flex-col items-center">
                            <Typography.SuperComic className="text-[20px] xl:text-[40px] xl:my-[8%] text-fourth-25 my-[0%] text-center">INJECTION</Typography.SuperComic>
                            <a href="/event"
                                className="h-[16px] px-2 bg-fifth-200 rounded-full hover:bg-fifth-300 flex items-center justify-center border-[1px] border-white">
                                <Typography.SuperComic
                                    level={9}
                                    size="xs"
                                    className="text-white text-[10px] leading-[1] tracking-tight">
                                    VIEW MORE
                                </Typography.SuperComic>
                            </a>
                        </div>
                    </div>


                        {/* Card 2 */}
                    <div className="w-[22%] h-[60vh] flex flex-col items-center py-4 xl:max-w-[17%]">
                            {/* Card */}
                        <div className="h-[40vh] bg-third-50 rounded-[25px] flex flex-col px-[4%] py-4 md:max-w-[100%]">
                            <img
                                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-swiper3.webp"
                                alt="Gambar 1"
                                className="w-full h-auto border-[3px] border-third-400 rounded-[15px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]"
                            />
                                {/* Text */}
                            <div className="flex-grow flex items-center justify-center">
                                <Typography.Poppins className="text-xs xl:text-lg font-bold text-center text-fourth-400 md:mx-6 mx-12">
                                Microcontroller Contest yang berfokus pada bidang instrumentasi.
                                </Typography.Poppins>
                            </div>
                        </div>

                            {/* Title and Button */}
                        <div className="w-full flex flex-col items-center">
                            <Typography.SuperComic className="text-[20px] xl:text-[40px] xl:my-[8%] text-neutral-300 text-center">MICON</Typography.SuperComic>
                            <a href="/event"
                                className="h-[16px] px-2 bg-third-300 rounded-full hover:bg-third-400 flex items-center justify-center border-[1px] border-white">
                                <Typography.SuperComic
                                    level={9}
                                    size="xs"
                                    className="text-white text-[10px] leading-[1] tracking-tight">
                                    VIEW MORE
                                </Typography.SuperComic>
                            </a>
                        </div>
                    </div>

                        {/* Card 3 */}
                    <div className="w-[22%] h-[60vh] flex flex-col items-center py-4 xl:max-w-[17%]">
                        {/* Card */}
                        <div className="h-[40vh] bg-fourth-25 rounded-[25px] flex flex-col px-[4%] py-4 md:max-w-[100%]">
                            <img
                                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-swiper4.webp"
                                alt="Gambar 1"
                                className="w-full h-auto border-[3px] border-fourth-400 rounded-[15px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]"
                            />
                                {/* Text */}
                            <div className="flex-grow flex items-center justify-center">
                                <Typography.Poppins className="text-xs xl:text-lg font-bold text-center text-fourth-400 md:mx-6 mx-12">
                                Kompetisi bidang fisika, matematika terapan, dan aplikasinya dalam bidang ilmu teknik fisika.
                                </Typography.Poppins>
                            </div>
                        </div>

                        {/* Title and Button */}
                        <div className="w-full flex flex-col items-center">
                            <Typography.SuperComic className="text-[20px] xl:text-[40px] xl:my-[8%] text-third-50 my-[0%] text-center">EPC</Typography.SuperComic>
                            <a href="/event" 
                                className="h-[16px] px-2 bg-secondary-200 rounded-full hover:bg-secondary-300 flex items-center justify-center border-[1px] border-white">
                                <Typography.SuperComic
                                    level={9}
                                    size="xs"
                                    className="text-white text-[10px] leading-[1] tracking-tight">
                                    VIEW MORE
                                </Typography.SuperComic>
                            </a>
                        </div>
                    </div>

                        {/* Card 4 */}
                    <div className="w-[22%] h-[60vh] flex flex-col items-center py-4 xl:max-w-[17%]">
                        {/* Card */}
                        <div className="h-[40vh] bg-neutral-300 rounded-[25px] flex flex-col px-[4%] py-4 md:max-w-[100%]">
                            <img
                                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-swiper1.webp"
                                alt="Gambar 1"
                                className="w-full h-auto border-[3px] border-[#000000] rounded-[15px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)]"
                            />
                                {/* Text */}
                            <div className="flex-grow flex items-center justify-center">
                                <Typography.Poppins className="text-xs xl:text-lg font-bold text-center md:mx-6 mx-12">
                                Exhibition, Talkshow, Awarding dan Closing Ceremony.
                                </Typography.Poppins>
                            </div>
                        </div>

                        {/* Title and Button */}
                        <div className="w-full flex flex-col items-center">
                            <Typography.SuperComic className="text-[20px] xl:text-[40px] xl:my-[8%] text-secondary-50 my-[0%] text-center">EPHYFEST</Typography.SuperComic>
                            <a href="/event"
                                className="h-[16px] px-2 bg-fourth-400 rounded-full hover:bg-fourth-500 flex items-center justify-center border-[1px] border-white">
                                <Typography.SuperComic
                                    level={9}
                                    size="xs"
                                    className="text-white text-[10px] leading-[1] tracking-tight">
                                    VIEW MORE
                                </Typography.SuperComic>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}