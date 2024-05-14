import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Portfolio App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>  
         <div className="w-screen h-screen bg-gradient-to-b from-blue-start via-blue-mid1 via-14% via-blue-mid2 via-26% via-blue-mid3 via-41% to-black-end to-75%">
          <div className="h-24">
            <Navbar/>
          </div>
         
          <div className="h-[calc(100vh - 6rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
