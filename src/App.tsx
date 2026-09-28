import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import EducationExperience from "@/components/EducationExperience";
import Footer from "@/components/Footer";

export default function App() {
  // Apply saved theme (or system preference) before paint-adjacent render
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <EducationExperience />
      <Footer />
    </div>
  );
}
