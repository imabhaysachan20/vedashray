import {Calistoga,Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const montserrat = Montserrat({
  subsets:['latin'],
  weight:["100","200","300","400","500","600","700","800","900"]
})

const calistoga = Calistoga({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const metadata = {
  title: "Vedashray", 
  description: "Company Secretaries & Legal Compliance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}  antialiased bg-[#ffff]`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
