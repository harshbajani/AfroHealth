import { useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef, useState, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import { Canvas } from "@react-three/fiber";

const PackModel = () => {
  const meshRef = useRef(null);
  const texture = useTexture("/Afro-Health-Gut-Health.png");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        clock.getElapsedTime() * 0.25 + mousePos.x * 2;
      meshRef.current.rotation.x = mousePos.y * 1.5;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerMove={(e) => {
        if (e.uv) {
          setMousePos({ x: e.uv.x - 0.5, y: e.uv.y - 0.5 });
        }
      }}
      scale={3}
    >
      <boxGeometry args={[1, 1.5, 0.2]} />
      <meshStandardMaterial map={texture} metalness={0.2} roughness={0.4} />
    </mesh>
  );
};

// Fallback component for loading state
const LoadingFallback = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export const ProductPack = () => (
  <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
    <MotionConfig transition={{ duration: 1.5, ease: "backInOut" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
        className="bg-transparent"
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<LoadingFallback />}>
          <PackModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </MotionConfig>
  </div>
);
