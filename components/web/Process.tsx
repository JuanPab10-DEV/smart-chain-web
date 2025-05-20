import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Process = () => (
  <div className="w-full py-20 lg:py-40 bg-muted/30">
    <div className="container mx-auto">
      <div className="flex gap-4 flex-col items-center text-center mb-16">
        <div>
          <Badge>Workflow</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-2xl font-regular">
            Our Streamlined Process
          </h2>
          <p className="text-lg max-w-2xl leading-relaxed tracking-tight text-muted-foreground">
            We've simplified blockchain integration into a clear, step-by-step process that ensures smooth implementation for your business.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {[
          {
            step: 1,
            title: "Discovery & Analysis",
            description: "We analyze your business needs and identify the best blockchain solutions for your specific requirements.",
            icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
          },
          {
            step: 2,
            title: "Solution Design",
            description: "Our experts design a custom blockchain implementation plan tailored to your business processes.",
            icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
          },
          {
            step: 3,
            title: "Implementation & Integration",
            description: "We seamlessly integrate blockchain technology into your existing systems with minimal disruption.",
            icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
          },
        ].map((item, index, array) => (
          <div key={item.step} className="flex flex-col items-center">
            <div className="relative flex flex-col items-center">
              {item.icon}
              {index < array.length - 1 && (
                <div className="hidden md:flex absolute top-5 left-[calc(100%+1rem)] w-[calc(100%-2rem)] items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </div>
            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="bg-primary/10 text-primary font-medium rounded-full w-8 h-8 flex items-center justify-center">
                {item.step}
              </div>
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="text-muted-foreground text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  </div>
);