import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ParallaxProvider } from "react-scroll-parallax";
import { SmoothScrollProvider } from "../hooks/useSmoothScroll";
import Header from "./components/Header";
import TestimonialSlider from "./components/Testimonial";

function App() {
  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <SmoothScrollProvider>
          <div className="relative">
            <Header />
            <div className="smooth-scroll-container">
              <Hero />
            </div>
            <Benefits />
            <TestimonialSlider />
          </div>
        </SmoothScrollProvider>
      </ParallaxProvider>
    </ErrorBoundary>
  );
}

export default App;
