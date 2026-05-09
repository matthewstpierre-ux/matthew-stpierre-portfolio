"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SceneProps {
  children: ReactNode;
  className?: string;
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };
  dpr?: [number, number];
}

export function Scene({
  children,
  className,
  camera = { position: [0, 0, 5], fov: 45 },
  dpr = [1, 2],
}: SceneProps) {
  return (
    <Canvas
      className={cn("w-full h-full", className)}
      camera={camera}
      dpr={dpr}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
