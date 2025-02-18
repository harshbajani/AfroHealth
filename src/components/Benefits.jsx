import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  Text,
} from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as THREE from "three";

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

function BottleModel({ scrollProgress }) {
  const { scene } = useGLTF("/bottle.glb");
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      gsap.to(modelRef.current.rotation, {
        y: scrollProgress * Math.PI * 4,
        duration: 0.5,
        ease: "power1.out",
      });

      const floatY = Math.sin(scrollProgress * Math.PI * 2) * 0.5;
      gsap.to(modelRef.current.position, {
        y: floatY,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [scrollProgress]);

  return (
    <primitive ref={modelRef} object={scene} position={[0, 0, 0]} scale={0.7} />
  );
}

function BenefitCard({ content, position, isActive, scrollProgress }) {
  const meshRef = useRef();
  const groupRef = useRef();
  const textGroupRef = useRef();

  useFrame(({ camera }) => {
    if (groupRef.current && textGroupRef.current) {
      // Calculate the angle between the card and camera
      const cardPosition = groupRef.current.position;
      const cameraDirection = camera.position
        .clone()
        .sub(cardPosition)
        .normalize();
      const cardNormal = new THREE.Vector3(0, 0, 1).applyQuaternion(
        groupRef.current.quaternion
      );
      const dot = cameraDirection.dot(cardNormal);

      // Flip text if card is facing away from camera
      if (dot < 0) {
        textGroupRef.current.rotation.y = Math.PI;
      } else {
        textGroupRef.current.rotation.y = 0;
      }

      // Keep card facing the camera
      groupRef.current.lookAt(camera.position);
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.material, {
        opacity: isActive ? 1 : 0.3,
        duration: 0.5,
      });

      gsap.to(meshRef.current.scale, {
        x: isActive ? 1 : 0.8,
        y: isActive ? 1 : 0.8,
        z: isActive ? 1 : 0.8,
        duration: 0.5,
      });
    }
  }, [isActive]);

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef}>
        <planeGeometry args={[4, 2]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
      </mesh>

      {/* Separate group for text that can be independently rotated */}
      <group ref={textGroupRef} position={[0, 0, 0.01]}>
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.3}
          color="#285236"
          anchorX="center"
          anchorY="middle"
        >
          {content.title}
        </Text>
        <Text
          position={[0, 0, 0]}
          fontSize={0.15}
          color="#4a4a4a"
          anchorX="center"
          anchorY="middle"
          maxWidth={3}
        >
          {content.description}
        </Text>
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.2}
          color="#285236"
          anchorX="center"
          anchorY="middle"
        >
          {content.highlight}
        </Text>
      </group>
    </group>
  );
}

function OrbitalSystem({ scrollProgress, activeIndex }) {
  const radius = 8;

  return (
    <group>
      {benefitsData.map((benefit, index) => {
        const angle =
          (2 * Math.PI * index) / benefitsData.length +
          scrollProgress * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <BenefitCard
            key={index}
            content={benefit}
            position={[x, 0, z]}
            isActive={activeIndex === index}
            scrollProgress={scrollProgress}
          />
        );
      })}
    </group>
  );
}

const OrbitalCards = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const lenis = window.lenis;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          setActiveIndex(Math.floor(self.progress * 3));
        },
        onEnter: () => lenis?.stop(),
        onLeave: () => lenis?.start(),
        onEnterBack: () => lenis?.stop(),
        onLeaveBack: () => lenis?.start(),
      });
    });

    return () => {
      ctx.revert();
      lenis?.start();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#fde268] to-[#f5f3eb]"
      data-bgcolor="canary"
    >
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[1, 10, 5]} intensity={1} />
          <spotLight
            position={[0, 10, 0]}
            intensity={2}
            angle={0.6}
            penumbra={1}
            color="#285236"
          />
          <BottleModel scrollProgress={scrollProgress} />
          <OrbitalSystem
            scrollProgress={scrollProgress}
            activeIndex={activeIndex}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            dampingFactor={0.1}
            enableDamping={true}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default OrbitalCards;
