import { CallToAction } from "@/components/CallToAction";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Journey />
      <CallToAction />
      <Footer />
    </main>
  );
}
