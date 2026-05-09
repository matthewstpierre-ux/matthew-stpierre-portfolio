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
import { cn } from "@/lib/utils";
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
  const bootRef = useRef(0);

  useEffect(() => {
    // Keep original colors per PRD
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => {
            if (m instanceof THREE.MeshStandardMaterial) {
              m.roughness = Math.min(m.roughness + 0.1, 1);
            }
          });
        }
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();

    // Idle float
    ref.current.position.y = Math.sin(t * 0.8) * 0.04;

    // Mouse tilt (desktop)
    const targetX = mouseY * 0.15;
    const targetY = mouseX * 0.15;
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;

    // Boot glitch
    if (isBooting) {
      bootRef.current += state.clock.getDelta() * 8;
      ref.current.position.x = Math.sin(bootRef.current * 20) * 0.05;
    } else {
      ref.current.position.x += (0 - ref.current.position.x) * 0.1;
      bootRef.current = 0;
    }
  });

  return <primitive ref={ref} object={scene} scale={[1.4, 1.4, 1.4]} />;
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
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = (e.clientY / window.innerHeight) * 2 - 1;
    setMouseX(nx);
    setMouseY(ny);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Trigger boot glitch on route change
  useEffect(() => {
    setIsBooting(true);
    const t = setTimeout(() => setIsBooting(false), 600);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <motion.div
      className={cn(
        "fixed z-50",
        isMobile
          ? "bottom-4 left-1/2 -translate-x-1/2"
          : "bottom-6 right-6"
      )}
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.9 }
      }
      transition={{ type: "spring", duration: 0.7, bounce: 0.2 }}
    >
      <div className="relative">
        {/* Nav overlay on screen */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.2, ease }}
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-[180px]"
            >
              <div className="bg-[#0a0a10]/95 backdrop-blur-sm border border-[#C9CDD2]/20 rounded-sm overflow-hidden">
                {/* CRT header bar */}
                <div className="px-3 py-1.5 border-b border-[#C9CDD2]/10 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E10A1F] animate-pulse" />
                  <span className="font-mono text-[10px] text-[#7A7E85] tracking-widest">
                    NAVIGATE.SYS
                  </span>
                </div>
                {/* Nav links */}
                <nav className="py-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setExpanded(false)}
                      className={cn(
                        "block px-4 py-2 font-mono text-xs tracking-widest transition-colors",
                        "hover:bg-[#B3001B]/20 hover:text-[#EAEAEA]",
                        pathname === link.href
                          ? "text-[#E10A1F]"
                          : "text-[#9A9A9A]"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The PC Computer 3D element */}
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? "Close navigation" : "Open navigation"}
          aria-expanded={expanded}
          className="relative block cursor-pointer focus:outline-none"
          style={{ width: isMobile ? 100 : 120, height: isMobile ? 100 : 120 }}
        >
          <Scene
            camera={{ position: [0, 0.5, 4], fov: 45 }}
            dpr={[1, 1.5]}
          >
            <Lights />
            <PCModel mouseX={mouseX} mouseY={mouseY} isBooting={isBooting} />
          </Scene>
          {/* Glow under */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(179,0,27,0.4) 0%, transparent 70%)",
            }}
          />
        </button>
      </div>
    </motion.div>
  );
}
