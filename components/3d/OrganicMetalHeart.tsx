"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Scene } from "./Scene";
import { Lights } from "./Lights";
import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

useGLTF.preload("/models/organic-metal-heart.glb");

function HeartModel({ hovered }: { hovered: boolean }) {
  const { scene } = useGLTF("/models/organic-metal-heart.glb");
  const ref = useRef<THREE.Group>(null!);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
          color: "#8a8e95",
          metalness: 0.98,
          roughness: 0.03,
          emissive: new THREE.Color("#B3001B"),
          emissiveIntensity: hovered ? 0.5 : 0.15,
        });
      }
    });
  }, [scene, hovered]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const breath = 0.95 + Math.sin(t * (hovered ? 4 : 1.5)) * (hovered ? 0.07 : 0.04);
    ref.current.scale.setScalar(breath);
    ref.current.rotation.y = t * 0.3;
  });

  return <primitive ref={ref} object={scene} scale={[1.2, 1.2, 1.2]} />;
}

interface OrganicMetalHeartProps {
  hovered?: boolean;
  className?: string;
}

export default function OrganicMetalHeart({
  hovered = false,
  className,
}: OrganicMetalHeartProps) {
  return (
    <Scene
      className={className}
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 2]}
    >
      <Lights />
      <HeartModel hovered={hovered} />
      <EffectComposer>
        <Bloom
          intensity={hovered ? 1.2 : 0.4}
          luminanceThreshold={0.5}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>
    </Scene>
  );
}
