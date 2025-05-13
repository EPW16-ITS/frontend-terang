import React from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import Typography from "@/components/Typography";
import Button from "@/components/Button";

type ToastType = "success" | "error" | "info" | "warning" | "error[]";

interface ToastProps {
  description: string;
  message: any;
  type: ToastType;
  autoClose?: number|false; // tak tambahi dan cek isok gak gawe autoclose ~ arpan
  position?: ToastOptions["position"];
  showCloseButton?: boolean;
  customIcon?: JSX.Element; // New prop for custom icons
  onClickAction?: () => void; // Optional action like "Undo" button
  actionLabel?: string; // Label for the optional action button
}

const Toast: React.FC = () => {
  return <ToastContainer />;
};

export const triggerToast = ({
  description,
  message,
  type,
  autoClose = 5000,
  position = "top-right",
  showCloseButton = true,
  onClickAction,
  actionLabel,
}: ToastProps) => {
  const options: ToastOptions = {
    position,
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: showCloseButton,
  };

  const renderContent = () => (
    <div className="flex items-start gap-5">
      <div className="ml-3 ">
        <Typography.Poppins level={9} size="base" className="mb-1">
          {message}
        </Typography.Poppins>
        <Typography.Poppins level={10} size="sm" className="pt-3">
          {description}
        </Typography.Poppins>
        {/* {onClickAction && actionLabel && (
          <Button.Primary type="default" tabIndex={5} size="base" className="flex" onClick={onClickAction}>
            {actionLabel}
          </Button.Primary>
        )} */}
      </div>
    </div>
  );

  // tak ubah cek isok return id e ~ arpan
  switch (type) {
    case "success":
      return toast.success(renderContent(), options);
    case "error":
      return toast.error(renderContent(), options);
    case "info":
      return toast.info(renderContent(), options);
    case "warning":
      return toast.warning(renderContent(), options);
    default:
      toast(renderContent(), options);
  }
};

export default Toast;
