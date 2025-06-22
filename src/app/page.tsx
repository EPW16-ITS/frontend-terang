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
              lg:top-[10%]
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
            className="absolute top-0 right-0 w-[35%] md:max-w-44
            h-auto z-0 -translate-x-[40%] -translate-y-8 rotate-[19deg] opacity-40"
          />
          <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GirUngu.svg"
            alt="Gerigi Kuning"
            className="absolute top-0 right-0 w-[35%] md:max-w-44
            h-auto z-0 translate-x-[35%] translate-y-[30%] opacity-60"
          />
        </div>

        <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GerigiPink.svg"
            alt="Gerigi Kuning"
            className="absolute bottom-0 left-0 w-[45%] md:hidden h-auto z-0 -translate-x-[35%] -translate-y-8 rotate-[0deg] opacity-60"
        />

        {/* Content for Desktop */}
        <div className="relative z-10 hidden md:flex flex-row justify-center items-center gap-[1%] h-screen px-4 text-white text-center">
           {/* border-[5px] border-yellow-400 */}

          {/* Desktop Images */}
          <div className="relative w-[60%] h-[80%] lg:h-[85%] xl:h-[95%] text-[0] ml-[1%] md:-mt-[5%] lg:mt-[1%] xl:mt-[2%]">
            {/* border-[5px] border-green-400  */}

            {/* Additional Decorations */}
            <div>
              <img
              src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-awan.svg"
              alt="Decoration Awan"
              className="absolute top-0 left-1/2 -translate-x-[70%] translate-y-0 w-[170px] xl:w-[30%] h-auto z-0"
              />
            </div>

            {/* Desktop Image 1 */}
            <div className="absolute top-0 left-1/2 md:translate-x-[0%] lg:translate-x-[10%] w-[50%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[35%] h-auto z-20">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo1.webp"
                alt="Image 1"
                className="w-full h-full object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BautPlusHijau.svg"
                alt="Image 1 Decoration"
                className="absolute top-0 right-0 w-[8%] h-auto z-30"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GagangBiru.svg"
                alt="Image 1 Decoration"
                className="absolute bottom-0 right-0 w-[25%] h-auto z-30 translate-x-[30%] translate-y-[20%]"
              />
            </div>


            {/* Desktop Image 2 */}
            <div className="absolute top-0 left-1/2 -translate-x-[80%] translate-y-[50%] w-[55%] md:max-w-[55%] lg:max-w-[45%] xl:max-w-[40%] h-auto z-20">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo2.webp"
                alt="Image 2"
                className="w-full h-full object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BautPlusBiru.svg"
                alt="Image 2 Decoration"
                className="absolute top-0 left-0 w-[7%] h-auto z-30"
              />
            </div>

            {/* Desktop Image 3 */}
            <div className="absolute top-0 left-1/2 -translate-x-[10%] translate-y-[105%] w-[50%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[35%] h-auto z-20">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo3.webp"
                alt="Image 3"
                className="w-full h-full object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BautMin2.svg"
                alt="Image 3 Decoration"
                className="absolute top-0 left-0 w-[7%] h-auto z-30"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GirHijauAbu.svg"
                alt="Image 3 Decoration"
                className="absolute bottom-0 right-0 w-[30%] h-auto z-30 translate-x-[40%] translate-y-[50%]"
              />
            </div>

            {/* Desktop Image 4 */}
            <div className="absolute top-0 left-1/2 -translate-x-[85%] translate-y-[170%] w-[50%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[35%] h-auto z-20">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo4.webp"
                alt="Image 4"
                className="w-full h-full object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BautPlusMerah.svg"
                alt="Image 4 Decoration"
                className="absolute top-0 right-0 w-[8%] h-auto z-30"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-RackKuning.svg"
                alt="Image 4 Decoration"
                className="absolute bottom-0 left-0 w-[35%] h-auto z-30 -translate-x-[35%] translate-y-[35%]"
              />
            </div>

            {/* Mobile Image 5 */}
            <div className="absolute top-0 left-1/2 -translate-x-[20%] translate-y-[220%] w-[50%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[35%] h-auto z-20">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo5.webp"
                alt="Image 5"
                className="w-full h-full object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BautMinKuning.svg"
                alt="Image 5 Decoration"
                className="absolute top-0 left-0 w-[8%] h-auto z-30"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-benang-kuning.svg"
                alt="Image 5 Decoration"
                className="absolute bottom-0 left-0 w-[30%%] xl:w-[80%] h-auto z-30 -translate-x-[70%] translate-y-[30%]"
              />
            </div>

          </div>

          {/* Desktop Text */}
        <div className="relative w-[40%] h-[50%] mr-[1%] xl:-translate-x-[10%] flex items-center justify-center text-[0]">
          <p
            className="
              typography-poppins
              font-bold
              md:text-[16px] xl:text-[25px]
              md:leading-[130%] xl:leading-[150%] 
              tracking-[0%]
              text-center
              max-w-xl
            "
          >
            Engineering Physics Week ke-16 (EPW 16) merupakan ajang tahunan yang diselenggarakan oleh Departemen Teknik Fisika Institut Teknologi Sepuluh Nopember (ITS) sebagai wadah untuk memperkenalkan Teknik Fisika secara menyeluruh, baik dari aspek umum, keilmuan, keprofesian, hingga dunia perkuliahan, kepada masyarakat umum, calon mahasiswa baru, serta siswa/i jenjang SMA/SMK/MA/sederajat.
          </p>
        </div>



        </div>

        {/* Content for Mobile */}
        <div className="relative z-10 flex flex-col justify-center items-center h-screen px-4 text-white text-center space-y-8 md:hidden">

          {/* Images Above Text */}
          <div className="relative w-[400px] h-[180px] text-[0]">
            {/* Mobile Image 1 */}
            <div className="absolute top-0 left-1/2 translate-x-[-50%] w-[146px] h-[97px] z-20 border-[3px] border-[#702B34]">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo1.webp"
                alt="Image 1"
                className="w-full h-full object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BautPlusMerah.svg"
                alt="Image 1 Decoration"
                className="absolute top-0 right-0 w-[10px] h-auto z-30"
              />
            </div>


            {/* Mobile Image 2 */}
            <div className="absolute top-[30px] left-1/2 -translate-x-44 translate-y-10 w-[155px] h-[87px] z-10 border-[3px] border-[#702B34]">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo2.webp"
                alt="Image 2"
                className="w-full h-full object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BautPlusBiru.svg"
                alt="Image 2 Decoration"
                className="absolute top-0 left-0 w-[10px] h-auto z-30"
              />
            </div>

            {/* Mobile Image 3 */}
            <div className="absolute top-[60px] left-1/2 translate-y-6 w-[149px] h-[99px] z-40 border-[3px] border-[#702B34]">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo3.webp"
                alt="Image 3"
                className="w-full h-full object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BautMinKuning.svg"
                alt="Image 3 Decoration"
                className="absolute top-0 left-0 w-[10px] h-auto z-30"
              />
            </div>

            {/* Additional Decorations for Image 3 */}
            <img
              src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GirHijauAbu.svg"
              alt="Image 3 Decoration"
              className="absolute w-[40px] h-auto z-20 left-1/2 bottom-0 -translate-x-5 translate-y-8"
            />  
        
            {/* Additional Decorations */}
            <div className="">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-awan.svg"
                alt="Decoration Awan"
                className="absolute top-0 left-1/2 -translate-x-36 translate-y-3 w-[146px] h-auto z-0"
              />
            </div>
          </div>


          {/* Text */}
          <div>
            {/* <h1 className="text-2xl sm:text-4xl font-bold mb-4">
              Welcome to the Second Section!
            </h1> */}
            <p className="max-w-xl text-base sm:text-xs typography-poppins font-semibold leading-tight">
              Engineering Physics Week ke-16 (EPW 16) merupakan ajang tahunan yang diselenggarakan oleh Departemen Teknik Fisika Institut Teknologi Sepuluh Nopember (ITS) sebagai wadah untuk memperkenalkan Teknik Fisika secara menyeluruh, baik dari aspek umum, keilmuan, keprofesian, hingga dunia perkuliahan, kepada masyarakat umum, calon mahasiswa baru, serta siswa/i jenjang SMA/SMK/MA/sederajat.
            </p>
          </div>

          {/* Images Below Text */}
          <div className="relative flex gap-0 justify-center text-[0]">

          {/* Additional Decorations */}
            <div className="">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-awan.svg"
                alt="Decoration Awan"
                className="absolute top-0 left-1/2 translate-x-5 -translate-y-6 w-[146px] h-auto z-0"
              />
            </div>

            {/* Mobile Image 4 */}
            <div className="relative w-[157px] h-[104px] translate-x-8 translate-y-4">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo4.webp"
                alt="Image 4"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mobile Image 5 */}
            <div className="relative w-[162px] h-[108px] -translate-x-8 -translate-y-4">
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-sect2-photo5.webp"
                alt="Image 5"
                className="w-full h-full object-cover"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GirBiru.svg"
                alt="Gir Biru"
                className="absolute bottom-0 right-0 w-[90px] h-auto z-0 translate-x-[40px] translate-y-7 rotate-[0deg]"
              />
              <img
                src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-benang-kuning.svg"
                alt="Benang Kuning"
                className="absolute bottom-0 right-0 w-[165px] h-auto z-0 -translate-x-12 translate-y-12"
              />
            </div>
          </div>

        </div>

      </section>


    </div>
  );
}


