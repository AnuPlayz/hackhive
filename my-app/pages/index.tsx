import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-center m-4">
        <Navbar />
      </header>
      <div className="flex items-center justify-center p-10 m-7">
      <Hero />
      </div>
      <footer className="flex items-center justify-center">
        <Footer />
      </footer>
    </>
  );
}
