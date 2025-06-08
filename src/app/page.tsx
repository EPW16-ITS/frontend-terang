"use client";
import Typography from "@/components/Typography";

export default function Home() {
  return (
    <div>
      {/* Section 1 */}
      <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-primary-25 from-5% bg-[#1F0C49] to-50%">
        {/* Background Pattern */}
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Pattern.svg"
          alt="Background Pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-5 z-0"
        />
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-benang-biru.svg"
          alt="Benang Biru"
          className="hidden md:block absolute lg:top-[80px] md:top-[-15px] lg:left-[-10px] md:left-[-10px] z-0 w-auto h-auto max-w-none"
        />
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-benang-pink.svg"
          alt="Benang Pink"
          className="hidden md:block absolute z-0
            md:max-w-[400px] xl:max-w-[600px] w-[600px] h-auto
            lg:bottom-[-50px] lg:left-[-20px] md:bottom-[-15px] md:left-[-10px]"
        />
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-benang-pink.svg"
          alt="Benang Pink"
          className="hidden md:block absolute z-0 -rotate-[140deg]
            md:max-w-[400px] xl:max-w-[600px] w-[600px] h-auto
            lg:bottom-[-50px] lg:right-[-0px] md:bottom-[-15px] md:right-[-10px]"
        />
        
        <div className="relative w-full h-screen">
          {/* Papan EPW */}
          <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-PapanEPWreal.svg"
            alt="Papan EPW"
            className="absolute left-1/2 translate-x-[-46%] z-10
              top-[35%] w-[90%] max-w-[370px]
              lg:top-[20%]
              sm:max-w-[500px] md:max-w-[500px] lg:max-w-[1200px]"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative w-full min-h-screen overflow-hidden bg-[#1F0C49]">
        {/* Background Pattern */}
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Pattern.svg"
          alt="Background Pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-5 z-0"
        />
        <div>
          <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GerigiKuning.svg"
            alt="Gerigi Kuning"
            className="absolute top-0 right-0 w-[35%] h-auto z-0 -translate-x-[40%] -translate-y-8 rotate-[19deg] opacity-60"
          />
          <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GirUngu.svg"
            alt="Gerigi Kuning"
            className="absolute top-0 right-0 w-[35%] h-auto z-0 translate-x-[35%] translate-y-[30%] opacity-60"
          />
        </div>

        {/* Content for Desktop */}

        {/* Content for Mobile */}
        <div className="relative z-10 flex flex-col justify-center items-center h-screen px-4 text-white text-center space-y-8 md:hidden">

          {/* Images Above Text */}
          <div className="relative w-[400px] h-[180px] text-[0]">
            {/* Image 1 */}
            <div className="absolute top-0 left-1/2 translate-x-[-50%] w-[146px] h-[97px] z-20 border-[3px] border-[#702B34]">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo1.webp"
                alt="Placeholder 1"
                className="w-full h-full object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BautPlusMerah.svg"
                alt="Placeholder 1 Decoration"
                className="absolute top-0 right-0 w-[10px] h-auto z-30"
              />
            </div>


            {/* Image 2 - overlaps image 1 */}
            <div className="absolute top-[30px] left-1/2 -translate-x-44 translate-y-10 w-[155px] h-[87px] z-10 border-[3px] border-[#702B34]">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo2.webp"
                alt="Placeholder 2"
                className="w-full h-full object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BautPlusBiru.svg"
                alt="Placeholder 2 Decoration"
                className="absolute top-0 left-0 w-[10px] h-auto z-30"
              />
            </div>

            {/* Image 3 - overlaps both */}
            <div className="absolute top-[60px] left-1/2 translate-y-6 w-[149px] h-[99px] z-40 border-[3px] border-[#702B34]">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo3.webp"
                alt="Placeholder 3"
                className="w-full h-full object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BautMinKuning.svg"
                alt="Placeholder 3 Decoration"
                className="absolute top-0 left-0 w-[10px] h-auto z-30"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GirHijauAbu.svg"
                alt="Placeholder 3 Decoration"
                className="absolute bottom-0 left-0 w-[40px] h-auto z-20 -translate-x-4"
              />
            </div>

            {/* Decorations */}
            <div className="">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-awan.svg"
                alt="Placeholder 1"
                className="absolute top-0 left-1/2 -translate-x-36 translate-y-3 w-[146px] h-auto z-0"
              />
            </div>
          </div>


          {/* Text */}
          <div>
            {/* <h1 className="text-2xl sm:text-4xl font-bold mb-4">
              Welcome to the Second Section!
            </h1> */}
            <h2 className="max-w-xl text-base sm:text-xs typography-poppins font-semibold leading-relaxed mx-2">
              Engineering Physics Week ke-16 (EPW 16) merupakan ajang tahunan yang diselenggarakan oleh Departemen Teknik Fisika Institut Teknologi Sepuluh Nopember (ITS) sebagai wadah untuk memperkenalkan Teknik Fisika secara menyeluruh, baik dari aspek umum, keilmuan, keprofesian, hingga dunia perkuliahan, kepada masyarakat umum, calon mahasiswa baru, serta siswa/i jenjang SMA/SMK/MA/sederajat.
            </h2>
          </div>

          {/* Images Below Text */}
          <div className="relative flex gap-0 justify-center text-[0] border-[5px] border-blue-400">
            <div className="relative w-[157px] h-[104px] translate-x-8 translate-y-4">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo4.webp"
                alt="Placeholder 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-[162px] h-[108px] -translate-x-8 -translate-y-4">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo5.webp"
                alt="Placeholder 5"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </section>


    </div>
  );
}


