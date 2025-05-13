"use client";
import { APIURL } from "@/services/urls/base";
import Image from "next/image";
import Link from "next/link";
import { FaCog, FaRegTimesCircle, FaSignOutAlt } from "react-icons/fa";
import MenuSidebar from "./menu-sidebar";
import SidebarMobile from "./sidebarMobile";
import { useState, useEffect } from "react";
import { ApiService } from "@/services/apis/api-service";
import { triggerToast } from "@/utilities/toast/toast";
import { useRouter } from "next/navigation";
export default function Sidebar() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const apiService = new ApiService();
  const router = useRouter();
  const handleclosed = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 871);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleClose = () => {
    if (!isLargeScreen) {
      setIsOpen(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleLogout = () => {
    const userDataString = localStorage.getItem("user-credentials")!;
    const userData = JSON.parse(userDataString);

    apiService
      .postWithCsrf(APIURL + "/api/logout", {
        refresh_token: userData.state.token.refresh,
      })
      .then(() => {
        setLoading(true);
        localStorage.removeItem("user-credentials");
        router.push("/login");
        triggerToast({
          message: "Logout Successful",
          type: "success",
          actionLabel: "OK",
          description: "Have a Nice Day!",
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  // console.log(apiService);
  return (
    <>
      <SidebarMobile
        onClick={handleOpen}
        style={{
          top: isOpen ? "0" : "-100%",
          transition: "top 0.5s ease-in-out",
        }}
      />

      <div
        className={`Sidebar ${isOpen || isLargeScreen ? "flex" : "hidden"}`}
        style={{
          transition: "right 0.5s ease-in-out",
          zIndex: 50,
        }}
      >
        <div className="Sidebar-Content-Top">
          <div className="img-content-sidebar">
            <Image
              src="/components/Logo.svg"
              alt="logo"
              width={70}
              height={70}
            />
            <Image
              src="/components/LOGO NEEW.svg"
              alt="logo-caption"
              width={100}
              height={100}
            />
          </div>
          <div className="link-content">
            <MenuSidebar onClose={handleclosed} />
          </div>
        </div>
        <div className="flex flex-row justify-between text-white">
          <button onClick={handleLogout}>
            {loading ? "Logging out..." : <FaSignOutAlt size={20} />}
          </button>
          <button className="text-white lg:hidden flex" onClick={handleClose}>
            <FaRegTimesCircle size={30} />
          </button>
          <Link href={`/dashboard/users/profile`}>
            <FaCog size={20} />
          </Link>
        </div>
      </div>
    </>
  );
}
