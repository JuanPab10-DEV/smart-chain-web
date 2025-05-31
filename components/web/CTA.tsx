import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CTA = () => (
  <div id="cta" className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
        <div>
          <Badge>Transformación guiada</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            ¿Listo para alinear tu negocio con su propósito y crecer desde el
            ser?
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            Te ayudamos a diseñar una consultoría que no solo resuelva, sino que
            transforme. Porque operar desde el ikigai no es un lujo, es una
            ventaja.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <button className="relative  px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-[oklch(0.70_0.18_248.5)] to-[oklch(0.60_0.20_268.5)] rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl">
            <span className="relative z-10">
              Agenda tu diagnóstico gratuito y evoluciona{" "}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.75_0.22_248.5)] to-[oklch(0.65_0.25_268.5)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.55_0.15_248.5)] to-[oklch(0.50_0.18_268.5)] opacity-0 hover:opacity-100 blur-xl transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
);
