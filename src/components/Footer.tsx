import { profile } from "@/data";

export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-12">
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Based in {profile.location} — open to {profile.openTo}.
      </p>
      <div className="mt-3 flex gap-5 text-sm">
        <a href={`mailto:${profile.email}`} className="text-accent dark:text-accent-dark hover:underline">
          Email
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-accent dark:text-accent-dark hover:underline">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent dark:text-accent-dark hover:underline">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
