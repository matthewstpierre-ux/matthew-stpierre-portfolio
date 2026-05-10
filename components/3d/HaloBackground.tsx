"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { Scene } from "./Scene";
import { Lights } from "./Lights";

useGLTF.preload("/models/chrome-sigil-halo.glb");

function HaloMesh() {
  const { scene } = useGLTF("/models/chrome-sigil-halo.glb");
  const ref = useRef<THREE.Group>(null!);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
          color: "#C9CDD2",
          metalness: 0.95,
          roughness: 0.05,
          emissive: new THREE.Color("#B3001B"),
          emissiveIntensity: 0.06,
          transparent: true,
          opacity: 0.7,
        });
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.x = Math.sin(t * 0.08) * 0.04;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[3.5, 3.5, 3.5]}
      position={[0, 0, -4]}
    />
  );
}

interface HaloBackgroundProps {
  className?: string;
  opacity?: number;
}

export default function HaloBackground({ className, opacity = 0.4 }: HaloBackgroundProps) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        pointerEvents: "none",
        zIndex: 0,
      }}
      className={className}
    >
      <Scene
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.2]}
      >
        <Lights />
        <HaloMesh />
        <EffectComposer>
          <Bloom
            intensity={0.4}
            luminanceThreshold={0.5}
            blendFunction={BlendFunction.ADD}
          />
          <Vignette eskil={false} offset={0.1} darkness={0.7} />
        </EffectComposer>
      </Scene>
    </div>
  );
}
