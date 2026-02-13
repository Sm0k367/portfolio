"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, MeshWobbleMaterial } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

const HazeSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // 128 BPM Pulse Simulation (approx 2.13Hz)
    const pulse = Math.sin(t * 13.3) * 0.05 + 1;
    meshRef.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#42069A" // Purple Haze Dominance
          emissive="#00F0FF" // Omega Cyan Glow
          emissiveIntensity={0.5}
          speed={3}
          distort={0.4}
          radius={1}
        />
      </Sphere>
      {/* Outer Ghost Layer for Smoke Effect */}
      <Sphere args={[1.2, 32, 32]}>
        <MeshWobbleMaterial
          color="#FF00AA" 
          transparent
          opacity={0.1}
          speed={1}
          factor={0.7}
        />
      </Sphere>
    </Float>
  );
};

export default function HazeAvatar() {
  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      {/* The SVG Silhouette Overlay - The Haze Manifestor */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]"
        >
          <path
            fill="rgba(5, 0, 10, 0.8)"
            d="M100,20 C120,20 140,50 140,90 C140,130 120,170 100,180 C80,170 60,130 60,90 C60,50 80,20 100,20 Z"
          />
          {/* Neon Eye Glow */}
          <circle cx="85" cy="85" r="3" fill="#00F0FF" className="animate-pulse" />
          <circle cx="115" cy="85" r="3" fill="#00F0FF" className="animate-pulse" />
        </svg>
      </div>

      {/* The Quantum Core Sphere */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#FFD700" />
          <HazeSphere />
        </Canvas>
      </div>

      {/* Background Smoke Ripples */}
      <div className="absolute inset-0 bg-nebula-glass rounded-full blur-3xl animate-haze-pulse opacity-50" />
    </div>
  );
}
