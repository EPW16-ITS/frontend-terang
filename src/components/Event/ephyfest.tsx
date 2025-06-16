import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
const Ephyfest = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="relative w-full sm:h-[900px] xs:h-[800px] md:h-[900px] lg:h-[1024px] overflow-hidden bg-gradient-to-b from-primary-200 from-20% bg-[#1C1C4B] to-50%">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 justify-center items-center m-auto">
          <Typography.Poppins
            level={3}
            size="lg"
            className="z-40 text-white text-center"
          >
            Ini adalah Ephyfest
          </Typography.Poppins>
        </div>
      </div>
    </div>
  );
};

export default Ephyfest;
