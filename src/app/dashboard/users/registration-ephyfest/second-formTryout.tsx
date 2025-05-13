import Typography from "@/components/Typography";
import Input from "@/components/Input";
import { FaCloudUploadAlt } from "react-icons/fa";
import fileContext from "@/components/fileContext";
export default function SecondformTryout() {
  return (
    <section className="flex flex-col gap-10 ">
      <Typography.Righteous level={5} className="text-white">
        Pengiriman Bukti
      </Typography.Righteous>
      <div className="flex flex-col w-1/2  ">
        <Input.Upload
          label="Kartu Pelajar"
          name="Upload_KTM_TO"
          required
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          context={fileContext}
          onFileChange={(files) => console.log("Submitting files:", files)}
        >
          Upload
        </Input.Upload>
        <Input.Upload
          label="Bukti Follow IG @epwits dan @tekfis_its"
          name="Bukti_Follow_IG_TO"
          required
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          context={fileContext}
          onFileChange={(files) => console.log("Submitting files:", files)}
        >
          Upload
        </Input.Upload>
        <Input.Upload
          label="Bukti Like and Share post ini ke story IG kamu"
          name="Bukti_Like_Share_TO"
          required
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          context={fileContext}
          onFileChange={(files) => console.log("Submitting files:", files)}
        >
          Upload
        </Input.Upload>
        <Input.Upload
          label="Bukti Mention 5 orang teman dan tambahkan hashtag #TOEPW15"
          name="Bukti_Mention_TO"
          required
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          context={fileContext}
          onFileChange={(files) => console.log("Submitting files:", files)}
        >
          Upload
        </Input.Upload>
      </div>
    </section>
  );
}
