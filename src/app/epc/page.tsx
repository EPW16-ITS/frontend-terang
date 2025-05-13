"use client";
import Typography from "@/components/Typography";

export default function EPC() {
  return (
    <div>
      {/* Main Content */}
      <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-primary-200 from-20% bg-[#1C1C4B] to-50%">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center m-auto">
          <Typography.Poppins
            level={3}
            size="lg"
            className="z-40 text-white text-center"
          >
            Ini adalah EPC
          </Typography.Poppins>
        </div>
      </div>
    </div>
  );
}