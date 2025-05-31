import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

export const Competitive = () => {
  // Datos de comparación entre nuestra solución y las alternativas tradicionales
  const comparisonData = [
    {
      feature: "Enfoque Human Centric",
      description: "Personas en el centro de la transformación",
      weOffer: true,
      competitors: false,
      competitorDescription: "Solo datos y procesos"
    },
    {
      feature: "Modularidad real",
      description: "Soluciones adaptables a tu ritmo y necesidades",
      weOffer: true,
      competitors: false,
      competitorDescription: "Paquetes fijos"
    },
    {
      feature: "Filosofía ikigai",
      description: "Propósito, pasión y transformación integral",
      weOffer: true,
      competitors: false,
      competitorDescription: "Visión fragmentada"
    },
    {
      feature: "All You Can Learn",
      description: "Aprendizaje ilimitado durante la transformación",
      weOffer: true,
      competitors: false,
      competitorDescription: "Consultas limitadas"
    },
    {
      feature: "Tecnología + Cultura",
      description: "Integración holística de tecnología y bienestar",
      weOffer: true,
      competitors: false,
      competitorDescription: "Visión técnica aislada"
    },
  ];

  return (
    <div className="w-full py-20 lg:py-40 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex gap-4 flex-col items-center text-center mb-16">
          <div>
            <Badge>Comparativa</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-2xl font-regular">
              No somos una consultora más
            </h2>
            <p className="text-lg max-w-2xl leading-relaxed tracking-tight text-muted-foreground">
              Y eso te conviene. Descubre qué nos hace diferentes.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-muted">
                <th className="py-4 px-6 text-left font-medium text-lg">Características</th>
                <th className="py-4 px-6 text-center font-medium text-lg">Smart Chain Solutions</th>
                <th className="py-4 px-6 text-center font-medium text-lg">Las demás</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="font-medium">{item.feature}</span>
                      <span className="text-sm text-muted-foreground">{item.description}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center gap-2">
                      <Check className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium text-primary">Sí</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex justify-center items-center gap-2">
                        <X className="w-6 h-6 text-destructive" />
                        <span className="text-sm font-medium text-destructive">No</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.competitorDescription}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * Basado en nuestro análisis del mercado de consultoría empresarial actual.
          </p>
        </div>
      </div>
    </div>
  );
};