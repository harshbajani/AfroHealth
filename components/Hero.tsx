import { ThreeDCardDemo } from "@/components/card";
import { Button } from "@/components/ui/button";
import Atropos from "atropos/react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-jungleGreen p-8">
      <Atropos className="my-8" shadow={false}>
        <div className="max-w-md mx-auto bg-white rounded-lg p-6">
          <h1 className="text-3xl font-bold text-canary mb-4">
            Welcome to Your App
          </h1>

          <Atropos className="my-8" shadow={false}>
            <div className="bg-slate-100 p-4 rounded">
              Hover me for 3D effect!
            </div>
          </Atropos>

          <Button>Click me!</Button>
        </div>
      </Atropos>
      <ThreeDCardDemo />
    </div>
  );
};

export default Hero;
