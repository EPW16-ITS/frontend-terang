import Typography from "@/components/Typography";
import Input from "@/components/Input";
import { FaCloudUploadAlt } from "react-icons/fa";
import fileContext from "@/components/fileContext";
export default function FirstformEphyfest() {
  return (
    <section className="flex flex-col gap-10 ">
      <Typography.Righteous level={5} className="text-white">
        Informasi Individu
      </Typography.Righteous>
      <div className="flex flex-col w-1/2  ">
        <Input.Text
          type="text"
          label="Nama Lengkap"
          placeholder="Masukkan Informasi Nama Ketua"
          name="Nama_Anggota_WO"
          required
        />
        <Input.Text
          type="text"
          label="No Telepon"
          placeholder="Masukkan Informasi Nomor Telepon"
          name="No_Telepon_WO"
          required
        />
        <Input.Text
          type="email"
          label="Email Aktif"
          placeholder="Masukkan Informasi Alamat Instansi"
          name="Email_WO"
          required
        />
        <Input.Text
          label="Asal Instansi"
          placeholder="Masukkan Informasi asal Sekolah/Instansi"
          name="Asal_Instansi_WO"
          type="text"
          required
        />

        <Input.Upload
          label="Kartu Pelajar"
          name="Upload_KTM_WO"
          required
          prefix={<FaCloudUploadAlt size={25} color="text-white" />}
          onFileChange={(files) => console.log("Submitting files:", files)}
          context={fileContext}
        >
          Upload
        </Input.Upload>
      </div>
    </section>
  );
}
