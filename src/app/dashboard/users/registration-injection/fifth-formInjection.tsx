import Input from "@/components/Input";
import Typography from "@/components/Typography";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useState } from "react";
import  FileContext from "@/components/fileContext";

interface FormInjectionProps {
  setUploadedFile: (file: {
    [key: string]: File | undefined;
  }) => void
}
export default function FourthformInjection({setUploadedFile} : FormInjectionProps) {
  const [file, setFile] = useState<File | null>(null);

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
      <Input.Upload
          label="Upload Abstrak"
          name="abstrak"
          className=""
          optional="(dengan format .pdf dan ukuran maksimal 10MB)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          onFileChange={setValueUtils}
          context={FileContext}
          filetypes=".pdf"
        >
          Upload
        </Input.Upload>
        <Input.Upload
          label="Lembar Orisinalitas"
          name="orisinalitas"
          optional="(dengan format .pdf dan ukuran maksimal 10MB)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          onFileChange={setValueUtils}
          context={FileContext}
          filetypes=".pdf"
        >
          Upload
        </Input.Upload>
      </div>
    </section>
  );
}
