import Typography from "@/components/Typography";
import Input from "@/components/Input";
import{FaCloudUploadAlt} from "react-icons/fa";
import fileContext from "@/components/fileContext";
export default function SecondformEphyfestWorkshop() {
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
          label="Bukti Pembayaran"
          name="Bukti_Pembayaran_WO"
          optional="(seluruh anggota dijadikan satu file)"
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
