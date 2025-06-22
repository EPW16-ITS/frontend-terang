"use client";
import Image from "next/image";
import Typography from "@/components/Typography";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import {Dialog} from "@headlessui/react";

export default function About() {
  useEffect(() => {
    const cardSlider = document.getElementById('cardSlider');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const dots = document.querySelectorAll('#dotsContainer > div');
    
    if (cardSlider && prevButton && nextButton && dots.length > 0) {
      let currentIndex = 0;
      const totalCards = 5;

      function updateSlider() {
        const translateX = -currentIndex * 244;
        cardSlider.style.transform = `translateX(${translateX}px)`;
        
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.remove('bg-white/30');
            dot.classList.add('bg-[#78D1FE]');
          } else {
            dot.classList.remove('bg-[#78D1FE]');
            dot.classList.add('bg-white/30');
          }
        });

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === totalCards - 1;
      }

      prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
          currentIndex--;
          updateSlider();
        }
      });

      nextButton.addEventListener('click', function() {
        if (currentIndex < totalCards - 1) {
          currentIndex++;
          updateSlider();
        }
      });

      dots.forEach(dot => {
        dot.addEventListener('click', function() {
          currentIndex = parseInt(this.getAttribute('data-index'));
          updateSlider();
        });
      });

      updateSlider();
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* ---------- SECTION 1: HERO ---------- */}
      <div className="relative w-full min-h-screen bg-gradient-to-br from-[#037CB8] via-[#341479] to-[#DDBC06]">
        <div className="absolute inset-0 z-0 opacity-[0.04]">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Pattern.svg"
            alt="Pattern"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div
          className="absolute z-20"
          style={{
            top: "25%",
            left: "50%",
            transform: "translateX(-50%) translateY(-25%)",
            width: "410px",
            height: "50px",
          }}
        >
          <Typography.CrystalUniverseOblique
            level={6}
            className="text-[#FBD921] text-[36px] text-center leading-[50px]"
          >
            Teknik Fisika
          </Typography.CrystalUniverseOblique>
        </div>

        <div className="absolute z-10 left-1/2 bottom-0 transform -translate-x-1/2 w-full max-w-[1440px] h-[500px] overflow-hidden">
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/homepage-BGwaktu_new.svg"
            alt="BG waktu"
            width={1440}
            height={1000}
            className="mx-auto object-cover object-top w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[612px] h-[612px] overflow-hidden" style={{ top: "-250px", right: "-250px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/GerigiKuning612x612.svg"
            alt="Gerigi Kuning"
            width={612}
            height={612}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[115px] h-[115px] overflow-hidden" style={{ top: "287.98px", left: "89px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigibiru.svg"
            alt="Gerigi Biru"
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[191.21px] h-[191.19px] overflow-hidden" style={{ top: "166px", left: "124.56px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigikuning.svg"
            alt="Gerigi Kuning"
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute z-10 opacity-70 w-[140px] h-[139.94px] overflow-hidden" style={{ top: "400px", left: "1242.97px" }}>
          <Image
            src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/gerigikuning.svg"
            alt="Gerigi Kuning"
            width={140}
            height={140}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      {/* ---------- SECTION 2: KONTEN ---------- */}
      <div className="relative w-full bg-gradient-to-b from-[#2F126D] to-[#F85F73] pt-[100px] pb-20">
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

      {/* ---------- SECTION 3: MOBILE FIRST WITH SCROLLABLE CARDS ---------- */}
      <div className="relative w-full bg-gradient-to-b from-[#F85F73] to-[#2F126D] py-16">
        {/* Gradient Side Faders */}
        <div className="absolute left-0 top-0 h-full w-[60px] z-30 bg-gradient-to-r from-[#4D2C72] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-[60px] z-30 bg-gradient-to-l from-[#4D2C72] to-transparent pointer-events-none"></div>

        {/* Mobile Frame Container */}
        <div className="mx-auto w-full max-w-[360px] min-h-[640px] relative overflow-hidden">
          
          
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 opacity-[0.04]">
            <Image
              src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Pattern.svg"
              alt="Pattern"
              fill
              className="object-cover"
            />
            
          </div>

          {/* Decorative Elements */}
          <div className="absolute z-10 opacity-70 w-[188px] h-[188px] overflow-hidden" style={{ top: "26px", left: "249px" }}>
            <Image
              src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/GerigiUngu.svg"
              alt="Gerigi Ungu"
              width={188}
              height={188}
              className="object-cover w-full h-full"
              priority
            />
          </div>

 


  <div 
    className="absolute z-10 opacity-100 w-[433px] h-[450.64px] overflow-visible"
    style={{ 
      top: "95px",
      left: "-181px",
      
      /* Untuk debugging */
    }}
  >
    {/* Gunakan transform translate untuk menggeser gambar */}
    <div className="relative w-full h-full">
      <Image
        src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/jamEmas_BG.svg"
        alt="Jam Emas"
        fill
        className="object-cover"
        style={{
          transform: "translateX(181px)" /* Mengkompensasi left: -181px */
        }}
        priority
      />
    </div>
  </div>




  

          <div className="absolute z-10 opacity-70 w-[286px] h-[191px] overflow-hidden rotate-15" style={{ top: "494.02px", left: "145px" }}>
            <Image
              src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/RackKuning.svg"
              alt="Rack Kuning"
              width={286}
              height={191}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Main Content */}
          <div className="relative z-20 p-6 flex flex-col h-full">
            {/* Section Header */}
            <div className="text-center mb-4">
              <div className="inline-block relative">
                {/* Outline Layer (gradasi ungu) */}
                <div 
                  className="absolute inset-0 font-[HOMICA] text-[24px] font-black leading-none"
                  style={{
                    WebkitTextStroke: '2px transparent',
                    background: 'linear-gradient(to right, #4D2C72, #6F40A5, #4D2C72)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Bidang Minat
                </div>

                {/* Text Fill Layer (gradasi kuning-putih-kuning) */}
                <div 
                  className="relative font-[HOMICA] text-[24px] font-black leading-none"
                  style={{
                    background: 'linear-gradient(to bottom, #FBD921, #F2E4CE, #FBD921)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Bidang Minat
                </div>
              </div>
            </div>

            {/* Subheader */}
            <div className="text-center mb-8">
              <div className="inline-block relative">
                {/* Outline Layer (gradasi ungu) */}
                <div 
                  className="absolute inset-0 font-[HOMICA] text-[12px] font-black leading-tight"
                  style={{
                    WebkitTextStroke: '1px transparent',
                    background: 'linear-gradient(to right, #4D2C72, #6F40A5, #4D2C72)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  <div>terdapat 5 bidang minat pada</div>
                  <div>Teknik Fisika ITS</div>
                </div>

                {/* Text Fill Layer (gradasi kuning-putih-kuning) */}
                <div 
                  className="relative font-[HOMICA] text-[12px] font-black leading-tight"
                  style={{
                    background: 'linear-gradient(to bottom, #FBD921)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  <div>terdapat 5 bidang minat pada</div>
                  <div>Teknik Fisika ITS</div>
                </div>
              </div>
            </div>

            {/* Cards Container */}
            <div className="relative w-full mb-4 overflow-hidden">
              <div className="relative">
                {/* Cards Slider */}
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  id="cardSlider"
                  style={{ width: '1220px' }} /* 5 cards × (240px + 4px gap) */
                >
                  {[
                    {
                      title: "Rekayasa Instrumentasi",
                      description: "Bidang minat yang mempelajari perancangan dan pengembangan sistem instrumentasi untuk berbagai aplikasi teknik.",
                    },
                    {
                      title: "Rekayasa Energi dan Pengondisian Lingkungan",
                      description: "Bidang minat yang berfokus pada pengembangan dan optimasi sistem energi terbarukan dan efisiensi energi.",
                    },
                    {
                      title: "Rekayasa Bahan",
                      description: "Bidang minat yang berhubungan dengan rancang bangun dan analisis kinerja bahan. Bidang minat ini sangat bergantung pada perkembangan pengetahuan dan terapan bahan di satu sisi dan terapan bahan sesuai sifat serta pemakaiannya di sisi lain.",
                    },
                    {
                      title: "Vibrasi dan Akustik",
                      description: "Bidang minat yang mempelajari pengendalian kebisingan, akustik arsitektur, dan analisis getaran mekanis.",
                    },
                    {
                      title: "Rekayasa Fotonika",
                      description: "Bidang minat yang berhubungan dengan teknologi laser, optik, dan aplikasi fotonika dalam industri.",
                    }
                  ].map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-[240px] mx-[2px]">
                      {/* Border wrapper dengan gradasi dan rounded */}
                      <div className="rounded-lg p-[4px] bg-gradient-to-r from-[#4D2C72] via-[#6F40A5] to-[#4D2C72]">
                        {/* Isi Card */}
                        <div className="relative bg-[#A784CE] rounded-lg h-[360px] p-4 flex flex-col gap-3 overflow-hidden">
                          {/* Lingkaran silang di keempat pojok */}
                          {[
                            { top: 8, left: 8 },
                            { top: 8, right: 8 },
                            { bottom: 8, left: 8 },
                            { bottom: 8, right: 8 },
                          ].map((pos, i) => (
                            <div key={i} className="absolute w-[12px] h-[12px] rounded-full" style={pos}>
                              {/* Lingkaran luar hitam */} 
                              <div className="absolute w-full h-full bg-black rounded-full z-10"></div>

                              {/* Lingkaran merah di dalam (isi tengah) */}
                              <div className="absolute w-[10px] h-[10px] bg-[#F85F73] rounded-full z-20 top-[1px] left-[1px]"></div>

                              {/* Lingkaran putih kecil di kiri bawah */}
                              <div
                                className="absolute bg-[#FCACB6] rounded-full z-30"
                                style={{
                                  width: '7.56px',
                                  height: '7.56px',
                                  top: '2.22px',
                                  left: '1.45px',
                                }}
                              ></div>
                              <div
                                className="absolute bg-[#F1F2F2] rounded-full z-30"
                                style={{
                                  width: '3.95px',
                                  height: '3.95px',
                                  top: '3.8px',
                                  left: '1.8px',
                                }}
                              ></div>

                              {/* Silang hitam (X) di tengah */}
                              <div
                                className="absolute w-full h-full flex items-center justify-center z-40"
                                style={{
                                  fontSize: '10px',
                                  fontWeight: 'bold',
                                  color: 'black',
                                }}
                              >
                                ×
                              </div>
                            </div>
                          ))}

                          {/* Judul */}
                          <h3 
                            className="text-lg font-bold mb-1"
                            style={{
                              background: 'linear-gradient(to bottom, #4D2C72)',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text',
                              color: 'transparent',
                            }}
                          >
                            {card.title}
                          </h3>

                          {/* Deskripsi */}
                          <p className="text-white text-sm flex-grow">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation - Fixed position below cards */}
            <div className="flex items-center justify-center space-x-6 mt-2">
              {/* Left Arrow */}
              <button 
                className="w-8 h-8 rounded-full bg-[#DDF3FF] flex items-center justify-center cursor-pointer hover:bg-[#cce9f5] transition-colors"
                id="prevButton"
              >
                <span className="text-[#78D1FE] font-bold text-lg">&#60;</span>
              </button>

              {/* Dots */}
              <div className="flex space-x-2" id="dotsContainer">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div 
                    key={index}
                    data-index={index}
                    className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${index === 0 ? 'bg-[#78D1FE]' : 'bg-white/30'}`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button 
                className="w-8 h-8 rounded-full bg-[#DDF3FF] flex items-center justify-center cursor-pointer hover:bg-[#cce9f5] transition-colors"
                id="nextButton"
              >
                <span className="text-[#78D1FE] font-bold text-lg">&#62;</span>
              </button>
            </div>
          </div>
        </div>
      </div>

       {/* ---------- SECTION 4: MOBILE FIRST WITH SCROLLABLE CARDS ---------- */}
      <div className="relative w-full bg-gradient-to-b from-[#F85F73] to-[#2F126D] py-16">
        {/* Gradient Side Faders */}
        <div className="absolute left-0 top-0 h-full w-[60px] z-30 bg-gradient-to-r from-[#4D2C72] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-[60px] z-30 bg-gradient-to-l from-[#4D2C72] to-transparent pointer-events-none"></div>

        {/* Mobile Frame Container */}
        <div className="mx-auto w-full max-w-[360px] min-h-[640px] relative overflow-hidden">
          
          
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 opacity-[0.04]">
            <Image
              src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Pattern.svg"
              alt="Pattern"
              fill
              className="object-cover"
            />
            
          </div>

          {/* Decorative Elements */}
          <div className="absolute z-10 opacity-70 w-[188px] h-[188px] overflow-hidden" style={{ top: "26px", left: "249px" }}>
            <Image
              src="https://raw.githubusercontent.com/EPW16-ITS/assets/refs/heads/main/Group%2037378.svg"
              alt="Komponen Atas"
              width={188}
              height={188}
              className="object-cover w-full h-full"
              priority
            />
          </div>
  

          {/* Main Content */}
          <div className="relative z-20 p-6 flex flex-col h-full">
            {/* Section Header */}
            <div className="text-center mb-4">
              <div className="inline-block relative">
                {/* Outline Layer (gradasi ungu) */}
                <div 
                  className="absolute inset-0 font-[HOMICA] text-[24px] font-black leading-none"
                  style={{
                    WebkitTextStroke: '2px transparent',
                    background: 'linear-gradient(to right, #4D2C72, #6F40A5, #4D2C72)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Laboratorium
                </div>

                {/* Text Fill Layer (gradasi kuning-putih-kuning) */}
                <div 
                  className="relative font-[HOMICA] text-[24px] font-black leading-none"
                  style={{
                    background: 'linear-gradient(to bottom, #FBD921, #F2E4CE, #FBD921)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                Laboratorium
                </div>
              </div>
            </div>

            
            

            {/* Cards Container */}
            <div className="relative w-full mb-4 overflow-hidden">
              <div className="relative">
                {/* Cards Slider */}
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  id="cardSlider"
                  style={{ width: '1464px' }} /* 5 cards × (240px + 4px gap) */
                >
                  {[
                    {
                      title: "Rekayasa Instrumentasi",
                      description: "Bidang minat yang mempelajari perancangan dan pengembangan sistem instrumentasi untuk berbagai aplikasi teknik.",
                    },
                    {
                      title: "Rekayasa Energi dan Pengondisian Lingkungan",
                      description: "Bidang minat yang berfokus pada pengembangan dan optimasi sistem energi terbarukan dan efisiensi energi.",
                    },
                    {
                      title: "Rekayasa Bahan",
                      description: "Bidang minat yang berhubungan dengan rancang bangun dan analisis kinerja bahan. Bidang minat ini sangat bergantung pada perkembangan pengetahuan dan terapan bahan di satu sisi dan terapan bahan sesuai sifat serta pemakaiannya di sisi lain.",
                    },
                    {
                      title: "Vibrasi dan Akustik",
                      description: "Bidang minat yang mempelajari pengendalian kebisingan, akustik arsitektur, dan analisis getaran mekanis.",
                    },
                    {
                      title: "Vibrasi dan Akustik",
                      description: "Bidang minat yang mempelajari pengendalian kebisingan, akustik arsitektur, dan analisis getaran mekanis.",
                    },
                    {
                      title: "Rekayasa Fotonika",
                      description: "Bidang minat yang berhubungan dengan teknologi laser, optik, dan aplikasi fotonika dalam industri.",
                    }
                  ].map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-[240px] mx-[2px]">
                      {/* Border wrapper dengan gradasi dan rounded */}
                      <div className="rounded-lg p-[4px] bg-gradient-to-r from-[#4D2C72] via-[#6F40A5] to-[#4D2C72]">
                        {/* Isi Card */}
                        <div className="relative bg-[#A784CE] rounded-lg h-[360px] p-4 flex flex-col gap-3 overflow-hidden">
                          {/* Lingkaran silang di keempat pojok */}
                          {[
                            { top: 8, left: 8 },
                            { top: 8, right: 8 },
                            { bottom: 8, left: 8 },
                            { bottom: 8, right: 8 },
                          ].map((pos, i) => (
                            <div key={i} className="absolute w-[12px] h-[12px] rounded-full" style={pos}>
                              {/* Lingkaran luar hitam */} 
                              <div className="absolute w-full h-full bg-black rounded-full z-10"></div>

                              {/* Lingkaran merah di dalam (isi tengah) */}
                              <div className="absolute w-[10px] h-[10px] bg-[#F85F73] rounded-full z-20 top-[1px] left-[1px]"></div>

                              {/* Lingkaran putih kecil di kiri bawah */}
                              <div
                                className="absolute bg-[#FCACB6] rounded-full z-30"
                                style={{
                                  width: '7.56px',
                                  height: '7.56px',
                                  top: '2.22px',
                                  left: '1.45px',
                                }}
                              ></div>
                              <div
                                className="absolute bg-[#F1F2F2] rounded-full z-30"
                                style={{
                                  width: '3.95px',
                                  height: '3.95px',
                                  top: '3.8px',
                                  left: '1.8px',
                                }}
                              ></div>

                              {/* Silang hitam (X) di tengah */}
                              <div
                                className="absolute w-full h-full flex items-center justify-center z-40"
                                style={{
                                  fontSize: '10px',
                                  fontWeight: 'bold',
                                  color: 'black',
                                }}
                              >
                                ×
                              </div>
                            </div>
                          ))}

                          {/* Judul */}
                          <h3 
                            className="text-lg font-bold mb-1"
                            style={{
                              background: 'linear-gradient(to bottom, #4D2C72)',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text',
                              color: 'transparent',
                            }}
                          >
                            {card.title}
                          </h3>

                          {/* Deskripsi */}
                          <p className="text-white text-sm flex-grow">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation - Fixed position below cards */}
            <div className="flex items-center justify-center space-x-6 mt-2">
              {/* Left Arrow */}
              <button 
                className="w-8 h-8 rounded-full bg-[#DDF3FF] flex items-center justify-center cursor-pointer hover:bg-[#cce9f5] transition-colors"
                id="prevButton"
              >
                <span className="text-[#78D1FE] font-bold text-lg">&#60;</span>
              </button>

              {/* Dots */}
              <div className="flex space-x-2" id="dotsContainer">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <div 
                    key={index}
                    data-index={index}
                    className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${index === 0 ? 'bg-[#78D1FE]' : 'bg-white/30'}`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button 
                className="w-8 h-8 rounded-full bg-[#DDF3FF] flex items-center justify-center cursor-pointer hover:bg-[#cce9f5] transition-colors"
                id="nextButton"
              >
                <span className="text-[#78D1FE] font-bold text-lg">&#62;</span>
              </button>
            </div>
          </div>
        </div>
      </div>



       
    </div>
  );
}


          