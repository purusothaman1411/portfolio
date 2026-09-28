import { motion } from "framer-motion";
import { skills } from "@/data";

export default function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-16 border-t border-neutral-200 dark:border-neutral-800">
      <h2 className="font-serif text-2xl font-semibold mb-8 text-neutral-900 dark:text-white">
        Skills
      </h2>
      <div className="flex flex-col gap-5">
        {skills.map((group) => (
          <div key={group.group} className="flex gap-4 items-baseline flex-wrap">
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 w-24 shrink-0">
              {group.group.toLowerCase()}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                  className="font-mono text-[13px] px-2.5 py-1 rounded bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
