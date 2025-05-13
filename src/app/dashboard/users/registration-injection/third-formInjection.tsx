import React from "react"
import Input from "@/components/Input"
import Typography from "@/components/Typography"
import { useFormikContext } from "formik"

interface FormInjectionSecondProps {
    userType: string;
}
export default function SecondformInjectionKuliah({userType}: FormInjectionSecondProps ) {
  

    return (
        <section className="flex flex-col gap-10">
            <Typography.Righteous level={5} className="text-white">Informasi Anggota Tim</Typography.Righteous>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col w-full md:w-1/2">
                    <Input.Text
                        type="text"
                        label="Nama Anggota 1"
                        placeholder="Masukkan nama anggota 1"
                        name="member_1_full_name"
                        required
                    />
                    <Input.Text
                        type="text"
                        label={userType === "SiswaSMA" ? "NISN" : "NIM"}
                        placeholder="Masukkan NIM anggota 1"
                        name="member_1_student_number"
                        required
                    />
                    <Input.Text
                        type="text"
                        label="Nomor Telepon"
                        placeholder="Masukkan nomor telepon anggota 1"
                        name="member_1_phone_number"
                        required
                    />
                    <Input.Text
                        type="email"
                        label="Email Aktif"
                        placeholder="Masukkan email aktif anggota 1"
                        name="member_1_email"
                        required
                    />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                    <Input.Text
                        type="text"
                        label="Nama Anggota 2"
                        placeholder="Masukkan nama anggota 2"
                        name="member_2_full_name"
                        optional="(Optional)"
                    />
                    <Input.Text
                        type="text"
                        label={userType === "SiswaSMA" ? "NISN" : "NIM"}
                        placeholder="Masukkan NIM anggota 2"
                        name="member_2_student_number"
                        optional="(Optional)"
                    />
                    <Input.Text
                        type="text"
                        label="Nomor Telepon"
                        placeholder="Masukkan nomor telepon anggota 2"
                        name="member_2_phone_number"
                        optional="(Optional)"
                    />
                    <Input.Text
                        type="email"
                        label="Email Aktif"
                        placeholder="Masukkan email aktif anggota 2"
                        name="member_2_email"
                        optional="(Optional)"
                    />
                </div>
            </div>
        </section>
    )
}