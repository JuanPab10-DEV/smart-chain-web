import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const Process = () => {
  const processSteps = [
    {
      step: 1,
      title: "Escucha consciente",
      subtitle: "(Diagnóstico)",
      description:
        "Profundizamos en tu realidad actual para entender no solo qué necesitas, sino por qué lo necesitas.",
      color: "bg-yellow-100 border-yellow-200",
      rotate: "-rotate-3",
      position: "top-4 left-8",
    },
    {
      step: 2,
      title: "Diseño colaborativo",
      subtitle: "(Modularidad inteligente)",
      description:
        "Creamos soluciones modulares que se adaptan a tu ritmo y necesidades específicas.",
      color: "bg-blue-100 border-blue-200",
      rotate: "rotate-2",
      position: "top-12 right-12",
    },
    {
      step: 3,
      title: "Transformación en acción",
      subtitle: "(Acompañamiento real)",
      description:
        "Implementamos juntos, con acompañamiento constante y ajustes en tiempo real.",
      color: "bg-green-100 border-green-200",
      rotate: "-rotate-1",
      position: "top-32 left-4",
    },
    {
      step: 4,
      title: "Aprendizaje continuo",
      subtitle: "(All You Can Learn)",
      description:
        "Tu equipo aprende mientras transforma, construyendo capacidades internas permanentes.",
      color: "bg-pink-100 border-pink-200",
      rotate: "rotate-3",
      position: "top-44 right-8",
    },
    {
      step: 5,
      title: "Medición de impacto",
      subtitle: "(Indicadores + cultura)",
      description:
        "Medimos no solo resultados, sino el cambio cultural y la sostenibilidad de la transformación.",
      color: "bg-purple-100 border-purple-200",
      rotate: "-rotate-2",
      position: "top-64 left-1/2 transform -translate-x-1/2",
    },
  ];

  return (
    <div
      id="process"
      className="w-full py-20 lg:py-40 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex gap-4 flex-col items-center text-center mb-16">
          <div>
            <Badge variant="outline" className="bg-white/70 backdrop-blur-sm">
              Transformación guiada
            </Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-2xl font-regular text-gray-900">
              Un camino claro para que evoluciones, no solo mejores
            </h2>
            <p className="text-lg max-w-2xl leading-relaxed tracking-tight text-gray-600">
              Nuestro proceso está diseñado para guiar tu transformación, no
              solo mejorar tu desempeño.
            </p>
          </div>
        </div>

        <div className="hidden lg:block relative min-h-[700px] max-w-7xl mx-auto">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 700"
            style={{ zIndex: 1 }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
              </marker>
            </defs>

            <path
              d="M 280 120 Q 500 60 880 140"
              stroke="#94a3b8"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
            />

            <path
              d="M 920 200 Q 950 340 300 350"
              stroke="#94a3b8"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
            />

            <path
              d="M 290 440 Q 700 420 870 410"
              stroke="#94a3b8"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
            />

            <path
              d="M 910 480 Q 1400 500 750 650"
              stroke="#94a3b8"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
            />
          </svg>

          <div
            className={`absolute w-72 p-6 rounded-lg border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${processSteps[0].color} -rotate-3`}
            style={{
              top: "60px",
              left: "80px",
              zIndex: 10,
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-700 shadow-sm">
                1
              </div>
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {processSteps[0].title}
            </h3>

            <p className="text-sm font-medium text-gray-700 mb-3">
              {processSteps[0].subtitle}
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              {processSteps[0].description}
            </p>
          </div>

          <div
            className={`absolute w-72 p-6 rounded-lg border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${processSteps[1].color} rotate-2`}
            style={{
              top: "100px",
              right: "60px",
              zIndex: 10,
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-700 shadow-sm">
                2
              </div>
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {processSteps[1].title}
            </h3>

            <p className="text-sm font-medium text-gray-700 mb-3">
              {processSteps[1].subtitle}
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              {processSteps[1].description}
            </p>
          </div>

          <div
            className={`absolute w-72 p-6 rounded-lg border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${processSteps[2].color} -rotate-1`}
            style={{
              top: "290px",
              left: "40px",
              zIndex: 10,
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-700 shadow-sm">
                3
              </div>
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {processSteps[2].title}
            </h3>

            <p className="text-sm font-medium text-gray-700 mb-3">
              {processSteps[2].subtitle}
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              {processSteps[2].description}
            </p>
          </div>

          <div
            className={`absolute w-72 p-6 rounded-lg border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${processSteps[3].color} rotate-3`}
            style={{
              top: "340px",
              right: "80px",
              zIndex: 10,
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-700 shadow-sm">
                4
              </div>
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {processSteps[3].title}
            </h3>

            <p className="text-sm font-medium text-gray-700 mb-3">
              {processSteps[3].subtitle}
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              {processSteps[3].description}
            </p>
          </div>

          <div
            className={`absolute w-72 p-6 rounded-lg border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${processSteps[4].color} -rotate-2`}
            style={{
              top: "500px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-700 shadow-sm">
                5
              </div>
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {processSteps[4].title}
            </h3>

            <p className="text-sm font-medium text-gray-700 mb-3">
              {processSteps[4].subtitle}
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              {processSteps[4].description}
            </p>
          </div>
        </div>

        <div className="lg:hidden space-y-6">
          {processSteps.map((item, index) => (
            <div
              key={item.step}
              className={`w-full max-w-sm mx-auto p-6 rounded-lg border-2 shadow-lg ${
                item.color
              } ${
                index % 3 === 0
                  ? "-rotate-1"
                  : index % 3 === 1
                  ? "rotate-1"
                  : "-rotate-2"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-700 shadow-sm">
                  {item.step}
                </div>
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>

              <p className="text-sm font-medium text-gray-700 mb-3">
                {item.subtitle}
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button
            size="lg"
            className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Quiero vivir este proceso
          </Button>
        </div>
      </div>
    </div>
  );
};
