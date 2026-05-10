"use client";

let ambientSound: import("howler").Howl | null = null;
let hoverSound: import("howler").Howl | null = null;
let clickSound: import("howler").Howl | null = null;

export const AUDIO_KEY = "portfolio.audio.enabled";

export function isAudioEnabled(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUDIO_KEY) === "true";
}

export function setAudioEnabled(enabled: boolean): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(AUDIO_KEY, String(enabled));
}

export async function initAudio(): Promise<void> {
  const { Howl } = await import("howler");

  if (!ambientSound) {
    ambientSound = new Howl({
      src: ["/audio/ambient-loop.wav"],
      loop: true,
      volume: 0.05, // matrix.wav is loud — keep at 5%
      html5: true,
    });
  }

  if (!hoverSound) {
    hoverSound = new Howl({
      src: ["/audio/hover-beep.mp3"],
      volume: 0.04,
    });
  }

  if (!clickSound) {
    clickSound = new Howl({
      src: ["/audio/click.mp3"],
      volume: 0.07,
    });
  }
}

export function playAmbient(): void {
  if (ambientSound && !ambientSound.playing()) {
    ambientSound.play();
  }
}

export function stopAmbient(): void {
  if (!ambientSound) return;
  ambientSound.fade(ambientSound.volume(), 0, 600);
  setTimeout(() => ambientSound?.stop(), 600);
}

export function playHover(): void {
  if (!isAudioEnabled()) return;
  hoverSound?.play();
}

export function playClick(): void {
  if (!isAudioEnabled()) return;
  clickSound?.play();
}
