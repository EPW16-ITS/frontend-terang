
import "@/styles/tailwind.css";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import WithNavbar from "@/components/Layout/WithNavbar";
import WithFooter from "@/components/Layout/WithFooter";

export const metadata: Metadata = {
  title: "EPW 16",
  description: "EPW 16 WEBSITES",
  keywords: "EPW",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/components/Logo.svg" />
      <body>
        <WithNavbar/>
        <main>{children}</main>
        <WithFooter />
      </body>
    </html>
  );
}
