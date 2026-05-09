"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { Scene } from "./Scene";
import { Lights } from "./Lights";

useGLTF.preload("/models/chrome-sigil-halo.glb");

function HaloModel({ scrollY }: { scrollY: number }) {
  const { scene } = useGLTF("/models/chrome-sigil-halo.glb");
  const ref = useRef<THREE.Group>(null!);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#C9CDD2",
          metalness: 0.95,
          roughness: 0.05,
          emissive: new THREE.Color("#B3001B"),
          emissiveIntensity: 0.08,
        });
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.2;
    ref.current.position.y = scrollY * -0.003;
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.03;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[2.5, 2.5, 2.5]}
      position={[0, 0, -3]}
    />
  );
}

interface ChromeSigilHaloProps {
  scrollY?: number;
  className?: string;
}

export default function ChromeSigilHalo({
  scrollY = 0,
  className,
}: ChromeSigilHaloProps) {
  return (
    <Scene
      className={className}
      camera={{ position: [0, 0, 8], fov: 40 }}
      dpr={[1, 1.5]}
    >
      <Lights />
      <HaloModel scrollY={scrollY} />
      <EffectComposer>
        <Bloom
          intensity={0.6}
          luminanceThreshold={0.6}
          luminanceSmoothing={0.3}
          blendFunction={BlendFunction.ADD}
        />
        <ChromaticAberration offset={[0.0005, 0.0005] as unknown as [number, number]} />
        <Vignette eskil={false} offset={0.1} darkness={0.6} />
      </EffectComposer>
    </Scene>
  );
}
