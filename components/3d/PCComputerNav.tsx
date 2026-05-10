"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Scene } from "./Scene";
import { Lights } from "./Lights";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ease } from "@/lib/motion";

useGLTF.preload("/models/free-y2k-pc-computer.glb");

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/#about" },
  { label: "WORK", href: "/work" },
  { label: "CONTACT", href: "/#contact" },
];

function PCModel({
  mouseX,
  mouseY,
  isBooting,
}: {
  mouseX: number;
  mouseY: number;
  isBooting: boolean;
}) {
  const { scene } = useGLTF("/models/free-y2k-pc-computer.glb");
  const ref = useRef<THREE.Group>(null!);
  const bootTimer = useRef(0);

  useEffect(() => {
    // Per-mesh material system — 7 named parts, each with distinct depth/tone
    const getMaterial = (meshName: string): THREE.MeshStandardMaterial => {
      const n = meshName.toLowerCase();

      if (n.includes("monitor")) {
        // CRT bezel + screen — silver frame, strong red emissive so screen glows
        return new THREE.MeshStandardMaterial({
          color: new THREE.Color("#9A9EA4"),
          metalness: 0.72,
          roughness: 0.22,
          emissive: new THREE.Color("#B3001B"),
          emissiveIntensity: 0.6,
        });
      }
      if (n.includes("keyboard")) {
        // Keyboard — darker silver, slightly matte, visually recessed
        return new THREE.MeshStandardMaterial({
          color: new THREE.Color("#7A8088"),
          metalness: 0.82,
          roughness: 0.28,
          emissive: new THREE.Color("#B3001B"),
          emissiveIntensity: 0.02,
        });
      }
      if (n.includes("mouse")) {
        // Mouse — bright chrome, same family as main body
        return new THREE.MeshStandardMaterial({
          color: new THREE.Color("#C9CDD2"),
          metalness: 0.93,
          roughness: 0.08,
          emissive: new THREE.Color("#B3001B"),
          emissiveIntensity: 0.05,
        });
      }
      if (n.includes("pencil case")) {
        // Pencil case — darkest chrome, supporting element
        return new THREE.MeshStandardMaterial({
          color: new THREE.Color("#5A5E64"),
          metalness: 0.88,
          roughness: 0.18,
          emissive: new THREE.Color("#B3001B"),
          emissiveIntensity: 0.03,
        });
      }
      if (n === "pencils_material.001_0" || n.startsWith("pencils")) {
        // Pencils — warm blood-red metallic, the accent pop against chrome
        return new THREE.MeshStandardMaterial({
          color: new THREE.Color("#8C2A1A"),
          metalness: 0.68,
          roughness: 0.32,
          emissive: new THREE.Color("#B3001B"),
          emissiveIntensity: 0.18,
        });
      }
      if (n.includes("paper")) {
        // Paper — off-white matte, maximum contrast to all chrome
        return new THREE.MeshStandardMaterial({
          color: new THREE.Color("#D4D8DC"),
          metalness: 0.0,
          roughness: 0.92,
        });
      }
      // Computer base — hero chrome silver with faint red blush
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color("#C9CDD2"),
        metalness: 0.95,
        roughness: 0.05,
        emissive: new THREE.Color("#B3001B"),
        emissiveIntensity: 0.07,
      });
    };

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mat = getMaterial(mesh.name);
        mesh.material = mat;
      }
    });
    // Front face with slight left tilt
    if (ref.current) {
      ref.current.rotation.y = Math.PI * 0.5 - (15 * Math.PI) / 180;
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();

    // Idle float
    ref.current.position.y = Math.sin(t * 0.8) * 0.05;

    // Mouse tilt — subtle
    const targetX = mouseY * 0.12;
    const targetY = Math.PI * 0.5 - (15 * Math.PI) / 180 + mouseX * 0.1;
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;

    // Boot glitch
    if (isBooting) {
      bootTimer.current += delta * 8;
      ref.current.position.x = Math.sin(bootTimer.current * 20) * 0.04;
    } else {
      ref.current.position.x += (0 - ref.current.position.x) * 0.1;
      bootTimer.current = 0;
    }
  });

  return <primitive ref={ref} object={scene} scale={[1, 1, 1]} />;
}

interface PCComputerNavProps {
  visible?: boolean;
}

export default function PCComputerNav({ visible = true }: PCComputerNavProps) {
  const pathname = usePathname();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isBooting, setIsBooting] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMouseX((e.clientX / window.innerWidth) * 2 - 1);
    setMouseY((e.clientY / window.innerHeight) * 2 - 1);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    setIsBooting(true);
    const t = setTimeout(() => setIsBooting(false), 600);
    return () => clearTimeout(t);
  }, [pathname]);

  const canvasSize = isMobile ? 100 : 160;

  return (
    <motion.div
      style={{
        position: "fixed",
        zIndex: 50,
        bottom: isMobile ? "16px" : "24px",
        right: isMobile ? "16px" : "24px",
      }}
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.9 }
      }
      transition={{ type: "spring", duration: 0.5, bounce: 0 }}
    >
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "0px" }}>
        {/* Nav dropdown — appears above computer */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.2, ease }}
              style={{
                position: "absolute",
                bottom: "100%",
                right: 0,
                transformOrigin: "bottom right",
                marginBottom: "8px",
                width: "260px",
                background: "rgba(8, 8, 12, 0.97)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(201,205,210,0.25)",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {/* CRT header */}
              <div
                style={{
                  padding: "10px 16px",
                  borderBottom: "1px solid rgba(201,205,210,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--blood)",
                    boxShadow: "0 0 6px var(--blood)",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--steel)",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}
                >
                  NAVIGATE.SYS
                </span>
              </div>
              {/* Nav links */}
              <nav>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setExpanded(false)}
                    style={{
                      display: "block",
                      padding: "16px 24px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "18px",
                      letterSpacing: "0.2em",
                      textDecoration: "none",
                      color: pathname === link.href ? "var(--blood)" : "var(--steel)",
                      borderBottom: "1px solid rgba(201,205,210,0.06)",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(179,0,27,0.1)";
                      (e.currentTarget as HTMLElement).style.color = "var(--bone)";
                      (e.currentTarget as HTMLElement).style.paddingLeft = "32px";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = pathname === link.href ? "var(--blood)" : "var(--steel)";
                      (e.currentTarget as HTMLElement).style.paddingLeft = "24px";
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Computer 3D + MENU label */}
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? "Close navigation" : "Open navigation"}
          aria-expanded={expanded}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2px",
          }}
        >
          {/* 3D computer */}
          <div
            style={{
              width: `${canvasSize}px`,
              height: `${canvasSize}px`,
              position: "relative",
            }}
          >
            <Scene
              camera={{ position: [0, 0.8, 6], fov: 38 }}
              dpr={[1, 1.5]}
            >
              <Lights />
              <PCModel mouseX={mouseX} mouseY={mouseY} isBooting={isBooting} />
            </Scene>
            {/* Glow beneath */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "16px",
                borderRadius: "50%",
                background: "radial-gradient(ellipse, rgba(179,0,27,0.5) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* MENU label */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              letterSpacing: "0.3em",
              color: expanded ? "var(--blood)" : "var(--steel)",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
              borderTop: "1px solid rgba(201,205,210,0.1)",
              paddingTop: "6px",
              width: "100%",
              textAlign: "center",
            }}
          >
            {expanded ? "CLOSE" : "MENU"}
          </div>
        </button>
      </div>
    </motion.div>
  );
}
