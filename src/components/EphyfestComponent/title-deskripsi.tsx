"use client";

import Typography from "@/components/Typography";

export default function TitleDeskripsi() {
    return (
        <div>
            {/* Teks Ephyfest dan Deskripsi */}
            <div className="relative border-2 border-green-400 mx-[10%]">
                <Typography.Homica
                level={5}
                className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#F85F73] to-[#037CB8] text-center text-6xl leading-tight z-10"
                style={{
                    WebkitTextStroke: "2px rgb(var(--color-primary-100))"
                }}
                >
                EPHYFEST
                </Typography.Homica>
                <div className="relative w-full h-full border border-rose-700">
                    <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/ephyfest-GerigiBiru.svg"
                    className="absolute w-[80%] h-[80%] top-0 left-0 -translate-x-[48%] -translate-y-[46%] z-0 opacity-50"
                    />
                    <Typography.Poppins
                    level={10}
                    className="relative text-primary-100 text-left text-base bg-fifth-50 p-[5%] border-2 border-primary-25 z-10"
                    style={{
                    borderRadius: '0 50px 0 50px' // Sudut kanan atas dan kiri bawah rounded
                    }}
                    >
                    EPHYFEST atau Engineering Physics Festival merupakan sebuah acara tahunan yang bertujuan untuk memperkenalkan Departemen Teknik Fisika kepada masyarakat luas, khususnya kepada pelajar, mahasiswa, dan khalayak umum yang tertarik dengan dunia rekayasa dan teknologi. Pada tahun ini, EPHYFEST 16 hadir dengan dua sub-event utama, yaitu Main Event dan Closing Event.
                    </Typography.Poppins>
                    <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-BautMin2.svg"
                    className="absolute w-3 h-3 top-0 left-0 translate-x-1 translate-y-1 rotate-45 z-20"/>
                    <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-BautMin2.svg"
                    className="absolute w-3 h-3 bottom-0 right-0 -translate-x-1 -translate-y-1 -rotate-45 z-20"/>
                    <img
                    src="https://raw.githubusercontent.com/EPW16-ITS/assets/main/homepage-GerigiPink.svg"
                    className="absolute w-[80%] h-[80%] bottom-0 right-0 translate-x-[48%] translate-y-[46%] z-0 opacity-50 -rotate-[15deg]"
                    />
                </div>  
            </div>
        </div>
    );
}