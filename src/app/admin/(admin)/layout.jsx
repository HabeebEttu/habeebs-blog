import "@/app/globals.css";
import AdminApp from '@/components/AdminApp.jsx'
import { Toaster } from "react-hot-toast";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";




export const metadata = {
  title: "DevInsights",
  description: "A blog application where users can view posts about their favorite developer technologies and leave comments about them.",
};

export default async function AuthLayout({ children }) {
  
  return (
    <html lang="en" className={``}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={` antialiased`}>
        <Toaster position="top-right" />
        <AdminApp>{children}</AdminApp>
      </body>
    </html>
  );
}


