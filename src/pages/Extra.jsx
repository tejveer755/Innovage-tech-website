
import React from "react"

const Extra = () => {
  return (
    <Accordion type="single" className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto border-b border-neutral-200 p-3 lg:p-5" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{}</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

  )
};

export default Extra;
