
import Input from "@/components/Input";
import Typography from "@/components/Typography";


export default function RegistMiconPageOne() {
    return (

        <section className="flex flex-col gap-10 ">
            <Typography.Righteous level={5} className="text-white">Informasi Team</Typography.Righteous>
            <div className="flex flex-row gap-5">
                <div className="flex flex-col w-1/2  ">
                    <Input.Text
                        type="text"
                        label="Nama Team"
                        placeholder="Masukkan Informasi Nama Ketua"
                        name="team_name"
                        required
                    />
                    <Input.Text
                        type="text"
                        label="Nama Instansi"
                        placeholder="Masukkan Informasi Nama Instansi"
                        name="nama_instansi"
                        required
                    />
                    <Input.Text
                        type="text"
                        label="Alamat Instansi"
                        placeholder="Masukkan Informasi Alamat Instansi"
                        name="alamat_instansi"
                        required
                    />

                </div>
                <div className="flex flex-col w-1/2">
                    <Input.Text
                        type="text"
                        label="Nama Ketua"
                        placeholder="Masukkan Informasi Nama Ketua"
                        name="member_0_full_name"
                        required
                    />
                    <Input.Text
                        type="text"
                        label="NISN"
                        placeholder="Masukkan Informasi NISN"
                        name="member_0_student_number"
                        required
                    />
                    <Input.Text
                        type="text"
                        label="Nomor Telepon"
                        placeholder="Masukkan Informasi Nomor Telepon"
                        name="member_0_phone_number"
                        required
                    />
                    <Input.Text
                        type="email"
                        label="Email Aktif"
                        placeholder="Masukkan Informasi Email Aktif"
                        name="member_0_email"
                        required
                    />
                </div>
            </div>
        </section>


    )
}