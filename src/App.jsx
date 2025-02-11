import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ParallaxProvider } from "react-scroll-parallax";
import { SmoothScrollProvider } from "../hooks/useSmoothScroll";

function App() {
  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <SmoothScrollProvider>
          <div className="bg-jungleGreen smooth-scroll-container ">
            <Hero />
          </div>
          <Benefits />
        </SmoothScrollProvider>
      </ParallaxProvider>
    </ErrorBoundary>
  );
}

export default App;
