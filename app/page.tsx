import Image from "next/image";
import Hero from "./Hero";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="w-full min-h-[150vh] relative overflow-hidden">
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
}
