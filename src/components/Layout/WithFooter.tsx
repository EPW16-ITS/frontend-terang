// components/WithFooter.tsx
"use client";
import FooterItem from "@/components/Layout/Footer";
import { usePathname } from "next/navigation";

export default function WithFooter() {
  const pathname = usePathname();
  const allowedRoutes = ["/about", "/", "/event", "/register"];

  return allowedRoutes.includes(pathname) ? <FooterItem /> : null;
}
