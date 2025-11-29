import Image from "next/image";
import Hero from "./Hero";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="w-full min-h-[150vh] relative overflow-hidden">
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Blog />
      <ContactSection />
    </div>
  );
}
