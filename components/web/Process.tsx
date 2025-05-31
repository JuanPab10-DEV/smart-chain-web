import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Process = () => (
  <div id="process" className="w-full py-20 lg:py-40 bg-muted/30">
    <div className="container mx-auto">
      <div className="flex gap-4 flex-col items-center text-center mb-16">
        <div>
          <Badge>Transformación guiada</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-2xl font-regular">
            Un camino claro para que evoluciones, no solo mejores
          </h2>
          <p className="text-lg max-w-2xl leading-relaxed tracking-tight text-muted-foreground">
            Nuestro proceso está diseñado para guiar tu transformación, no solo mejorar tu desempeño.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {[
            {
              step: 1,
              title: "Escucha consciente",
              subtitle: "(Diagnóstico)",
              description:
                "Profundizamos en tu realidad actual para entender no solo qué necesitas, sino por qué lo necesitas.",
              icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
            },
            {
              step: 2,
              title: "Diseño colaborativo",
              subtitle: "(Modularidad inteligente)",
              description:
                "Creamos soluciones modulares que se adaptan a tu ritmo y necesidades específicas.",
              icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
            },
            {
              step: 3,
              title: "Transformación en acción",
              subtitle: "(Acompañamiento real)",
              description:
                "Implementamos juntos, con acompañamiento constante y ajustes en tiempo real.",
              icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
            },
            {
              step: 4,
              title: "Aprendizaje continuo",
              subtitle: "(All You Can Learn)",
              description:
                "Tu equipo aprende mientras transforma, construyendo capacidades internas permanentes.",
              icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
            },
            {
              step: 5,
              title: "Medición de impacto",
              subtitle: "(Indicadores + cultura)",
              description:
                "Medimos no solo resultados, sino el cambio cultural y la sostenibilidad de la transformación.",
              icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
            },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center relative">
              <div className="flex flex-col items-center relative z-10">
                {item.icon}
              </div>
              <div className="mt-6 flex flex-col items-center gap-2">
                <div className="bg-primary/10 text-primary font-medium rounded-full w-8 h-8 flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium text-center">{item.title}</h3>
                <p className="text-sm text-primary/70 font-medium text-center">{item.subtitle}</p>
                <p className="text-muted-foreground text-center text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="hidden lg:block absolute top-5 left-0 w-full h-10 pointer-events-none">
          <div className="relative w-full h-full">
     
            <ArrowRight 
              className="absolute w-5 h-5 text-muted-foreground/60 top-1/2 transform -translate-y-1/2"
              style={{ left: 'calc(20% - 10px)' }}
            />
      
            <ArrowRight 
              className="absolute w-5 h-5 text-muted-foreground/60 top-1/2 transform -translate-y-1/2"
              style={{ left: 'calc(40% - 10px)' }}
            />

            <ArrowRight 
              className="absolute w-5 h-5 text-muted-foreground/60 top-1/2 transform -translate-y-1/2"
              style={{ left: 'calc(60% - 10px)' }}
            />

            <ArrowRight 
              className="absolute w-5 h-5 text-muted-foreground/60 top-1/2 transform -translate-y-1/2"
              style={{ left: 'calc(80% - 10px)' }}
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-16">
        <Button size="lg" className="px-8">
          Quiero vivir este proceso
        </Button>
      </div>
    </div>
  </div>
);
