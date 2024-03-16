import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Footer() {
  return (
    <div className="flex items-center justify-center w-[400px]">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does this works?</AccordionTrigger>
          <AccordionContent>
            The model is made using Threejs and the voice integration and text to speech works hand in hand to complete tasks users give.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can we integrate it on our website?</AccordionTrigger>
          <AccordionContent>
            Yes. The package of this AI is completely scalable and usable on any website.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
