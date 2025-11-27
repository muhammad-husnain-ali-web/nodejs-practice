import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Admin Logout Facebook",
  description: "Admin Facebook - connect with the world",
};

export default function LogoutLayout({ children }) {
  return (
    <>
    <div>Navbar Admin Logout</div>
    {children}
    </>
  );
}
