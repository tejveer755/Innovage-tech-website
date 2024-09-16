import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/accordion"



function FAQItem({
    questionId,
    question,
    answer,
    answersVisible,
    handleToggleAnswer,
}) {
    return (
        <Accordion type="single" className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto  p-3 lg:p-5" collapsible>
            <AccordionItem value="item-1" className="text-slate-200" >
                <AccordionTrigger className="text-slate-200">{question}</AccordionTrigger>
                <AccordionContent>
                    {answer}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

export default FAQItem;
