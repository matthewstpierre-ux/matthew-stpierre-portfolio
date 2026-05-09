"use client";

import dynamic from "next/dynamic";

const PCComputerNav = dynamic(() => import("@/components/3d/PCComputerNav"), {
  ssr: false,
});

const BoomboxSoundToggle = dynamic(
  () =>
    import("@/components/ui/BoomboxSoundToggle").then(
      (m) => m.BoomboxSoundToggle
    ),
  { ssr: false }
);

const CursorAura = dynamic(
  () => import("@/components/ui/CursorAura").then((m) => m.CursorAura),
  { ssr: false }
);

export function ClientShell() {
  return (
    <>
      <CursorAura />
      <PCComputerNav />
      <BoomboxSoundToggle />
    </>
  );
}
