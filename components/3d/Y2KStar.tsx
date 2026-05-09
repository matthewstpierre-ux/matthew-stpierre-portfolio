"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/models/star-y2k.glb");

interface Y2KStarModelProps {
  spinning?: boolean;
  pulse?: boolean;
}

export function Y2KStarModel({ spinning = false, pulse = false }: Y2KStarModelProps) {
  const { scene } = useGLTF("/models/star-y2k.glb");
  const ref = useRef<THREE.Group>(null!);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
          color: "#C9CDD2",
          metalness: 1,
          roughness: 0.02,
          emissive: new THREE.Color("#E10A1F"),
          emissiveIntensity: 0.15,
        });
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    if (spinning) {
      ref.current.rotation.y += 0.04;
    } else {
      ref.current.rotation.y = t * 0.5;
    }
    if (pulse) {
      const s = 1 + Math.sin(t * 3) * 0.08;
      ref.current.scale.setScalar(s);
    }
  });

  return <primitive ref={ref} object={scene} />;
}

// Standalone scene wrapper for use inline
import { Scene } from "./Scene";
import { Lights } from "./Lights";

interface Y2KStarProps {
  size?: number;
  spinning?: boolean;
  pulse?: boolean;
  className?: string;
}

export default function Y2KStar({
  size = 60,
  spinning = false,
  pulse = false,
  className,
}: Y2KStarProps) {
  return (
    <div style={{ width: size, height: size }} className={className}>
      <Scene camera={{ position: [0, 0, 3], fov: 40 }} dpr={[1, 2]}>
        <Lights />
        <Y2KStarModel spinning={spinning} pulse={pulse} />
      </Scene>
    </div>
  );
}
