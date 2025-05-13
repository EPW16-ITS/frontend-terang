import Input from "@/components/Input";
import Typography from "@/components/Typography";
import { FaCloudUploadAlt } from "react-icons/fa";
import fileContext from "@/components/fileContext";

interface FormInjectionProps {
  setUploadedFile: (file: {
    [key: string]: File | undefined
    ;
  }) => void,
  namaAnggota2NotEmpty: boolean|undefined
}

export default function ThirdformEPC({setUploadedFile, namaAnggota2NotEmpty} : FormInjectionProps) {
  
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
          label="Kartu Pelajar Anggota 1"
          name="member_0_bukti_kartu_pelajar"
          required
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          onFileChange={setValueUtils}
          context={fileContext}
          filetypes=".pdf"
        >
          Upload
        </Input.Upload>
        <Input.Upload
          label="Kartu Pelajar Anggota 2"
          name="member_1_bukti_kartu_pelajar"
          optional="(optional)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          onFileChange={setValueUtils}
          context={fileContext}
          filetypes=".pdf"
          // className={`${}`}
        >
          Upload
        </Input.Upload>
        <Input.Upload
          label="Bukti Upload Twibbon"
          name="bukti_upload_twibbon"
          required
          optional="(seluruh anggota dijadikan satu file dengan format .zip atau .rar, ukuran maksimal 10MB)"
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          onFileChange={setValueUtils}
          filetypes=".zip,.rar"
          context={fileContext}
        >
          Upload
        </Input.Upload>
      </div>
    </section>
  );
}
