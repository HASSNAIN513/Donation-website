import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ToastContainer, toast,Bounce } from 'react-toastify';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sessionwrapper from "@/components/Sessionwrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me a chai ",
  description: "A simple donation website where you can donate for a cause. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white min-h-screen flex flex-col bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]`}>
    
    <Sessionwrapper>
      <Navbar />

      {/* Main content fills remaining space */}
      <main className="flex-grow">
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />
        {children}
      </main>

      <Footer />
    </Sessionwrapper>
  </body>
      <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
    </html>
  )
}
