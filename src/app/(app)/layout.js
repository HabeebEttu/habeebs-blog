
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono, Roboto } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "DevInsights",
  description: "A blog application where users can view posts about their favorite developer technologies and leave comments about them.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} bg-gray-900`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
