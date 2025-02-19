import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/Header";
import TestimonialSlider from "./components/Testimonial";
import AboutProd from "./components/AboutProd";
import Video from "./components/video";
import Products from "./components/Products";
import ResearchStudies from "./components/ReasearchStudies";
import Promo from "./components/promo";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Benefits2 from "./components/Benefits2";

function App() {
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
              <Benefits2 />
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

export default App;
