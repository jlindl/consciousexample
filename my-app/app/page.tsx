import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PageWrapper from "@/components/PageWrapper";
import Features from "@/components/Features";
import Protocol from "@/components/Protocol";
import Footer from "@/components/Footer";
import VelocityScroll from "@/components/VelocityScroll";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <VelocityScroll>
        <Hero />
        <Features />
        <Protocol />
        <Footer />
      </VelocityScroll>
    </PageWrapper>
  );
}
