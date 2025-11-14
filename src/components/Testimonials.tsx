import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Miami, FL",
    text: "Value Equity helped us recover over $85,000 after hurricane damage. Their expertise and dedication made all the difference. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    location: "Tampa, FL",
    text: "After a devastating fire, I didn't know where to turn. The team at Value Equity handled everything professionally and got me the settlement I deserved.",
    rating: 5,
  },
  {
    name: "Jennifer Chen",
    location: "Orlando, FL",
    text: "Our insurance company initially offered us only $15,000 for water damage. Value Equity negotiated and got us $62,000. Incredible results!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real stories from real clients who trusted us with their insurance claims
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
