import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";

export default function Home() {
    return (
        <>
        <header className="flex items-center justify-center m-4">
            <Navbar />
        </header>
        <div>
            <Pricing />
        </div>
        </>
    )
}