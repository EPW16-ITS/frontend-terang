import Input from "@/components/Input";
import Typography from "@/components/Typography";
import { FaCloudUploadAlt } from "react-icons/fa";
import fileContext from "@/components/fileContext";

interface FormInjectionProps {
  setUploadedFile: (file: {
    [key: string]: File | undefined;
  }) => void
}

export default function FourthformEPC({setUploadedFile} : FormInjectionProps) {
  const setValueUtils = (x: {
    [key: string]: File | undefined;
  }) => {
    setUploadedFile(x);
  }
  return (
    <section className="flex flex-col gap-10 ">
      <Typography.Righteous level={5} className="text-white">
        Pengiriman Bukti
      </Typography.Righteous>
      <div className="flex flex-col w-1/2  ">
        <div className="mb-5">
          <Typography.Poppins level={9} size="lg" className="text-white mb-3">
            Informasi Pembayaran
          </Typography.Poppins>
          <Typography.Poppins level={9} size="lg" className="text-white mb-1">
            No rekening: 1400023904700
          </Typography.Poppins>
          <Typography.Poppins level={9} size="lg" className="text-white">
            A.N REGINA PUTRI SETIANI (Bank Mandiri)
          </Typography.Poppins>
        </div>
        <Input.Upload
          context={fileContext}
          label="Bukti Pembayaran"
          name="bukti_upload_pembayaran"
          optional="(dalam format .pdf, ukuran maksimal 5MB)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          onFileChange={setValueUtils}
          filetypes=".pdf"
        >
          Upload
        </Input.Upload>
      </div>
    </section>
  );
}
