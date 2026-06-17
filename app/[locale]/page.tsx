import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <CaseStudy />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}
