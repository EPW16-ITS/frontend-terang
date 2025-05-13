import Typography from "@/components/Typography";
import Input from "@/components/Input";

export default function FirstformTryout() {
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
            name="Nama_Lengkap_TO"
            required
          />
          <Input.Text
            type="text"
            label="No Telepon"
            placeholder="Masukkan Informasi Nomor Telepon"
            name="No_Telepon_TO"
            required
          />
          <Input.Text
            type="email"
            label="Email Aktif"
            placeholder="Masukkan Informasi Alamat Instansi"
            name="Email_TO"
            required
          />
          <Input.Text
            type="text"
            label="Usia"
            placeholder="Masukkan Informasi Usia"
            name="Usia_TO"
            required
          />
          <Input.Text
            label="Asal Sekolah/Instansi"
            placeholder="Masukkan Informasi asal Sekolah/Instansi"
            name="Asal_Sekolah_Instansi_TO"
            type="text"
            required
            optional='Jika Gap year, ketik "Gap Year"'
          />
        </div>
    </section>
  );
}
