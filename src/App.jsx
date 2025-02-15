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

function App() {
  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <div className="relative smooth-scroll-container">
          <Header />
          <div className="smooth-scroll-container">
            <Hero />
          </div>
          <AboutProd />
          <Benefits />
          <Video />
          <ResearchStudies />
          <Products />
          <TestimonialSlider />
        </div>
      </ParallaxProvider>
    </ErrorBoundary>
  );
}

export default App;
