"use client";
import React, { Context, useContext, useRef, useState } from "react";
import Typography from "@/components/Typography";
import { FaRegTimesCircle, FaXRay } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

interface InputUploadProps {
  children: React.ReactNode;
  size?: "sm" | "base" | "lg";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  name: string;
  className?: string;
  style?: React.CSSProperties;
  label: string;
  required?: boolean;
  optional?: string;
  filetypes?: string;
  iconOnly?: boolean;
  disabled?: boolean;
  onFileChange: (files: { [key: string]: File | undefined }) => void;
  context: Context<
    {
      [key: string]: any ;
    }[]
  >;
}

export default function InputUpload({
  children,
  size = "base",
  prefix,
  suffix,
  name,
  className = "",
  style = {},
  label,
  required = false,
  optional = "",
  iconOnly = false,
  onFileChange,
  context,
  filetypes,
  disabled = false
}: InputUploadProps): React.ReactElement {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [buttonError, setButtonError] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  
  const uploadedFiles = useContext(context);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log(files)
    console.log(uploadedFiles)
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      onFileChange({ [name]: fileArray[0] });
    } 
  };

  const handleRemoveFile = (fileName: string) => {
    // const updatedFiles = uploadedFiles.filter((file) => file[name]?.name !== fileName);
    setSelectedFiles(selectedFiles.filter((file) => file.name !== fileName));
    onFileChange({ [name]: undefined });

    if(fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const isNameInUploadedFiles = uploadedFiles.some((file) => file[name]);

  return (
    <div className={`mb-3 ${className}`} style={style}>
      <div className="w-full flex flex-col justify-between items-start gap-3">
        <label htmlFor={`inputfor-${name}`}>
          <Typography.Poppins
            as="span"
            level={9}
            size="base"
            className="input-label"
          >
            {label}
            {required && label && (
              <span className="text-accent-error-500"> *</span>
            )}
            <span className="text-2xs font-light ml-1 text-accent-error-500">
              {optional}
            </span>
          </Typography.Poppins>
        </label>

        <button
          type="button"
          onClick={handleButtonClick}
          className={`flex justify-center items-center text-white border-[2px] border-white rounded-full py-3 px-8 ${
            buttonError ? "border-red-500" : ""
          }`}
        >
          {!iconOnly && prefix && <span className={`mr-2`}>{prefix}</span>}
          <span className={`text-${size}`}>{children}</span>
          {!iconOnly && suffix && <span className={`ml-2`}>{suffix}</span>}
        </button>

        <input
          type="file"
          name={name}
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={filetypes ?? "*"}
          className="hidden"
          disabled={disabled}
        />

        {isNameInUploadedFiles && (
          <div className="mt-5 rounded-3xl text-white border-[2px] border-white p-4">
            <Typography.Poppins as="div" level={7} size="sm">
              <strong>Uploaded Files:</strong>
            </Typography.Poppins>
            <ul>
              {uploadedFiles.map((file, index) => {
                if (file[name]) {
                  return (
                    <li key={index} className="text-white mb-2 text-sm flex justify-between items-center">
                      {file[name].name}
                      <button
                        type="button"
                        onClick={() => handleRemoveFile(file[name].name)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        <FaRegTimesCircle size={30}/>
                      </button>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}