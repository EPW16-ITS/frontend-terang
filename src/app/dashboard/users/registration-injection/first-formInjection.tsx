"use client"

import Typography from "@/components/Typography"
import { triggerToast } from "@/utilities/toast/toast";
interface FormInjectionProps {
    userType: string
    setUserType: (userType: string) => void
}


export default function FormInjection({ userType, setUserType }:FormInjectionProps) {

    
    return (
        <div className="flex flex-col gap-5 h-full w-full">
            <Typography.Righteous level={5} className="text-white">Opsi Team</Typography.Righteous>
            <div className="flex flex-col gap-2 ">
                <label className="flex flex-row gap-3">
                    <input
                        type="radio"
                        name="userType"
                        value="sma"
                        checked={userType === "sma"}
                        onChange={(e) => setUserType(e.target.value)}
                            
                    />
                    <Typography.Poppins className="text-white" level={8} size="sm" >Siswa SMA</Typography.Poppins>
                </label>
                <label className="flex flex-row gap-3">
                    <input
                        type="radio"
                        name="userType"
                        value="mahasiswa"
                        checked={userType === "mahasiswa"}
                        onChange={(e) => setUserType(e.target.value)}
                    />
                      <Typography.Poppins className="text-white" level={8} size="sm" >Mahasiswa</Typography.Poppins>
                </label>
            </div>
        </div>
    )
}
