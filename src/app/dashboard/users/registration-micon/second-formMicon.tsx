
import Input from "@/components/Input";
import Typography from "@/components/Typography";


export default function RegistMiconPageTwo() {
    return (

        <section className="flex flex-col gap-10">
            <Typography.Righteous level={5} className="text-white">Informasi Team</Typography.Righteous>
            <div className="flex flex-row gap-5">
                <div className="flex flex-col w-1/2  ">
                    <Input.Text
                        type="text"
                        label="Nama Anggota 1"
                        placeholder="Masukkan Informasi Nama Ketua"
                        name="member_1_full_name"
                        required
                    />
                    <Input.Text
                        type="text"
                        label="NISN"
                        placeholder="Masukkan Informasi NISN"
                        name="member_1_student_number"
                        required
                    />

                </div>
                <div className="flex flex-col w-1/2">
                    <Input.Text
                        type="text"
                        label="Nama Anggota 2"
                        placeholder="Masukkan Informasi Nama Ketua"
                        name="member_2_full_name"
                        optional="(optional)"
                    />
                    <Input.Text
                        type="text"
                        label="NISN"
                        placeholder="Masukkan Informasi NISN"
                        name="member_2_student_number"
                        optional="(optional)"
                    />
                </div>
            </div>
        </section>


    )
}