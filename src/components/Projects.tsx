import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-16 border-t border-neutral-200 dark:border-neutral-800">
      <h2 className="font-serif text-2xl font-semibold mb-8 text-neutral-900 dark:text-white">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900 hover:border-accent dark:hover:border-accent-dark transition-colors"
          >
            <h3 className="font-serif text-lg font-semibold text-neutral-900 dark:text-white mb-1.5">
              {p.title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              <a
                href={p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-300 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                <Github size={15} /> Code
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-300 hover:text-accent dark:hover:text-accent-dark transition-colors"
                >
                  <ExternalLink size={15} /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
