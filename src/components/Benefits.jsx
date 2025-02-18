import { motion, useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefitsData = [
  {
    title: "Pure & Natural",
    description: "Every drop is a testament to nature's finest ingredients",
    highlight: "100% Organic",
    color: "#285236",
    secondaryColor: "#fde268",
  },
  {
    title: "Shield of Wellness",
    description: "Fortify your body with nature's defensive elixir",
    highlight: "Immunity Boost",
    color: "#285236",
    secondaryColor: "#fde268",
  },
  {
    title: "Vitality Surge",
    description: "Embrace sustained energy that flows naturally",
    highlight: "All-Day Energy",
    color: "#285236",
    secondaryColor: "#fde268",
  },
];

function OrbitRing({ radius, particleCount, duration, ringColor }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: radius * 2,
        height: radius * 2,
      }}
    >
      {/* Ring outline */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: `1px dashed ${ringColor}`,
          borderRadius: "50%",
        }}
      />

      {/* Orbiting particles */}
      {Array.from({ length: particleCount }).map((_, i) => {
        const initialAngle = (i / particleCount) * 360; // each particle's start angle
        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              // Center of this container is pivot for rotation:
              transformOrigin: "center center",
            }}
            initial={{ rotate: initialAngle }}
            animate={{ rotate: initialAngle + 360 }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* The actual dot, positioned at the top edge of the circle */}
            <div
              style={{
                position: "absolute",
                // Place the dot so its center is on the ring's circumference:
                top: -6, // shift up half its size to center on circle edge
                left: radius - 6, // shift left so that dot's center is at [radius, 0]
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: ringColor,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

function BottleModel({ scrollProgress }) {
  const { scene } = useGLTF("/bottle.glb");
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      // Create a wave-like motion path
      const waveX = Math.sin(scrollProgress * Math.PI * 2) * 3;
      const waveY = Math.cos(scrollProgress * Math.PI) * 2;

      gsap.to(modelRef.current.position, {
        x: waveX,
        y: waveY,
        duration: 0.5,
        ease: "power1.out",
      });

      // Spiral rotation effect
      modelRef.current.rotation.y = scrollProgress * Math.PI * 4;

      // Pulse scale effect
      const scale = 0.6 + Math.sin(scrollProgress * Math.PI * 2) * 0.1;
      modelRef.current.scale.set(scale, scale, scale);
    }
  }, [scrollProgress]);

  return (
    <primitive ref={modelRef} object={scene} position={[0, 0, 0]} scale={0.8} />
  );
}

const Benefits = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);
  const benefitsRefs = useRef([]);

  useEffect(() => {
    const lenis = window.lenis;

    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
            setActiveIndex(Math.floor(self.progress * 3));
          },
          onEnter: () => {
            if (lenis) lenis.stop();
          },
          onLeave: () => {
            if (lenis) lenis.start();
          },
          onEnterBack: () => {
            if (lenis) lenis.stop();
          },
          onLeaveBack: () => {
            if (lenis) lenis.start();
          },
        },
      });

      return () => timeline.kill();
    }, wrapperRef);

    return () => {
      ctx.revert();
      if (lenis) lenis.start();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <section
        ref={sectionRef}
        className="w-full min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          // Updated gradient: a smoother transition from a warm hue to an off-white
          background: "linear-gradient(to bottom, #fde268, #f5f3eb)",
        }}
      >
        {/* Replace animated pattern overlay with colliding circular bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          <OrbitRing
            radius={150}
            particleCount={8}
            duration={10}
            ringColor={"rgba(40,82,54,0.6)"}
          />
          <OrbitRing
            radius={350}
            particleCount={8}
            duration={10}
            ringColor={"rgba(40,82,54,0.6)"}
          />
          <OrbitRing
            radius={550}
            particleCount={12}
            duration={15}
            ringColor={"rgba(40,82,54,0.4)"}
          />
        </div>

        <div className="relative max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 px-4">
          <div className="w-full md:w-1/2 h-[80vh] relative">
            <Canvas dpr={[1, 2]} className="touch-none">
              <PerspectiveCamera makeDefault position={[0, 0, 18]} fov={45} />
              <ambientLight intensity={1.5} />
              <directionalLight position={[1, 10, 5]} intensity={1} />
              <spotLight
                position={[0, 10, 0]}
                intensity={2}
                angle={0.6}
                penumbra={1}
                color="#285236"
              />
              <Suspense fallback={null}>
                <BottleModel scrollProgress={scrollProgress} />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  rotateSpeed={0.5}
                  dampingFactor={0.1}
                  enableDamping={true}
                  minPolarAngle={Math.PI / 2.5}
                  maxPolarAngle={Math.PI / 1.5}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-24 relative">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                ref={(el) => (benefitsRefs.current[index] = el)}
                className="relative backdrop-blur-lg"
                style={{
                  opacity: activeIndex === index ? 1 : 0.3,
                  transform: `scale(${activeIndex === index ? 1 : 0.9})`,
                  transition: "all 0.5s ease-out",
                }}
              >
                <motion.div
                  className="absolute -left-8 top-0 w-1 h-full"
                  style={{
                    backgroundColor: benefit.color,
                    scaleY: activeIndex === index ? 1 : 0,
                    transition: "transform 0.5s ease-out",
                  }}
                />
                <div
                  className="pl-8 p-6 rounded-xl"
                  style={{
                    background:
                      activeIndex === index
                        ? "rgba(255, 255, 255, 0.1)"
                        : "transparent",
                    boxShadow:
                      activeIndex === index
                        ? "0 4px 30px rgba(40, 82, 54, 0.1)"
                        : "none",
                    backdropFilter: "blur(5px)",
                  }}
                >
                  <span
                    className="text-sm font-medium mb-2 inline-block px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "#285236",
                      color: "#fde268",
                    }}
                  >
                    {benefit.highlight}
                  </span>
                  <h3 className="text-3xl font-bold text-jungleGreen mt-3 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-lg">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
