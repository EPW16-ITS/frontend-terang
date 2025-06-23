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
          className="hidden md:block absolute top-0 left-0 translate-y-[15%] -translate-x-[10%] z-0 w-[60%] xl:w-[50%]"
        />
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-benang-pink.svg"
          alt="Benang Pink Kiri"
          className="hidden md:block absolute z-0
            w-[40%] h-auto lg:w-[35%]
            bottom-0 left-0 -translate-x-[5%] translate-y-[5%] lg:translate-y-[15%]"
        />
        <img
          src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-benang-pink.svg"
          alt="Benang Pink Kanan"
          className="hidden md:block absolute z-0 -rotate-[140deg]
            w-[40%] h-auto lg:w-[35%]
            bottom-0 right-0 -translate-x-[5%] translate-y-[10%] md:translate-y-[20%] lg:translate-y-[30%] xl:translate-y-[20%]"
        />
        <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-PapanEPWreal.svg"
            alt="Papan EPW"
            className="absolute left-1/2 translate-x-[-46%] translate-y-[110%] md:translate-y-[45%] z-10
              top-0 w-[95%] md:w-[70%] xl:w-[60%]
              lg:translate-y-[30%]
              "
        />
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