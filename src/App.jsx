import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ParallaxProvider } from "react-scroll-parallax";
import { SmoothScrollProvider } from "../hooks/useSmoothScroll";
import Header from "./components/Header";

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
            <div
              className="h-screen bg-gray-100 flex items-center justify-center"
              data-bgcolor="white"
            >
              <h1 className="text-3xl font-bold">More Content Below</h1>
            </div>
          </div>
        </SmoothScrollProvider>
      </ParallaxProvider>
    </ErrorBoundary>
  );
}

export default App;
