import { GraduationCap, Briefcase } from "lucide-react";
import StackList from "@/components/ui/stack-list";
import { education, experience } from "@/data";

export default function EducationExperience() {
  const eduItems = education.map((e) => ({
    icon: <GraduationCap size={20} />,
    title: e.title,
    subtitle: e.subtitle,
    date: e.date,
  }));

  const expItems = experience.map((e) => ({
    icon: <Briefcase size={20} />,
    title: e.title,
    subtitle: e.subtitle,
    date: e.date,
  }));

  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-2xl font-semibold mb-6 text-neutral-900 dark:text-white">
            Education
          </h2>
          <StackList items={eduItems} initialVisible={2} />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold mb-6 text-neutral-900 dark:text-white">
            Experience
          </h2>
          <StackList items={expItems} initialVisible={2} />
        </div>
      </div>
    </section>
  );
}
