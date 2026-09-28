import TerminalCard from "@/components/ui/terminal-card";
import { profile, profileSnippet } from "@/data";

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-16 border-t border-neutral-200 dark:border-neutral-800">
      <h2 className="font-serif text-2xl font-semibold mb-8 text-neutral-900 dark:text-white">
        About
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <p className="text-[16.5px] leading-relaxed text-neutral-700 dark:text-neutral-300">
          {profile.about}
        </p>
        <TerminalCard command={profileSnippet} language="javascript" />
      </div>
    </section>
  );
}
