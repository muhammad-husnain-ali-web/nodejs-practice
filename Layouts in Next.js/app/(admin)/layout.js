import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Admin Facebook",
  description: "Admin Facebook - connect with the world",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <Navbar />
    {children}
    </>
  );
}
