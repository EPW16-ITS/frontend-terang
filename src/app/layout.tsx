import "@/styles/tailwind.css";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // pastikan import css-nya
import WithNavbar from "@/components/Layout/WithNavbar";
import WithFooter from "@/components/Layout/WithFooter";

export const metadata: Metadata = {
  title: "EPW 16",
  description: "EPW 16 WEBSITES",
  keywords: ["EPW"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/components/Logo.svg" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <WithNavbar />
        <main>{children}</main>
        <WithFooter />
      </body>
    </html>
  );
}
