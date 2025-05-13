"use client";

import React from "react";
import { FieldArray, useFormikContext } from "formik";
import Typography from "@/components/Typography";
import Input from "@/components/Input";

interface FormInjectionFirstProps {
  userType: string;
}

export default function FormInjectionKuliah({ userType }: FormInjectionFirstProps) {

  return (
    <section className="flex flex-col gap-10">
      <Typography.Righteous level={5} className="text-white">
        {userType === "SiswaSMA" ? "Informasi Tim SMA" : "Informasi Tim Mahasiswa"}
      </Typography.Righteous>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col w-full md:w-1/2">
          <Input.Text
            type="text"
            label="Nama Tim"
            placeholder="Masukkan nama tim"
            name="team_name"
            required
          />
          <Input.Text
            type="text"
            label={userType === "SiswaSMA" ? "Nama Sekolah" : "Nama Instansi"}
            placeholder={`Masukkan nama ${userType === "SiswaSMA" ? "sekolah" : "Instansi"}`}
            name="nama_instansi"
            required
          />
          <Input.Text
            type="text"
            label={userType === "SiswaSMA" ? "Alamat Sekolah" : "Alamat Instannsi"}
            placeholder={`Masukkan alamat ${userType === "SiswaSMA" ? "sekolah" : "instansi"}`}
            name="alamat_instansi"
            required
          />
          <Input.Text
            type="text"
            label={userType === "SiswaSMA" ? "Nama Guru Pembimbing" : "Nama Dosen Pembimbing"}
            placeholder={`Masukkan nama ${userType === "SiswaSMA" ? "guru" : "dosen"} pembimbing`}
            name="pembimbing_name"
            required
          />
          <Input.Text
            type="text"
            label={`No Tlp. ${userType === "SiswaSMA" ? "Guru" : "Dosen"} Pembimbing`}
            placeholder={`Masukkan no. telp ${userType === "SiswaSMA" ? "guru" : "dosen"} pembimbing`}
            name="pembimbing_phone_number"
            required
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
            
          <Input.Text
            type="text"
            label="Nama Ketua"
            placeholder="Masukkan nama ketua tim"
            name="member_0_full_name"
            required
          />
          <Input.Text
            type="text"
            label={userType === "SiswaSMA" ? "NISN" : "NIM"}
            placeholder={`Masukkan ${userType === "SiswaSMA" ? "NISN" : "NIM"} ketua tim`}
            name="member_0_student_number"
            required
          />
          <Input.Text
            type="text"
            label="Nomor Telepon"
            placeholder="Masukkan nomor telepon ketua tim"
            name="member_0_phone_number"
            required
          />
          <Input.Text
            type="email"
            label="Email Aktif"
            placeholder="Masukkan email aktif ketua tim"
            name="member_0_email"
            required
          />
        </div>
      </div>
    </section>
  );
}