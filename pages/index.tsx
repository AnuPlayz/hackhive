import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import Heroo from "@/components/heroo";
import { Features } from "@/components/features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-center m-4">
        <Navbar />
      </header>
      <div className="flex flex-col items-center justify-center p-10 m-7">
        <Hero />
        <Heroo />
        <div>
          <Features />
        </div>
      </div>
      <footer className="flex items-center justify-center p-7">
        <Footer />
      </footer>
    </>
  );
}
