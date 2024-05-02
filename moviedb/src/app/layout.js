import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieDB",
  description: "MovieDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className={`${inter.className} flex items-centre flex-col place-items-center`}>
          {/* <Headers /> */}
          <Navbar />
          {children}
          <Footer />
        </div>

      </body>
    </html>
  );
}
