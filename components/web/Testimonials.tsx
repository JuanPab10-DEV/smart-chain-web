"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote:
        "Con Smart Chain no solo crecimos… reconectamos con lo que realmente somos como organización.",
      author: "Diana M.",
      role: "CEO Retail LATAM",
      avatar: "DM",
    },
    {
      quote:
        "La experiencia All You Can Learn nos dio acceso continuo a formación y apoyo. No solo cambiamos procesos, cambiamos mentalidades.",
      author: "Carlos G.",
      role: "Gerente de Innovación",
      avatar: "CG",
    },
    {
      quote:
        "No nos vendieron un informe. Se sentaron con nosotros, observaron, preguntaron… y nos ayudaron a evolucionar.",
      author: "Verónica L.",
      role: "Directora de Cultura",
      avatar: "VL",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 6000);
  }, [api, current]);

  return (
    <div id="testimonials" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-2xl font-regular text-left">
            Testimonios con enfoque en evolución humana
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <Quote className="w-8 h-8 stroke-1 text-primary/60" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <blockquote className="text-lg leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      <div className="flex flex-row gap-3 items-center">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-primary/10 text-primary font-medium">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-medium">
                            {testimonial.author}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
