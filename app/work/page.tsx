import { ClientShell } from "@/components/ClientShell";
import { Footer } from "@/components/sections/Footer";
import { WorkIndex } from "@/components/work/WorkIndex";

export const metadata = {
  title: "Work — Matthew St Pierre",
  description:
    "Music industry projects, artist development, web3, and Curtain Call Digital.",
};

export default function WorkPage() {
  return (
    <>
      <ClientShell />
      <main id="main-content">
        <WorkIndex />
      </main>
      <Footer />
    </>
  );
}
