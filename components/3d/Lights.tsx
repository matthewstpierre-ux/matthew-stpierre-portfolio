"use client";

export function Lights() {
  return (
    <>
      {/* Key: warm white front-top */}
      <directionalLight position={[3, 5, 5]} intensity={1.2} color="#f0e8d8" />
      {/* Rim: deep red rear-right — drives brand mood */}
      <pointLight position={[4, 2, -4]} intensity={8} color="#E10A1F" />
      {/* Fill: cool dim below */}
      <pointLight position={[-2, -3, 2]} intensity={0.6} color="#3a4a6a" />
      {/* Ambient */}
      <ambientLight intensity={0.45} color="#1a1a2a" />
    </>
  );
}
