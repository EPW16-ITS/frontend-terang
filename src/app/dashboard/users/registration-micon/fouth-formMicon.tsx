import Input from "@/components/Input";
import Typography from "@/components/Typography";
import { FaCloudUploadAlt } from "react-icons/fa";
import fileContext from "../../../../components/fileContext";

interface FormInjectionProps {
  setUploadedFile: (file: {
    [key: string]: File | undefined;
  }) => void
}
export default function RegistMiconPageFour({setUploadedFile}:FormInjectionProps) {
  
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
          label="Bukti Follow Akun Instagram EPW"
          name="bukti_follow_ig"
          optional="(seluruh anggota dijadikan satu file)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          context={fileContext}
          onFileChange={setValueUtils}
          filetypes=".zip,.rar"
        >
          Upload
        </Input.Upload>
        <Input.Upload
          label="KTM/Kartu Pelajar"
          name="bukti_kartu_pelajar"
          optional="(seluruh anggota dijadikan satu file)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          context={fileContext}
          onFileChange={setValueUtils}
          filetypes=".zip,.rar"
        >
          Upload
        </Input.Upload>
        <Input.Upload
          label="Bukti Upload Twibbon"
          name="bukti_upload_twibbon"
          optional="(seluruh anggota dijadikan satu file)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          context={fileContext}
          onFileChange={setValueUtils}
          filetypes=".zip, .rar"
        >
          Upload
        </Input.Upload>
      </div>
    </section>
  );
}
