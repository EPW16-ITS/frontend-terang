import fileContext from "@/components/fileContext";
import Input from "@/components/Input";
import Typography from "@/components/Typography";

interface SecondformEPCProps {
  setDropdownChange: (v: { [key: string]: any }) => void;
}

export default function SecondformEPC({
  setDropdownChange,
} : SecondformEPCProps) {
  return (
    <section className="flex flex-col gap-10 ">
      <Typography.Righteous level={5} className="text-white">
        Informasi Pendamping
      </Typography.Righteous>
      <div className="flex flex-col w-1/2">
        <Input.Text
          type="text"
          label="Nama Pendamping"
          placeholder="Masukkan Informasi Nama Pendamping"
          name="dospem_name"
          required
        />
        <Input.Text
          type="text"
          label="Nomor Telepon"
          placeholder="Masukkan Informasi Nomor Telepon"
          name="dospem_phone_number"
          required
        />
        <Input.Text
          type="email"
          label="Email Aktif"
          placeholder="Masukkan Informasi Email Aktif"
          name="dospem_email"
          required
        />
        <Input.Text
          type="text"
          label="Asal Sekolah/Instansi"
          placeholder="Masukkan Informasi Asal Sekolah/Instansi"
          name="dospem_address"
          required
        />
        <Input.Dropdown
          label="Jenis Kelamin"
          placeholder="Masukkan Informasi Kelas"
          name="dospem_gender"
          context={fileContext}
          onDropdownChange={setDropdownChange}
          options={[
            { value: "male", label: "Laki-laki" },
            { value: "female", label: "Perempuan" },
          ]}          
          required
          
        />
      </div>
    </section>
  );
}
