"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import {
  isAudioEnabled,
  setAudioEnabled,
  initAudio,
  playAmbient,
  stopAmbient,
} from "@/lib/audio";
import { ease } from "@/lib/motion";

export function BoomboxSoundToggle() {
  const [enabled, setEnabled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [bars, setBars] = useState([0.3, 0.6, 0.4, 0.7]);

  useEffect(() => {
    setEnabled(isAudioEnabled());
  }, []);

  // Animate VU bars when enabled
  useEffect(() => {
    if (!enabled) return;
    const interval = setInterval(() => {
      setBars([
        0.2 + Math.random() * 0.8,
        0.3 + Math.random() * 0.7,
        0.15 + Math.random() * 0.85,
        0.25 + Math.random() * 0.75,
      ]);
    }, 120);
    return () => clearInterval(interval);
  }, [enabled]);

  async function toggle() {
    const next = !enabled;
    setEnabled(next);
    setAudioEnabled(next);

    if (next) {
      await initAudio();
      playAmbient();
      setExpanded(true);
    } else {
      stopAmbient();
      setExpanded(false);
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {expanded && enabled && (
          <motion.div
            initial={{ opacity: 0, y: 8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 8, height: 0 }}
            transition={{ duration: 0.25, ease }}
            className="mb-2 overflow-hidden"
          >
            <div className="bg-[#0a0a10]/95 backdrop-blur-sm border border-[#C9CDD2]/20 rounded-sm p-3 w-[140px]">
              {/* Track label */}
              <div className="font-mono text-[9px] text-[#7A7E85] tracking-widest mb-2">
                // AMBIENT.LOOP
              </div>
              {/* VU Meter */}
              <div className="flex items-end gap-1 h-8">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm"
                    animate={{ scaleY: h }}
                    style={{
                      originY: 1,
                      background: `linear-gradient(to top, #E10A1F, #B3001B80)`,
                      height: "100%",
                    }}
                    transition={{ duration: 0.1 }}
                  />
                ))}
              </div>
              {/* ON LED */}
              <div className="flex items-center gap-1.5 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E10A1F] shadow-[0_0_6px_rgba(225,10,31,0.8)] animate-pulse" />
                <span className="font-mono text-[9px] text-[#E10A1F] tracking-widest">
                  ON
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Ambient sound: ${enabled ? "on" : "off"}`}
        className="relative flex items-center justify-center w-10 h-10 rounded-sm border border-[#C9CDD2]/20 bg-[#0a0a10]/80 backdrop-blur-sm cursor-pointer"
      >
        <span
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,205,210,0.08) 0%, transparent 50%)",
          }}
        />
        {enabled ? (
          <Volume2 size={16} className="text-[#E10A1F] relative z-10" />
        ) : (
          <VolumeX size={16} className="text-[#7A7E85] relative z-10" />
        )}
        {/* LED */}
        <div
          className={`absolute top-1.5 right-1.5 w-1 h-1 rounded-full transition-colors ${
            enabled ? "bg-[#E10A1F]" : "bg-[#3A3D42]"
          }`}
          style={enabled ? { boxShadow: "0 0 4px rgba(225,10,31,0.8)" } : {}}
        />
      </motion.button>
    </div>
  );
}
