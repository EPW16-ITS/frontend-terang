"use client";
import { FormikErrors, FormikTouched, FormikValues } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useMultistepForm } from "@/components/hooks/useMultistepForm";
import ThirdformInjection from "./fourth-formInjection";
import FourthformInjection from "./fifth-formInjection";
import FormInjection from "./first-formInjection";
import FormInjectionKuliah from "./second-formInjection";
import SecondformInjectionKuliah from "./third-formInjection";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import { ApiService } from "@/services/apis/api-service";
import  { triggerToast } from "@/utilities/toast/toast";
import FileContext from "@/components/fileContext";
import { toast } from "react-toastify";
import { useSetAtom } from "jotai";
import { registrationStatusAtom } from "@/stores/atom";
interface FormValues {
  kategori: string;
  team_name: string;
  nama_instansi: string;
  alamat_instansi: string;
  member_0_full_name: string;
  member_0_student_number: string;
  member_0_phone_number: string;
  member_0_email: string;
  member_1_full_name: string;
  member_1_student_number: string;
  member_1_phone_number: string;
  member_1_email: string;
  member_2_full_name: string;
  member_2_student_number: string;
  member_2_phone_number: string;
  member_2_email: string;
  pembimbing_name: string;
  pembimbing_phone_number: string;
  bukti_kartu_pelajar: File | null;
  bukti_follow_ig: File | null;
  bukti_upload_twibbon: File | null;
  abstrak: File | null;
  orisinalitas: File | null;
}

export default function InjectionRegist() {
  const [lastStep, setLastStep] = useState<boolean>(false);

  const [userType, setUserType] = useState<string>("");
  const [uploadedFiles, setuploadedFiles] = useState<{
    [key: string]: File;
  }[]>([]);
  const router = useRouter();
const setIsRegistered = useSetAtom(registrationStatusAtom);
  const handleSubmit = async (values: FormValues, { setFieldError }: any) => {

    if (!uploadedFiles || uploadedFiles.length < 3) {
      triggerToast({
        type: "error",
        message: "Mohon lengkapi semua file yang diperlukan",
        description: "Pastikan semua file yang diperlukan sudah diupload",
      });
      return;
    }
    const formData = new FormData();
    // Add basic fields
    formData.append("kategori", userType);
    formData.append("team_name", values.team_name);
    formData.append("nama_instansi", values.nama_instansi);
    formData.append("alamat_instansi", values.alamat_instansi);

    // Add member 0 details
    formData.append("members[0][full_name]", values.member_0_full_name);
    formData.append("members[0][student_number]", values.member_0_student_number);
    formData.append("members[0][phone_number]", values.member_0_phone_number);
    formData.append("members[0][email]", values.member_0_email);

    // Add member 1 details
    formData.append("members[1][full_name]", values.member_1_full_name);
    formData.append("members[1][student_number]", values.member_1_student_number);
    formData.append("members[1][phone_number]", values.member_1_phone_number);
    formData.append("members[1][email]", values.member_1_email);

    // Add member 2 details
    if (values.member_2_full_name)
    formData.append("members[2][full_name]", values.member_2_full_name);
    if (values.member_2_student_number)
    formData.append("members[2][student_number]", values.member_2_student_number);
    if (values.member_2_phone_number)
    formData.append("members[2][phone_number]", values.member_2_phone_number);
    if (values.member_2_email)
    formData.append("members[2][email]", values.member_2_email);

    // Add dospem (supervisor) fields
    formData.append("dospem[name]", values.pembimbing_name);
    formData.append("dospem[phone_number]", values.pembimbing_phone_number);

    // Add file uploads (if they exist)

    uploadedFiles.forEach(f => {
      if ('bukti_kartu_pelajar' in f) {
        formData.append("bukti_kartu_pelajar", f.bukti_kartu_pelajar);
      }
      if ('bukti_follow_ig' in f) {
        formData.append("bukti_follow_ig", f.bukti_follow_ig);
      }

      if ('bukti_upload_twibbon' in f) {
        formData.append("bukti_upload_twibbon", f.bukti_upload_twibbon);
      }

      if ('abstrak' in f) {
        formData.append("abstrak", f.abstrak);
      }

      if ('orisinalitas' in f) {
        formData.append("orisinalitas", f.orisinalitas);
      }
      
    });
    
    // Send the FormData using fetch or your ApiService
    // show toast to indicate that the data is being sent
    const t = triggerToast({
      type: "info",
      message: "Mengirimkan data",
      description: "Mohon tunggu sebentar",
      autoClose: false
    });
    const apiService = new ApiService();
    // console.log(apiService)
    apiService.postWithCsrf("/api/injection/register", formData)
    .then((msg) => {
      toast.dismiss(t);
      if (msg.success) {
        router.push("/dashboard/users");
        setIsRegistered((prev) => ({
          ...prev,
          injection: true,
        }))
        triggerToast({
          type: "success",
          message: msg.message,
          description: msg.submessage,
        });
       
      } else {
        // console.log(msg.message);
        triggerToast({
          type: "error",
          message: msg.message,
          description: msg.submessage,
        });

        // if (msg.message.errors) {
        //   for (let key in msg.message.errors) {
        //     setFieldError(key, msg.message.errors[key]);
        //   }
        // }
      }
    });
  };

  const setFileValueUtils = (x: { [key: string]: File | undefined }) => {
    const newFiles = [...(uploadedFiles || [])];
    const xkey = Object.keys(x)[0];
    let fileAlreadyExist = false;
  
    newFiles.forEach((v) => {
      const key = Object.keys(v)[0];
      if (key === xkey) {
          v[key] = x[key] as File;
        fileAlreadyExist = true;
      }
    });
  
    if (!fileAlreadyExist) {
      newFiles.push(x as { [key: string]: File });
    }
  
    setuploadedFiles(newFiles);
  };
  

  const { steps, currentStepIndex, next, prev, isFirstStep, isLastStep, step } =
    useMultistepForm([
      <FormInjection key={1} userType={userType} setUserType={setUserType} />,
      <FormInjectionKuliah key={2} userType={userType} />,
      <SecondformInjectionKuliah key={3} userType={userType} />,
      <ThirdformInjection key={4} setUploadedFile={setFileValueUtils} />,
      <FourthformInjection key={5} setUploadedFile={setFileValueUtils} />,
    ]);

  const validationSchema = ((cur_step, last) => {
    if (cur_step == 1) {
      return Yup.object({
        team_name: Yup.string().required("Nama tim harus diisi"),
        nama_instansi: Yup.string().required("Nama instansi harus diisi"),
        alamat_instansi: Yup.string().required("Alamat instansi harus diisi"),
        pembimbing_name: Yup.string().required(
          "Nama dosen pembimbing harus diisi"
        ),
        pembimbing_phone_number: Yup.string().required(
          "Nomor telepon dosen pembimbing harus diisi"
        )
        .matches(/^[0-9]+$/, "Nomor telepon tidak valid") ,
        member_0_full_name: Yup.string().required("Nama anggota 1 harus diisi"),
        member_0_student_number: Yup.string().required(
          "Nomor Induk anggota 1 harus diisi"
        ).matches(/^[0-9]+$/, "Nomor Induk tidak valid"),
        member_0_phone_number: Yup.string().required(
          "Nomor telepon anggota 1 harus diisi"
        )
        .matches(/^[0-9]+$/, "Nomor telepon tidak valid") ,
        member_0_email: Yup.string()
          .email("Email tidak valid")
          .required("Email anggota 1 harus diisi"),
      });
    } else if (cur_step == 2) {
      return Yup.object({
        member_1_full_name: Yup.string().required("Nama anggota 2 harus diisi"),
        member_1_student_number: Yup.string().required(
          "Nomor Induk anggota 2 harus diisi"
        ).matches(/^[0-9]+$/, "Nomor tidak valid"),
        member_1_phone_number: Yup.string().required(
          "Nomor telepon anggota 2 harus diisi"
        )
        .matches(/^[0-9]+$/, "Nomor telepon tidak valid") ,
        member_1_email: Yup.string()
          .email("Email tidak valid")
          .required("Email anggota 2 harus diisi"),

        // Optionally, if there is a member 3, you can add validations similarly
        member_2_full_name: Yup.string(),
        member_2_student_number: Yup.string().matches(/^[0-9]+$/, "Nomor Induk tidak valid") ,
        member_2_phone_number: Yup.string().matches(/^[0-9]+$/, "Nomor telepon tidak valid") ,
        member_2_email: Yup.string().email("Email tidak valid"),
      });
    }
  })(currentStepIndex, isLastStep);

  const handleNext = async (
    validateForm: (values?: any) => Promise<FormikErrors<FormikValues>>,
    setTouched: React.Dispatch<
      React.SetStateAction<FormikTouched<FormikValues>>
    >
  ) => {
    setTouched({
      nama_team: true,
      nama_instansi: true,
      alamat_instansi: true,
      members: true,
      "members.0.full_name": true,
      " members.0.student_number": true,
      "members.0.phone_number": true,
      "members.0.email": true,
      "members.1.full_name": true,
      "members.1.student_number": true,
      "members.1.phone_number": true,
      "members.1.email": true,
      pembimbing: true,
      pembimbing_name: true,
      pembimbing_phone_number: true,
      bukti_kartu_pelajar: true,
      bukti_follow_ig: true,
      bukti_upload_twibbon: true,
      abstrak: true,
      orisinalitas: true,
    });

    if (currentStepIndex < 3) {
      const errors = await validateForm();
      if (Object.keys(errors).length === 0) {
        next();
      } else {
        // console.log(errors);
      }
    } else {
      next();
    }
  };

  const ValidationSchema = () => {
    if (!userType) {
      return Yup.object(); // return empty schema
    }
    if (currentStepIndex === 0) {
      return Yup.object();
    }
    if (currentStepIndex >= 1 && currentStepIndex < 3) {
      return validationSchema;
    }
    return Yup.object();
  };
  return (
    <Formik
      initialValues={{
        kategori: "",
        team_name: "",
        nama_instansi: "",
        alamat_instansi: "",
        member_0_full_name: "",
        member_0_student_number: "",
        member_0_phone_number: "",
        member_0_email: "",
        member_1_full_name: "",
        member_1_student_number: "",
        member_1_phone_number: "",
        member_1_email: "",
        // Optionally, if there is a member 3, you can add validations similarly
        member_2_full_name: "",
        member_2_student_number: "",
        member_2_phone_number: "",
        member_2_email: "",
        pembimbing_name: "",
        pembimbing_phone_number: "",
        bukti_kartu_pelajar: null,
        bukti_follow_ig: null,
        bukti_upload_twibbon: null,
        abstrak: null,
        orisinalitas: null,
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting,  setFieldError}) => {
        // console.log(currentStepIndex, isLastStep, lastStep);
        if (lastStep) {
          handleSubmit(values, { setFieldError });
          setLastStep(false);
          return;
        }
        if (isLastStep) {
          setLastStep(true);
        } else {
          // next();
          setSubmitting(false);
          // prev();
        }
      }}
    >
      {({ validateForm, setTouched }) => (
        <Form>
          <div className="flex flex-col justify-center px-5">
            <Typography.Poppins
              level={8}
              size="sm"
              className="flex justify-end text-white"
            >
              {currentStepIndex + 1} / {steps.length}
            </Typography.Poppins>

            <FileContext.Provider value={uploadedFiles || []}>
            {step}
            </FileContext.Provider>

            <div className="flex flex-row justify-end gap-2">
              {!isFirstStep && (
                <Button.Secondary className="flex w-32" onClick={prev} buttonType="button" >
                  Prev
                </Button.Secondary>
              )}

              <Button.Secondary
                className="flex w-32"
                onClick={() => handleNext(validateForm, setTouched as any)}
                disabled={!userType}
                buttonType="submit"
              >
                {isLastStep ? "Finish" : "Next"}
              </Button.Secondary>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
