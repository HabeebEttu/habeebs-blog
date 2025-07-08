
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";

export const metadata = {
  title: "DevInsights",
  description: "A blog application where users can view posts about their favorite developer technologies and leave comments about them.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={` antialiased bg-fixed`}>
        <SessionProviderWrapper>
          <Header />
          {children}
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
