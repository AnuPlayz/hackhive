import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function Heroo() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 flex flex-col gap-4 md:gap-8 items-center md:grid md:grid-cols-2 md:items-stretch md:gap-0">
        <div className="flex flex-col gap-4 md:gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Meet Veronica</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Uncover the beauty of AI with our assistant and experience accessibility of webs like no another.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
          As an AI web guide, my role is to assist users in navigating a website, <br></br>
          providing information, answering questions, helping with form submissions, clicking buttons,<br></br>
           and performing other interactive tasks through voice commands.<br></br>
            I am here to make the user's experience on the website smoother and more efficient.
          </p>
          <br></br>
          <p className="text-gray-500 dark:text-gray-400">
          As an AI web guide, my role is to assist users in navigating a website, <br></br>
          providing information, answering questions, helping with form submissions, clicking buttons,<br></br>
           and performing other interactive tasks through voice commands.<br></br>
            I am here to make the user's experience on the website smoother and more efficient.
          </p>
          <a
            href="https://app.teamnexus.tech/"
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "outline",
              }),
              "group mt-4 rounded-[2rem] px-6",
            )}
          >
            Get Started
            <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <img
            alt="Discover new horizons"
            className="rounded-xl object-cover"
            height="300"
            src="/veronica.png"
            style={{
              aspectRatio: "400/500",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
      </div>
    </section>
  )
}

