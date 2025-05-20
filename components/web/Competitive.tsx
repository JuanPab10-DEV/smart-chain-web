import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

export const Competitive = () => {
  // Datos de comparación entre nuestra solución y las alternativas tradicionales
  const comparisonData = [
    {
      feature: "Integración rápida",
      description: "Implementación en menos de 2 semanas",
      weOffer: true,
      competitors: false,
    },
    {
      feature: "Seguridad avanzada",
      description: "Protección de datos con tecnología blockchain",
      weOffer: true,
      competitors: false,
    },
    {
      feature: "Escalabilidad",
      description: "Crece con tu negocio sin complicaciones",
      weOffer: true,
      competitors: false,
    },
    {
      feature: "Soporte 24/7",
      description: "Asistencia técnica disponible en todo momento",
      weOffer: true,
      competitors: true,
    },
    {
      feature: "Costos transparentes",
      description: "Sin tarifas ocultas ni sorpresas",
      weOffer: true,
      competitors: false,
    },
    {
      feature: "Personalización total",
      description: "Adaptado a las necesidades específicas de tu empresa",
      weOffer: true,
      competitors: false,
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
              Ventajas Competitivas
            </h2>
            <p className="text-lg max-w-2xl leading-relaxed tracking-tight text-muted-foreground">
              Descubre por qué nuestra solución blockchain supera a las alternativas tradicionales en el mercado.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-muted">
                <th className="py-4 px-6 text-left font-medium text-lg">Características</th>
                <th className="py-4 px-6 text-center font-medium text-lg">Smart Chain Solutions</th>
                <th className="py-4 px-6 text-center font-medium text-lg">Soluciones Tradicionales</th>
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
                    {item.weOffer ? (
                      <div className="flex justify-center">
                        <Check className="w-6 h-6 text-primary" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <X className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {item.competitors ? (
                      <div className="flex justify-center">
                        <Check className="w-6 h-6 text-muted-foreground" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <X className="w-6 h-6 text-destructive" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * Basado en un análisis comparativo de las soluciones blockchain disponibles en el mercado actual.
          </p>
        </div>
      </div>
    </div>
  );
};