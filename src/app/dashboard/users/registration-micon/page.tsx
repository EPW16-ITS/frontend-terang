"use client";
import { useMultistepForm } from "@/components/hooks/useMultistepForm";
import Typography from "@/components/Typography";
import RegistMiconPageOne from "./first-formMicon";
import Button from "@/components/Button";
import RegistMiconPageTwo from "./second-formMicon";
import RegistMiconPageThree from "./third-formMicon";
import * as Yup from "yup";
import RegistMiconPageFour from "./fouth-formMicon";
import RegistMiconPageFive from "./fifth-formMicon";
import { Formik, Form } from "formik";
import { triggerToast } from "@/utilities/toast/toast";
import FileContext from "@/components/fileContext";
import { useRouter } from "next/navigation";
import { ApiService } from "@/services/apis/api-service";
import { useState } from "react";
import { error } from "console";
import { registrationStatusAtom} from "@/stores/atom";
import { useSetAtom } from "jotai";
import { toast } from "react-toastify";
interface FormValues {
  team_name: string;
  nama_instansi: string;
  alamat_instansi: string;
  member_0_full_name: string;
  member_0_student_number: string;
  member_0_phone_number: string;
  member_0_email: string;
  member_1_full_name: string;
  member_1_student_number: string;
  member_2_full_name: string;
  member_2_student_number: string;
  bukti_kartu_pelajar: File | null;
  bukti_follow_ig: File | null;
  bukti_upload_twibbon: File | null;
  surat_keaslian_karya: File | null;
  surat_bersedia_hadir_di_surabaya: File | null;
}

export default function MultistepFormMicon() {
  const [lastStep, setLastStep] = useState<boolean>(false);
  const setIsRegistered = useSetAtom(registrationStatusAtom);
  const [uploadedFiles, setuploadedFiles] = useState<
    {
      [key: string]: File;
    }[]
  >();
  const router = useRouter();
  const handleSubmit = async (values: FormValues, { setFieldError }: any) => {

    if (!uploadedFiles || uploadedFiles.length < 6) {
     
      triggerToast({
        type: "error",
        message: "Mohon lengkapi semua file yang diperlukan",
        description: "Pastikan semua file yang diperlukan sudah diupload",
      });
      return;
    }
    const formData = new FormData();
    // Add basic fields
    formData.append("team_name", values.team_name);
    formData.append("nama_instansi", values.nama_instansi);
    formData.append("alamat_instansi", values.alamat_instansi);

    // Add member 0 details
    formData.append("members[0][full_name]", values.member_0_full_name);
    formData.append(
       "members[0][nisn]",
      values.member_0_student_number
    );
    formData.append("phone_number", values.member_0_phone_number);
    formData.append("email", values.member_0_email);
    // Add member 1 details
    formData.append("members[1][full_name]", values.member_1_full_name);
    formData.append(
      "members[1][nisn]",
      values.member_1_student_number
    );

    // Add member 2 details
    if (values.member_2_full_name)
      formData.append("members[2][full_name]", values.member_2_full_name);
    if (values.member_2_student_number)
      formData.append(
        "members[2][nisn]",
        values.member_2_student_number
      );
    // Add file uploads (if they exist)
    uploadedFiles.forEach((f) => {
      if ("Bukti_Pembayaran" in f) {
        formData.append("bukti_pembayaran", f.Bukti_Pembayaran);
      }
      if ("bukti_kartu_pelajar" in f) {
        formData.append("bukti_kartu_pelajar", f.bukti_kartu_pelajar);
      }
      if ("bukti_follow_ig" in f) {
        formData.append("bukti_follow_ig", f.bukti_follow_ig);
      }

      if ("bukti_upload_twibbon" in f) {
        formData.append("bukti_upload_twibbon", f.bukti_upload_twibbon);
      }

      if ("surat_keaslian_karya" in f) {
        formData.append("orisinalitas", f.surat_keaslian_karya);
      }

      if ("surat_bersedia_hadir_di_surabaya" in f) {
        formData.append("komitmen", f.surat_bersedia_hadir_di_surabaya);
      }
    });

    // // Send the FormData using fetch or your ApiService
    // // show toast to indicate that the data is being sent
    const t = triggerToast({
      type: "info",
      message: "Mengirimkan data",
      description: "Mohon tunggu sebentar",
      autoClose: false,
    });
    const apiService = new ApiService();
    apiService.postWithCsrf("/api/micon/register", formData).then((msg) => {      
      toast.dismiss(t);
      if (msg.success) {
        router.push("/dashboard/users");
        setIsRegistered((prev) => ({
          ...prev,
          micon: true,
        }))
        triggerToast({
          type: "success",
          message: msg.message,
          description: msg.submessage,
        });
      } else {
        if (typeof msg.message === 'object') {
          let messages_ : string[] = []
          Object.keys(msg.message).forEach((key) => {
            messages_.push(msg.message[key])
          });
          triggerToast({
            type: "error",
            message: "terdapat kesalahan",
            description: messages_.join(),
          })
        } else {
          triggerToast({
            type: "error",
            message: msg.message,
            description: msg.cod !== 428 ? msg.submessage : "please try again",
          });
        }
        // triggerToast({
        //   type: "error",
        //   message: msg.message,
        //   description: msg.submessage,
        // });

       
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
      <RegistMiconPageOne key={1} />,
      <RegistMiconPageTwo key={2} />,
      <RegistMiconPageThree key={3} setUploadedFile={setFileValueUtils} />,
      <RegistMiconPageFour key={4} setUploadedFile={setFileValueUtils} />,
      <RegistMiconPageFive key={5} setUploadedFile={setFileValueUtils} />,
    ]);
  const handleNext = async (validateForm: any, setTouched: any) => {
    setTouched({
      nama_team: true,
      nama_instansi: true,
      alamat_instansi: true,
      members: true,
      "members_0_full_name": true,
      " members_0_student_number": true,
      "members_0_phone_number": true,
      "members_0_email": true,
      "members_1_full_name": true,
      "members_1_student_number": true,
      bukti_pembayaran: true,
      bukti_kartu_pelajar: true,
      bukti_follow_ig: true,
      bukti_upload_twibbon: true,
      surat_keaslian_karya: true,
      surat_bersedia_hadir_di_surabaya: true,
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

    if (isLastStep) {
      
      setLastStep(true);
    } 
    else if (lastStep) {
      setLastStep(false)
    }
   
  };
  
  const validationSchema = ((cur_step, last) => {
    if (cur_step == 0) {
      return Yup.object({
        team_name: Yup.string().required("Nama tim harus diisi"),
        nama_instansi: Yup.string().required("Nama instansi harus diisi"),
        alamat_instansi: Yup.string().required("Alamat instansi harus diisi"),
        member_0_full_name: Yup.string().required("Nama anggota 1 harus diisi"),
        member_0_student_number: Yup.string()
          .required("Nomor Induk anggota 1 harus diisi")
          .matches(/^[0-9]+$/, "Nomor Induk tidak valid"),
        member_0_phone_number: Yup.string()
          .required("Nomor telepon anggota 1 harus diisi")
          .matches(/^[0-9]+$/, "Nomor telepon tidak valid"),
        member_0_email: Yup.string()
          .email("Email tidak valid")
          .required("Email anggota 1 harus diisi"),
      });
    } else if (cur_step == 1) {
      return Yup.object({
        member_1_full_name: Yup.string().required("Nama anggota 2 harus diisi"),
        member_1_student_number: Yup.string()
          .required("Nomor Induk anggota 2 harus diisi")
          .matches(/^[0-9]+$/, "Nomor tidak valid"),
        // Optionally, if there is a member 3, you can add validations similarly
        member_2_full_name: Yup.string(),
        member_2_student_number: Yup.string().matches(
          /^[0-9]+$/,
          "Nomor Induk tidak valid"
        ),
      });
    }
  })(currentStepIndex, isLastStep);

  return (
    <Formik
      initialValues={{
        team_name: "",
        nama_instansi: "",
        alamat_instansi: "",
        member_0_full_name: "",
        member_0_student_number: "",
        member_0_phone_number: "",
        member_0_email: "",
        member_1_full_name: "",
        member_1_student_number: "",
        // Optionally, if there is a member 3, you can add validations similarly
        member_2_full_name: "",
        member_2_student_number: "",
        bukti_pembayaran: null,
        bukti_kartu_pelajar: null,
        bukti_follow_ig: null,
        bukti_upload_twibbon: null,
        surat_keaslian_karya: null,
        surat_bersedia_hadir_di_surabaya: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
  
        
        if (lastStep) {
          handleSubmit(values, { setFieldError });
          setLastStep(false);
          return;
        }
        if (isLastStep) {
          
          setLastStep(true);
        } 
        else {
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
                <Button.Secondary
                  type="default"
                  buttonType="button"
                  className="flex w-32"
                  onClick={prev}
                >
                  Prev
                </Button.Secondary>
              )}

              <Button.Secondary
                type="default"
                buttonType={lastStep ? "submit" : "button"}
                className="flex w-32"
                onClick={() => handleNext(validateForm, setTouched)}
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
