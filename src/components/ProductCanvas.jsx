import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useTexture, OrbitControls } from "@react-three/drei";

const InteractiveProduct = () => {
  const texture = useTexture("/ProductImages/Afro-Health-Pouch.png");
  return (
    <mesh rotation={[0, 0, 0]}>
      <planeGeometry args={[4, 4]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

const ProductCanvas = () => {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <InteractiveProduct />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  );
};

export default ProductCanvas;
