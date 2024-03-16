import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="bg-[#fffbe6] min-h-screen flex flex-col items-center justify-center">
      <nav className="absolute top-0 left-0 right-0 flex justify-center p-4">
        <ul className="flex space-x-4">
          <li>
          <Button variant="ghost">EXPLORE</Button>
          </li>
          <li>
          <Button variant="ghost">DEMO</Button>

          </li>
          <li>
           <Button variant="ghost">PRICING</Button>
          </li>
          <li>
          <Button variant="ghost">FAQ</Button>
          </li>
        </ul>
      </nav>
      <main className="px-6 text-center">
        <h1 className="text-5xl font-bold text-yellow-950">Imagine you have an AI that can act as a guide on your website.</h1>
        <p className="mt-4 text-2xl text-slate-400 font-bold">Navigate through website and fill forms easily.</p>
      </main>
    </div>
  )
}

function DotIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}
