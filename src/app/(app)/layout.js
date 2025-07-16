
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";


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
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header />
          {children}
          <Footer />
          <Toaster/>
          </ThemeProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
