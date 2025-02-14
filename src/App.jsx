import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/Header";
import TestimonialSlider from "./components/Testimonial";
import AboutProd from "./components/AboutProd";

function App() {
  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <div className="relative">
          <Header />
          <div className="smooth-scroll-container">
            <Hero />
          </div>
          <AboutProd />
          <Benefits />
          <TestimonialSlider />
        </div>
      </ParallaxProvider>
    </ErrorBoundary>
  );
}

export default App;
