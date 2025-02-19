import Hero from "./Hero";
import Benefits from "./Benefits";
import { ErrorBoundary } from "./ErrorBoundary";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./Header";
import TestimonialSlider from "./Testimonial";
import AboutProd from "./AboutProd";
import Video from "./video";
import Products from "./Products";
import ResearchStudies from "./ReasearchStudies";
import Promo from "./promo";
import Faq from "./Faq";
import Footer from "./Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <div className="relative">
          <Header />
          <main className="relative overflow-hidden">
            <div className="relative z-10">
              <Hero />
            </div>
            <div className="relative z-20 bg-white">
              <AboutProd />
              <Benefits />
              <Video />
              <ResearchStudies />
              <Products />
              <TestimonialSlider />
              <Promo />
              <Faq />
              <Footer />
            </div>
          </main>
        </div>
      </ParallaxProvider>
    </ErrorBoundary>
  );
}

export default Home;
