"use client";
import Sidebar from "@/app/dashboard/components/Sidebar";
import ComingSoonDashboard from "../components/comingsoon/page";
import { triggerToast } from "@/utilities/toast/toast";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
// import ComingSoon from "@/components/CommingSoon";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showDashboard, setShowDashboard] = useState(false);
  const [isComingSoon, setIsComingSoon] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const comingSoonPages = [
      "/dashboard/users",
      // "/dashboard/users/registration-micon",
      "/dashboard/users/registration-injection",
      // "/dashboard/users/registration-ephyfest",
      // "/dashboard/users/registration-epc",
    ];

    if (typeof window !== "undefined") {
      const usercredentials = localStorage.getItem("user-credentials");
      if (usercredentials == null || usercredentials == undefined) {
        router.prefetch("/login");
        router.replace("/login");
        triggerToast({
          message: "Please Login First",
          type: "error",
          actionLabel: "OK",
          description: "You need to login first to access this page",
        });
      } else {
        setShowDashboard(true);
      }

      // Set "Coming Soon" status hanya untuk halaman registrasi tertentu
      setIsComingSoon(!comingSoonPages.includes(pathname));
      // console.log(comingSoonPages.includes(pathname));
    }
  }, [router, pathname]);
  // console.log(isComingSoon);
  return showDashboard ? (
    <section className="dashboard">
      <nav className="">
        <Sidebar />
      </nav>
      <div className="dashboard-content">
        {isComingSoon ? <ComingSoonDashboard /> : children}
      </div>
    </section>
  ) : null;
}
