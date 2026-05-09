import { ClientShell } from "@/components/ClientShell";
import { Footer } from "@/components/sections/Footer";
import { CurtainCallHub } from "@/components/work/CurtainCallHub";

export const metadata = {
  title: "Curtain Call Digital — Matthew St Pierre",
  description:
    "Side projects and client work outside the music industry: BOBS Music, Yellow Tape Universe, Lucky Duck Thrift, Flux Gigs.",
};

export default function CurtainCallPage() {
  return (
    <>
      <ClientShell />
      <main id="main-content">
        <CurtainCallHub />
      </main>
      <Footer />
    </>
  );
}
