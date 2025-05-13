import Input from "@/components/Input";
import Typography from "@/components/Typography";
import { FaCloudUploadAlt } from "react-icons/fa";
import fileContext from "../../../../components/fileContext";
interface FormInjectionProps {
  setUploadedFile: (file: {
    [key: string]: File | undefined;
  }) => void
}
export default function RegistMiconPageFive({setUploadedFile}:FormInjectionProps) {
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
          label="Surat Keaslian Karya"
          name="surat_keaslian_karya"
          optional="(seluruh anggota dijadikan satu file)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          context={fileContext}
          onFileChange={setValueUtils}
          filetypes=".pdf"
        >
          Upload
        </Input.Upload>
        <Input.Upload
          label="Surat Bersedia Hadir di Surabaya"
          name="surat_bersedia_hadir_di_surabaya"
          optional="(seluruh anggota dijadikan satu file)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          context={fileContext}
          onFileChange={setValueUtils}
          filetypes=".pdf"
        >
          Upload
        </Input.Upload>
      </div>
    </section>
  );
}
