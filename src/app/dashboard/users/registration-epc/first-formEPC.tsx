import fileContext from "@/components/fileContext";
import Input from "@/components/Input";
import Typography from "@/components/Typography";

interface FirstformEPCProps {
  setDropdownChange: (v: { [key: string]: any }) => void;
  setNamaAnggota2NotEmpty: (v: boolean) => void;
}

export default function FirstformEPC({
  setDropdownChange,
  setNamaAnggota2NotEmpty
} : FirstformEPCProps) {
  
  return (
    <section className="flex flex-col gap-10 ">
      <Typography.Righteous level={5} className="text-white">
        Informasi Team
      </Typography.Righteous>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col w-1/2  ">
          <Input.Text
            type="text"
            label="Nama Anggota 1"
            placeholder="Masukkan Informasi Nama Ketua"
            name="member_0_full_name"
            required
            onChange={(e) => {
              if (e.target.value !== "") {
                setNamaAnggota2NotEmpty(true);
              } else {
                setNamaAnggota2NotEmpty(false);
              }
            }}
            
          />
          <Input.Text
            type="text"
            label="No Telepon"
            placeholder="Masukkan Informasi Nomor Telepon"
            name="member_0_phone_number"
            required
          />
          <Input.Text
            type="email"
            label="Email Aktif"
            placeholder="Masukkan Informasi Alamat Instansi"
            name="member_0_email"
            required
          />
          <Input.Text
            type="text"
            label="Asal Sekolah/Instansi"
            placeholder="Masukkan Informasi Alamat Instansi"
            name="member_0_address"
            required
          />
          <Input.Dropdown
            label="Kelas"
            placeholder="Masukkan Informasi Kelas"
            name="member_0_class"
            context={fileContext}
            options={[
              { value: "Kelas X", label: "X" },
              { value: "Kelas XI", label: "XI" },
              { value: "Kelas XII ", label: "XII" },
            ]}
            onDropdownChange={setDropdownChange}
            required
          />

          <Input.Dropdown
            label="Jenis Kelamin"
            placeholder="Masukkan Informasi Jenis Kelamin"
            name="member_0_gender"
            context={fileContext}
            options={[
              { value: "male", label: "Laki-laki" },
              { value: "female", label: "Perempuan" },
            ]}
            onDropdownChange={setDropdownChange}
            required
          />
        </div>
        <div className="flex flex-col w-1/2">
          <Input.Text
            type="text"
            label="Nama Anggota 2"
            placeholder="Masukkan Informasi Nama Ketua"
            name="member_1_name"
            optional="(optional)"
          />
          <Input.Text
            type="text"
            label="No Telepon"
            placeholder="Masukkan Informasi Nomor Telepon"
            name="member_1_phone_number"
            optional="(optional)"
          />
          <Input.Text
            type="email"
            label="Email Aktif"
            placeholder="Masukkan Informasi Alamat Instansi"
            name="member_1_email"
            optional="(optional)"
          />
          <Input.Text
            type="text"
            label="Asal Sekolah/Instansi"
            placeholder="Masukkan Informasi Alamat Instansi"
            name="member_1_address"
            optional="(optional)"
          />
          <Input.Dropdown
            label="Kelas"
            placeholder="Masukkan Informasi Kelas"
            name="member_1_class"
            context={fileContext}
            options={[
              { value: "Kelas X", label: "X" },
              { value: "Kelas XI", label: "XI" },
              { value: "Kelas XII", label: "XII" },
            ]}
            onDropdownChange={setDropdownChange}
          />
          <Input.Dropdown
          context={fileContext}
            label="Jenis Kelamin"
            placeholder="Masukkan Informasi Kelas"
            name="member_1_gender"
            options={[
              { value: "male", label: "Laki-laki" },
              { value: "female", label: "Perempuan" },
            ]}
            onDropdownChange={setDropdownChange}
          />
        </div>
      </div>
    </section>
  );
}
