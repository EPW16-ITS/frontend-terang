// components/WithNavbar.tsx
"use client";
import NavbarItem from "@/components/Layout/Navbar";
import { usePathname } from "next/navigation";

export default function WithNavbar() {
  const pathname = usePathname();
  const allowedRoutes = ["/about", "/", "/event", "/register"];

  return allowedRoutes.includes(pathname) ? <NavbarItem /> : null;
}
