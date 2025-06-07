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

        {/* Image Stack */}
        <div className="relative w-full h-screen">
          {/* Papan EPW */}
          <img
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-PapanEPWreal.svg"
            alt="Papan EPW"
            className="absolute left-1/2 translate-x-[-46%] z-10
              top-[35%] w-[90%] max-w-[370px]
              xl:top-[25%]
              sm:max-w-[500px] md:max-w-[500px] xl:max-w-[985px]"
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

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-screen px-4 text-white text-center space-y-8">
          
          {/* Images Above Text */}
          <div className="flex gap-4 justify-center">
            <img src="https://via.placeholder.com/150x100" alt="Placeholder 1" />
            <img src="https://via.placeholder.com/150x100" alt="Placeholder 2" />
            <img src="https://via.placeholder.com/150x100" alt="Placeholder 3" />
          </div>

          <div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">
              Welcome to the Second Section!
            </h1>
            <h2 className="max-w-xl text-base sm:text-lg">
              This section shares the same background and gradient style as the first section.
              You can add more content, components, or images here.
            </h2>
          </div>

          {/* Images Below Text */}
          <div className="flex gap-4 justify-center">
            <img src="https://via.placeholder.com/150x100" alt="Placeholder 4" />
            <img src="https://via.placeholder.com/150x100" alt="Placeholder 5" />
            <img src="https://via.placeholder.com/150x100" alt="Placeholder 6" />
          </div>
          
        </div>
      </section>

    </div>
  );
}
