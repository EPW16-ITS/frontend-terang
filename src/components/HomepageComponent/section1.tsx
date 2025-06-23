"use client";

export default function Home1() {
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
        <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-GerigiKuning.svg"
            alt="Gerigi Kuning"
            className="absolute bottom-0 right-0 w-[35%] md:max-w-44 xl:max-w-64
            h-auto z-0 -translate-x-[40%] xl:-translate-x-[45%] translate-y-[80%] rotate-[19deg] opacity-40"
          />
      </section>
    </div>
  );
}