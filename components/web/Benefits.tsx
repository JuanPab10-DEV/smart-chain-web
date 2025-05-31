import { Ear, Puzzle, Brain, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Benefits = () => {
  const values = [
    {
      icon: Ear,
      title: "Consciencia",
      description: "Escuchamos antes de intervenir"
    },
    {
      icon: Puzzle,
      title: "Modularidad",
      description: "Diseñamos contigo, no para ti"
    },
    {
      icon: Brain,
      title: "Aprendizaje continuo",
      description: "Formamos y transformamos"
    },
    {
      icon: Users,
      title: "Human Centric",
      description: "Las personas están al centro de todo"
    }
  ];

  return (
    <div id="benefits" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-10 flex-col items-start">
          <div>
            <Badge>Lo que nos mueve</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Nuestro propósito es ayudarte a encontrar el tuyo
            </h2>
            <p className="text-lg max-w-xl lg:max-w-2xl leading-relaxed tracking-tight text-muted-foreground">
              No creemos en fórmulas genéricas. En Smart Chain acompañamos a las organizaciones a alinearse con su propósito y operar desde su esencia.
            </p>
            <p className="text-lg max-w-xl lg:max-w-2xl leading-relaxed tracking-tight text-muted-foreground">
              Nuestro enfoque parte del <em>ikigai organizacional</em>: ese punto donde tu negocio es rentable, humano, innovador… y plenamente significativo.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex flex-col gap-4 items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-medium">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
