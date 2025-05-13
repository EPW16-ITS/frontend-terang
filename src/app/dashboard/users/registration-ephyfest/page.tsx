"use client";
import { useMultistepForm } from "@/components/hooks/useMultistepForm";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import FirstformTryout from "./first-formTryout";
import SecondformTryout from "./second-formTryout";
import FirstformEphyfest from "./first-formEphyfestWorkshop";

import {
  Formik,
  Form,
  FormikErrors,
  FormikValues,
  FormikTouched,
} from "formik";
import SecondformEphyfestWorkshop from "./second-formEphyfestWorkshop";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
const validationSchemas = [
  Yup.object({
    Nama_Lengkap_TO: Yup.string().required("Nama Lengkap harus diisi"),
    No_Telepon_TO: Yup.string().required("No Telepon harus diisi"),
    Email_TO: Yup.string()
      .email("Email tidak valid")
      .required("Email harus diisi"),
    Usia_TO: Yup.string().required("Usia harus diisi"),
    Asal_Sekolah_Instansi_TO: Yup.string().required(
      "Asal Sekolah/Instansi harus diisi"
    ),
    Nama_Lengkap_WO: Yup.string().required("Nama Lengkap harus diisi"),
    No_Telepon_WO: Yup.string().required("No Telepon harus diisi"),
    Asal_Instansi_WO: Yup.string().required("Asal Instansi harus diisi"),
    Email_WO: Yup.string()
      .email("Email tidak valid")
      .required("Email harus diisi"),
    Upload_KTM_WO: Yup.mixed().required("Upload KTM harus diisi"),
  }),
  Yup.object({
    Bukti_Pembayaran_WO: Yup.mixed().required("Bukti Pembayaran harus diisi"),
    Upload_KTM_TO: Yup.mixed().required("Upload KTM harus diisi"),
    Bukti_Follow_IG_TO: Yup.mixed().required("Bukti Follow IG harus diisi"),
    Bukti_Like_Share_TO: Yup.mixed().required("Bukti Share Post harus diisi"),
    Bukti_Mention_TO: Yup.mixed().required("Bukti Mention harus diisi"),
  }),
];
export default function MultistepFormEphyfest() {
  
  const handleEvent =
    process.env.NEXT_PUBLIC_EPHYFEST_EVENT_ISTRYOUT === "false";
  const router = useRouter();
  const { steps, currentStepIndex, next, prev, isFirstStep, isLastStep, step } =
    useMultistepForm([
      handleEvent ? <FirstformTryout key={1} /> : <FirstformEphyfest key={1} />,
      handleEvent ? (
        <SecondformTryout key={2} />
      ) : (
        <SecondformEphyfestWorkshop key={2} />
      ),
    ]);

  const handleNext = async (
    validateForm: () => Promise<FormikErrors<FormikValues>>,
    setTouched: (touched: FormikTouched<FormikValues>) => void
  ) => {
    setTouched({
      Nama_Lengkap_WO: true,
      Nama_Lengkap_TO: true,
      No_Telepon_TO: true,
      Email_TO: true,
      Usia_TO: true,
      Asal_Sekolah_Instansi_TO: true,
      No_Telepon_WO: true,
      Asal_Instansi_WO: true,
      Email_WO: true,
      Upload_KTM_WO: true,
      Bukti_Pembayaran_WO: true,
      Upload_KTM_TO: true,
      Bukti_Follow_IG_TO: true,
      Bukti_Like_Share_TO: true,
      Bukti_Mention_TO: true,
    });

    const errors = await validateForm();
    if (Object.keys(errors).length === 0) {
      next();
    }
  };

  return (
    <>
      <Formik
        validationSchema={validationSchemas[currentStepIndex]}
        onSubmit={(values, { setSubmitting }) => {
          if (isLastStep) {
            router.push("/dashboard/users/registration-ephyfest/success");
            console.log("Form selesai:", values);
          } else {
            next();
            prev();
          }
          setSubmitting(false);
        }}
        initialValues={{
          Nama_Lengkap_TO: "",
          Nama_Lengkap_WO: "",
          No_Telepon_TO: "",
          Email_TO: "",
          Usia_TO: "",
          Asal_Sekolah_Instansi_TO: "",
          No_Telepon_WO: "",
          Asal_Instansi_WO: "",
          Email_WO: "",
          Upload_KTM_WO: "",
          Bukti_Pembayaran_WO: "",
          Upload_KTM_TO: "",
          Bukti_Follow_IG_TO: "",
          Bukti_Like_Share_TO: "",
          Bukti_Mention_TO: "",
        }}
        className=""
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
              {step}
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
                  buttonType="button"
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
    </>
  );
}
