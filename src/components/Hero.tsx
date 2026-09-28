import { useState } from "react";
import { AuroraTextEffect } from "@/components/ui/aurora-text-effect";
import { LoopingWords } from "@/components/ui/looping-words";
import BeamGridBackground from "@/components/ui/beam-grid-background";
import { profile } from "@/data";
import photo from "@/photo.jpg";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard not available — no-op
    }
  };

  return (
    <header className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
      <BeamGridBackground
        className="absolute inset-0 opacity-60 dark:opacity-40"
        gridSize={36}
        beamCount={4}
      />
      <div className="relative max-w-3xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col-reverse sm:flex-row sm:items-start gap-10 justify-between">
          <div className="flex-1 min-w-0">
            <p className="font-mono text-sm text-accent dark:text-accent-dark mb-3">
              Software Developer · MCA Fresher
            </p>
            <div className="mb-3">
              <AuroraTextEffect
                text={profile.name}
                fontSize="clamp(2.2rem, 6vw, 3rem)"
                className="!bg-transparent justify-start font-serif font-semibold tracking-tight"
              />
            </div>
            <div className="text-lg text-neutral-500 dark:text-neutral-400 mb-6 flex items-center gap-2 flex-wrap">
              <span>Open to work as</span>
              <LoopingWords words={profile.roles} className="font-medium text-neutral-900 dark:text-white" />
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <button
                onClick={copyEmail}
                className="font-mono text-xs border border-neutral-300 dark:border-neutral-700 rounded px-2.5 py-1 text-neutral-600 dark:text-neutral-300 hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark transition-colors"
              >
                {copied ? "Copied ✓" : profile.email}
              </button>
              <span className="text-neutral-500 dark:text-neutral-400">{profile.phone}</span>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-accent dark:text-accent-dark hover:underline">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent dark:text-accent-dark hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
          <img
            src={photo}
            alt={profile.name}
            className="w-32 h-40 sm:w-36 sm:h-44 object-cover rounded-lg border border-neutral-200 dark:border-neutral-700 shrink-0"
          />
        </div>
      </div>
    </header>
  );
}
