"use client"
import Image from "next/image"
import Typography from "@/components/Typography"


import Button from "@/components/Button"
import { FaUser } from "react-icons/fa";
import { ApiService } from "@/services/apis/api-service";
import { AiFillSave } from "react-icons/ai"
import { useEffect, useState } from "react";
import FormGroup from "@/components/Input/FormGroup";
import Input from "@/components/Input";
import * as Yup from "yup";


export default function ProfileUser() {

    const [userData, setUserData] = useState<any>({
        firstName: "",
        lastName: "",
        email: "",
        photo: false,
        password: "",
        confirm_password: ""
    })


  

    const validationSchema = Yup.object().shape({
        Nama_Depan: Yup.string()
          .required("First Name is Required")
          .max(128, "Name must be less than 128 character"),
        Nama_Belakang: Yup.string()
          .required("Last Name is Required")
          .max(128, "Name must be less than 128 character"),
        Email: Yup.string()
          .email()
          .required("Email is Required")
          .max(320, "Email must be less than 128 character"),
        Password: Yup.string()
        .min(8, "Password mustbe atleast 8 character")
          .concat(
            Yup.string().matches(/(?=.*[0-9])/, "Password must contain a number")
          )
          .concat(
            Yup.string().matches(
              /(?=.*[a-z])/,
              "Passwohrd must contain a lowercase letter"
            )
          )
          .concat(
            Yup.string().matches(
              /(?=.*[A-Z])/,
              "Password must contain a uppercase letter"
            )
          )
          .concat(
            Yup.string().matches(
              /(?=.*[!@#$%^&*])/,
              "Password must contain a special character"
            )
          )
          // concat must not empty
          .required("Password is Required")
          ,
          confirm_password: Yup.string()
              .required("Confirm password is required")
              .oneOf([Yup.ref("password")], "Confirm password does not match"),
      });
    return (
        <section className=" flex flex-col w-full">
            <Typography.Sirukota level={5} className="text-fourtiary-200">MY PROFILE</Typography.Sirukota>
            <Image src={`/dashboard/vector 2.svg`} alt="logo" width={300} height={300} className="absolute right-0 top-0" />
            <Image src={`/dashboard/vector 3.svg`} alt="logo" width={300} height={300} className="absolute right-0 top-0" />
            <section className="relative flex flex-col  bg-primary-400 bg-opacity-55 rounded-3xl w-full z-50">
                <div className="bg-accent-neutral-800 flex flex-row rounded-2xl mx-5 my-3 gap-3 py-4 px-6  justify-between">
                    <div className="flex flex-row gap-5 items-center">
                        {userData.photo ? <Image src={`/components/Ellipse 200 4.svg`} alt="logo" fill />
                            :
                            <div className="w-24 h-24 rounded-full bg-accent-neutral-500 relative">
                                <FaUser size={50} className="absolute top-5 left-5 md:top-6 md:left-6" color="white" />
                            </div>
                        }
                        <div className="flex flex-col  gap-3 ">
                            {userData.firstName ?
                                <Typography.Poppins size="lg" level={7} className="text-accent-neutral-300">
                                    {userData.firstName}
                                </Typography.Poppins> :
                                <Typography.Poppins size="lg" level={7} className="text-accent-neutral-300">
                                    Nama
                                </Typography.Poppins>
                            }
                            {userData.work ?
                                <Typography.Poppins size="base" level={8} className="text-accent-neutral-700">
                                    {userData.work}
                                </Typography.Poppins> :
                                <Typography.Poppins size="base" level={8} className="text-accent-neutral-700">
                                    Pekerjaan
                                </Typography.Poppins>
                            }
                            {userData.Address ?
                                <Typography.Poppins size="sm" level={8} className="text-accent-neutral-600">
                                    {userData.Address}
                                </Typography.Poppins> :
                                <Typography.Poppins size="sm" level={8} className="text-accent-neutral-600">
                                    Alamat Rumah
                                </Typography.Poppins>
                            }

                        </div>
                    </div>
                </div>
                <div className="bg-accent-neutral-800 flex flex-col rounded-2xl mx-5 my-3 gap-3 py-4 px-6">
                    <div className="flex flex-row w-full justify-between">
                        <Typography.Poppins size="sm" level={5} className="text-white">
                            Account Information
                        </Typography.Poppins>
                    </div>
                    <FormGroup
                        initialValues={{
                            Nama_Depan: userData.firstName,
                            Email: userData.email,
                            Nama_Belakang: userData.lastName,
                        }}
                        onSubmit={(values) => console.log(values)}
                        validationSchema={validationSchema}

                    >
                        <div className="flex  flex-col  w-full ">
                            <div className="flex lg:flex-row flex-col lg:gap-10  w-full ">
                                <Input.Text
                                    name="firstName"
                                    type="text"
                                    label="First Name"
                                    placeholder="Input your firstName"
                                    className="w-full"
                                />
                                <Input.Text
                                    name="lastName"
                                    type="text"
                                    label="Last Name"
                                    placeholder="Input yout lastName"
                                    className="w-full"
                                />

                            </div>
                            <Input.Text
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="Input your email"
                                className="w-full"
                            />
                        </div>
                    </FormGroup>
                </div>
                <div className="bg-accent-neutral-800 flex flex-col rounded-2xl mx-5 my-3 gap-3 py-4 px-6">
                    <div className="flex flex-row w-full justify-between">
                        <Typography.Poppins size="sm" level={5} className="text-white">
                            Password
                        </Typography.Poppins>
                    </div>
                    <div className="w-full ">
                        <FormGroup
                            initialValues={{
                                Password: userData.password,
                                confirm_password: userData.confirm_password,
                            }}
                            onSubmit={(values) => console.log(values)}
                            validationSchema={validationSchema}
                        >
                            <div className="flex lg:flex-row flex-col lg:gap-10 w-full ">
                                <Input.Password
                                    size="base"
                                    name="password"
                                    label="Password"
                                    required
                                    placeholder="Input Your Password"
                                    tabIndex={1}
                                    className="w-full"
                                />
                                <Input.Password
                                    size="base"
                                    name="confirm_password"
                                    label="Confirm Password"
                                    required
                                    placeholder="Confirm Your Password"
                                    tabIndex={2}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex justify-end mt-4">
                                <Button.Secondary
                                    type="default"
                                    buttonType={`submit`}
                                    suffix={<AiFillSave size={20} />}
                                    className=""
                                >
                                    Save
                                </Button.Secondary>
                            </div>
                        </FormGroup>
                    </div>
                </div>
            </section>
        </section>
    );
}
