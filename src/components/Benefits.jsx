import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { FaLeaf, FaShieldAlt, FaBolt } from "react-icons/fa";
import { Suspense, useEffect } from "react";

// 3D Model component with scaling and positioning
function BottleModel() {
  const { scene } = useGLTF("/bottle.glb");

  // Optimize the scene
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
        // Optimize geometry
        child.geometry.dispose();
        child.geometry = child.geometry.clone();
      }
    });
  }, [scene]);

  return <primitive object={scene} position={[0, -1, 0]} scale={0.5} />;
}

const benefitsData = [
  {
    title: "100% Natural Ingredients",
    description: "Sourced from premium farms for maximum purity and taste.",
    icon: <FaLeaf size={32} className="text-jungleGreen" />,
  },
  {
    title: "Boosts Immunity",
    description: "Packed with vitamins, minerals, and antioxidants.",
    icon: <FaShieldAlt size={32} className="text-jungleGreen" />,
  },
  {
    title: "Increases Energy",
    description: "Provides a refreshing energy lift without the crash.",
    icon: <FaBolt size={32} className="text-jungleGreen" />,
  },
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      data-bgcolor="canary"
      className="relative z-30 w-full bg-canary min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div className="absolute inset-0 bg-gradient-to-r from-canary via-white to-canary opacity-30 animate-gradient-x" />

      <div className="relative max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 px-4 z-10">
        {/* 3D Model Section */}
        <div className="w-full md:w-1/2 h-[600px] relative">
          <Canvas
            dpr={[1, 2]} // Optimize for different screen densities
            performance={{ min: 0.5 }} // Add performance optimization
          >
            <PerspectiveCamera makeDefault position={[0, 0, 18]} fov={45} />
            <ambientLight intensity={2} />
            <directionalLight position={[1, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
              <BottleModel />
              <OrbitControls
                enableZoom={false} // Disable zoom completely
                enablePan={false} // Disable panning
                rotateSpeed={0.5} // Slow down rotation for smoother movement
                dampingFactor={0.1} // Add damping for smoother stops
                enableDamping={true} // Enable damping
                minPolarAngle={Math.PI / 2.5} // Limit vertical rotation
                maxPolarAngle={Math.PI / 1.5} // Limit vertical rotation
                autoRotate={true} // Optional: add automatic rotation
                autoRotateSpeed={1} // Optional: control auto-rotation speed
              />
            </Suspense>
          </Canvas>
        </div>

        {/* Benefits Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.h2
            className="text-4xl font-bold mb-12 text-jungleGreen"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose AfroHealth?
          </motion.h2>

          <div className="space-y-8">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-white rounded-full shadow-md">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-jungleGreen mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
