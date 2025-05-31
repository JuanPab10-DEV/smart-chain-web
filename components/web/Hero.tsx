import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "../magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TrustedBy } from "@/components/ui/trusted-by";
import Image from "next/image";

export const Hero = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <TrustedBy />
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              <TextAnimate animation="blurInUp" by="character" once>
                Consultoría que une propósito, tecnología y personas
              </TextAnimate>
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Transformamos organizaciones con un enfoque consciente, modular y
              centrado en el ser. Creamos impacto real combinando estrategia,
              cultura e innovación.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4">
              Conócenos <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 h-[600px]">
          <BlurFade delay={0.25} inView>
            <div className="flex flex-col gap-4">
              <BlurFade delay={0.35} inView>
                <div className="relative rounded-md overflow-hidden h-[350px] bg-muted">
                  <Image
                    src="/first.jpg"
                    alt="Smart Chain Solutions - Transformación empresarial"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </BlurFade>
              <BlurFade delay={0.45} inView>
                <div className="relative rounded-md overflow-hidden h-[230px] bg-muted">
                  <Image
                    src="/second.jpg"
                    alt="Smart Chain Solutions - Transformación empresarial"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </BlurFade>
            </div>
          </BlurFade>
          <BlurFade delay={0.55} inView>
            <div className="relative rounded-md overflow-hidden h-full bg-muted">
              <Image
                src="/thirt.png"
                alt="Smart Chain Solutions - Transformación empresarial"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  </div>
);
