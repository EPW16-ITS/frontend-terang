"use client";
import { useMultistepForm } from "@/components/hooks/useMultistepForm";
import Typography from "@/components/Typography";

import Button from "@/components/Button";
import { useAtom, useSetAtom } from "jotai";
import { registrationStatusAtom} from "@/stores/atom";
import * as Yup from "yup";;
import { Formik, Form } from "formik";
import { triggerToast } from "@/utilities/toast/toast";
import FileContext from "@/components/fileContext";
import { useRouter } from "next/navigation";
import { ApiService } from "@/services/apis/api-service";
import { useState } from "react";
import FirstformEPC from "./first-formEPC";
import SecondformEPC from "./second-formEPC";
import ThirdformEPC from "./third-formEPC";
import FourthformEPC from "./fourth-formEPC";
import { buffer } from "stream/consumers";
import { toast } from "react-toastify";
interface FormValues {
  member_0_full_name: string;
  member_0_phone_number: string;
  member_0_email: string;
  member_0_address: string;
  member_0_class: string;
  member_0_gender: string;
  member_1_full_name: string;
  member_1_phone_number: string;
  member_1_email: string;
  member_1_address: string;
  member_1_class: string;
  member_1_gender: string;
  dospem_name: string;  
  dospem_phone_number: string;
  dospem_email: string;
  dospem_address:string;
  dospem_gender:string;
  bukti_pembayaran: File | null;
  member_0_bukti_kartu_pelajar: File | null;
  member_1_bukti_kartu_pelajar: File | null;
  bukti_upload_twibbon: File | null;
}

export default function MultistepFormMicon() {
  const [lastStep, setLastStep] = useState<boolean>(false);
  const setRegistrationStatus = useSetAtom(registrationStatusAtom);
  const [uploadedFiles, setuploadedFiles] = useState<
    {
      [key: string]: File|string;
    }[]
  >();
  const [namaAnggota2NotEmpty, setNamaAnggota2NotEmpty] = useState<boolean>(false);
  const router = useRouter();
  
  const handleSubmit = async (values: FormValues, { setFieldError }: any) => {
    
    let bukti_pemabayaran_is_exist = false;
    uploadedFiles?.forEach((f) => {
      if ("bukti_upload_pembayaran" in f) {
        bukti_pemabayaran_is_exist = true;
      }
    });
    // console.log(uploadedFiles)
    if (!uploadedFiles || uploadedFiles.length < 3 && !bukti_pemabayaran_is_exist) {
      triggerToast({
        type: "error",
        message: "Mohon lengkapi semua file yang diperlukan",
        description: "Pastikan semua file yang diperlukan sudah diupload",
      });
      return;
    }
    const formData = new FormData();

    // formData.append("team_name", values.team)

    // Add member 0 details
    formData.append("members[0][full_name]", values.member_0_full_name);
    formData.append(
      "members[0][phone_number]",
      values.member_0_phone_number
    );
    formData.append("members[0][email]", values.member_0_email);
    formData.append(
      "members[0][address]",
      values.member_0_address
    );
    formData.append(
      "members[0][kelas]",
      values.member_0_class
    );
    formData.append(
      "members[0][gender]",
      values.member_0_gender
    );

    if(values.member_1_full_name){
      formData.append("members[1][full_name]", values.member_1_full_name);
    }
    if(values.member_1_phone_number)
    formData.append(
      "members[1][phone_number]",
      values.member_1_phone_number
    );
    if(values.member_1_email){
      formData.append("members[1][email]", values.member_1_email);
    }
    if(values.member_1_address){
      formData.append(
        "members[1][address]",
        values.member_1_address
      );
    }
    if(values.member_1_class){
      formData.append(
        "members[1][kelas]",
        values.member_1_class
      );
    }
    if(values.member_1_gender){
      formData.append(
        "members[1][gender]",
        values.member_1_gender
      );
    }

    // Add dospem details
    formData.append("dospem[name]", values.dospem_name);
    formData.append("dospem[phone_number]", values.dospem_phone_number);
    formData.append("dospem[email]", values.dospem_email);
    formData.append("dospem[address]", values.dospem_address);
    formData.append("dospem[gender]", values.dospem_gender);

  
    // Add file uploads (if they exist)
    uploadedFiles.forEach((f) => {
      if ("bukti_upload_pembayaran" in f) {
        formData.append("bukti_upload_pembayaran", f.bukti_upload_pembayaran);
      }
      if ("member_0_bukti_kartu_pelajar" in f) {
        formData.append("members[0][bukti_kartu_pelajar]", f.member_0_bukti_kartu_pelajar);
      }
      if ("member_1_bukti_kartu_pelajar" in f && values.member_1_full_name) {
        formData.append("members[1][bukti_kartu_pelajar]", f.member_1_bukti_kartu_pelajar);
      }
      if ("bukti_upload_twibbon" in f) {
        formData.append("bukti_upload_twibbon", f.bukti_upload_twibbon);
      }
    });

    // // Send the FormData using fetch or your ApiService
    // // show toast to indicate that the data is being sent
    let k = triggerToast({
      type: "info",
      message: "Mengirimkan data",
      description: "Mohon tunggu sebentar",
      autoClose: false,
    });
    const apiService = new ApiService();
    apiService.postWithCsrf("/api/epc/register", formData).then((msg) => {   
      // console.log("msg", msg)
      toast.dismiss(k);   
      if (msg.success) {
        router.push("/dashboard/users");
        setRegistrationStatus((prev) => ({
          ...prev,
          epc:true,
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
       

       
      }
    });
  };

  const setDropdownChange = (x: { [key: string]: any }) => {
    // console.log(v);
    const newFiles = [...(uploadedFiles || [])];
    const xkey = Object.keys(x)[0];
    let fileAlreadyExist = false;
  
    newFiles.forEach((v) => {
      const key = Object.keys(x)[0];
      if (key === xkey) {
          v[key] = x[key] as string;
        fileAlreadyExist = true;
      }
    });
  
    if (!fileAlreadyExist) {
      newFiles.push(x as { [key: string]: string });
    }
  
    setTimeout(() => {
      setuploadedFiles(newFiles);
    }, 1000);
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

  const _setNamaAnggota2NotEmpty = (v: boolean) => {
    setNamaAnggota2NotEmpty(v);
  }
  
  
  const { steps, currentStepIndex, next, prev, isFirstStep, isLastStep, step } =
    useMultistepForm([
      <FirstformEPC  key={1} setDropdownChange={setDropdownChange} setNamaAnggota2NotEmpty={setNamaAnggota2NotEmpty} />,
      <SecondformEPC key={2} setDropdownChange={setDropdownChange}/>,
      <ThirdformEPC key={3} setUploadedFile={setFileValueUtils} namaAnggota2NotEmpty={namaAnggota2NotEmpty}/>,
      <FourthformEPC key={4} setUploadedFile={setFileValueUtils} />,
    ]);

  
  const handleNext = async (validateForm: any, setTouched: any) => {
    setTouched({
      "member_0_full_name": true,
      "member_0_phone_number": true,
      "member_0_email": true,
      "member_0_address": true,
      "member_0_class": true,
      "member_0_gender": true,
      "member_1_full_name": true,
      "member_1_phone_number": true,
      "member_1_email": true,
      "member_1_address": true,
      "member_1_class": true,
      "member_1_gender": true,
      dospem_name: true,
      dospem_phone_number: true,
      dospem_email: true,
      dospem_address: true,
      dospem_gender: true,
      bukti_upload_twibbon: null,
      bukti_pembayaran: null,
      "member_0_bukti_kartu_pelajar": null,
      "member_1_bukti_kartu_pelajar": null,
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

    console.log(lastStep)
  };
  
  const validationSchema = ((cur_step, last) => {
    if (cur_step == 0) {
      return Yup.object({
        member_0_full_name: Yup.string().required("Nama anggota 1 harus diisi"),
        member_0_phone_number: Yup.string()
          .required("Nomor telepon anggota 1 harus diisi")
          .matches(/^[0-9]+$/, "Nomor telepon tidak valid"),
        member_0_email: Yup.string()
          .email("Email tidak valid")
          .required("Email anggota 1 harus diisi"),    
        member_0_address: Yup.string().required("Alamat anggota 1 harus diisi"),
        member_0_class: Yup.string().required("Kelas anggota  1 harus diisi"),
        member_0_gender: Yup.string().required("Jenis kelamin anggota 1 harus diisi"),
             // Optionally, if there is a member 3, you can add validations similarly
             member_1_full_name: Yup.string(),
             member_1_student_number: Yup.string().matches(
               /^[0-9]+$/,
               "Nomor Induk tidak valid"
             ),
              member_1_phone_number: Yup.string().matches(
                /^[0-9]+$/,
                "Nomor telepon tidak valid"
              ),  
              member_1_email: Yup.string().email("Email tidak valid"),
              member_1_address: Yup.string(),
              member_1_class: Yup.string(),
      });
    } else if (cur_step == 1) {
      return Yup.object({
       dospem_name: Yup.string().required("Nama dosen pembimbing harus diisi"),
        dospem_phone_number: Yup.string()
          .required("Nomor telepon dosen pembimbing harus diisi")
          .matches(/^[0-9]+$/, "Nomor telepon tidak valid"),
        dospem_email: Yup.string()
          .email("Email tidak valid")
          .required("Email dosen pembimbing harus diisi"),
        dospem_address: Yup.string().required("Alamat dosen pembimbing harus diisi"),
        dospem_gender: Yup.string().required("Jenis kelamin dosen pembimbing harus diisi")
      });
    }
  })(currentStepIndex, isLastStep);

  return (
    <Formik
      initialValues={{
        member_0_full_name: "",
        member_0_phone_number: "",
        member_0_email: "",
        member_0_address: "",
        member_0_class: "",
        member_0_gender: "",
        member_1_full_name: "",
        member_1_phone_number: "",
        member_1_email: "",
        member_1_address: "",
        member_1_class: "",
        member_1_gender: "",
        dospem_name: "",
        dospem_phone_number: "",
        dospem_email: "",
        dospem_address: "",
        dospem_gender: "",
        bukti_pembayaran: null,
        member_0_bukti_kartu_pelajar: null,
        member_1_bukti_kartu_pelajar: null,
        bukti_upload_twibbon: null,

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
