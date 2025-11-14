import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a public insurance adjuster?",
    answer: "A public insurance adjuster is a licensed professional who works exclusively for policyholders, not insurance companies. We assess property damage, prepare and document claims, and negotiate with insurance companies to ensure you receive the maximum settlement you're entitled to under your policy.",
  },
  {
    question: "How much does it cost to hire a public adjuster?",
    answer: "We work on a contingency fee basis, meaning we only get paid when you receive your settlement. There are no upfront costs or out-of-pocket expenses. Our fee is a percentage of your final settlement, and we'll discuss this transparently before beginning work on your claim.",
  },
  {
    question: "How long does the claims process take?",
    answer: "The timeline varies depending on the complexity of your claim and your insurance company. Simple claims may be resolved in a few weeks, while more complex cases involving significant damage can take several months. We work diligently to expedite the process while ensuring you receive fair compensation.",
  },
  {
    question: "What types of damage do you handle?",
    answer: "We handle all types of property damage claims including fire, water, wind, hurricane, storm, hail, flooding, vandalism, theft, and more. Whether it's residential or commercial property, we have the expertise to handle your claim effectively.",
  },
  {
    question: "Can you help if my claim was already denied?",
    answer: "Yes! We often help clients whose claims were initially denied or undervalued by insurance companies. We can review your case, identify issues, and work to appeal the decision or reopen negotiations to get you the settlement you deserve.",
  },
  {
    question: "Do I need to be present during the inspection?",
    answer: "While it's helpful if you can be present, it's not always necessary. We can coordinate with you to schedule inspections at your convenience and keep you informed throughout the entire process.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our services and the claims process
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
