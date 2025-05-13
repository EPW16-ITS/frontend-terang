import Input from "@/components/Input";
import Typography from "@/components/Typography";
import { useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import FileContext from "@/components/fileContext";

interface FormInjectionProps {
  setUploadedFile: (file: {
    [key: string]: File|undefined;
  }) => void
}

export default function ThirdformInjection({setUploadedFile} : FormInjectionProps) {
  // const [values, setValues] = useState<File[]>();
  // const formData = new FormData();

  const setValueUtils = (x: {
    [key: string]: File | undefined;
  }) => {
    setUploadedFile(x);
  }

  // console.log("Submitting files:", values.files);
  return (
    <section className="flex flex-col gap-10">
      <Typography.Righteous level={5} className="text-white">
        Pengiriman Bukti
      </Typography.Righteous>
      <div className="flex flex-col w-1/2  ">
        <Input.Upload
          label="Bukti Follow Akun Instagram EPW"
          name="bukti_follow_ig"
          className=""
          optional="(seluruh anggota dijadikan satu file  dengan format .zip atau .rar, ukuran maksimal 10MB)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          onFileChange={setValueUtils}
          filetypes=".zip,.rar"
          context={FileContext}
        >
          Upload
        </Input.Upload>
        <Input.Upload
          label="KTM/Kartu Pelajar"
          name="bukti_kartu_pelajar"
          optional="(seluruh anggota dijadikan satu file  dengan format .zip atau .rar, ukuran maksimal 10MB)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          onFileChange={setValueUtils}
          filetypes=".zip"
          context={FileContext}
        >
          Upload
        </Input.Upload>
        <Input.Upload
          label="Bukti Upload Twibbon"
          name="bukti_upload_twibbon"
          optional="(seluruh anggota dijadikan satu file  dengan format .zip atau .rar, ukuran maksimal 10MB)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          filetypes=".zip,.rar"
          onFileChange={setValueUtils}
          context={FileContext}
        >
          Upload
        </Input.Upload>
      </div>
    </section>
  );
}
