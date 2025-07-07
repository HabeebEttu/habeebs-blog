
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";


export const metadata = {
  title: "DevInsights",
  description: "A blog application where users can view posts about their favorite developer technologies and leave comments about them.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` bg-gray-900`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={` antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
