import { Benefits } from "@/components/web/Benefits";
import { Competitive } from "@/components/web/Competitive";
import { CTA } from "@/components/web/CTA";
import { FAQs } from "@/components/web/FAQs";
import { Footer } from "@/components/web/Footer";
import { Hero } from "@/components/web/Hero";
import { NavBar } from "@/components/web/NavBar";
import { Process } from "@/components/web/Process";
import { Services } from "@/components/web/Services";
import { Testimonials } from "@/components/web/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <NavBar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Benefits />
      <Competitive />
      <FAQs />
      <CTA />
      <Footer />
    </main>
  );
}
