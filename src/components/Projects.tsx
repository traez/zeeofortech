"use client";
import { useState } from "react";
import ProjectItem from "./ProjectItem";
import projectsArray, { DataType } from "@/lib/data";

const projectCategories = [
  "Educational Resources",
  "Entertainment and Games",
  "Figma-to-Code Projects",
  "Full Stack Apps",
  "Productivity Tools",
  "Sports and Wellness Tools",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0]);

  const filteredProjects = projectsArray.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section className="space-y-6 mx-4">
      <aside className="p-4 mx-4 text-base font-bold bg-[#9FE2BF] text-gray-800 rounded-lg border-[5px] border-black">
        <p className="mb-4">
          Fate destined me to be a software developer, as I can&apos;t resist
          building and experimenting with new projects. It’s my lifelong quest
          to drive innovation and improve human experiences—one line of code at
          a time! Here are some of my notable public works.
        </p>
        <p>
          If you’re looking for someone to turn your ideas into reality, feel
          free to reach out—I&apos;d love to collaborate for a fee!
        </p>
      </aside>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {projectCategories.map((category) => (
          <li key={category}>
            <button
              className={`w-full h-full min-h-[60px] text-sm sm:text-base p-2 rounded-md border-2 transition-colors duration-300 ease-in-out
                ${
                  activeCategory === category
                    ? "bg-[#2c5c4d] text-white border-[#2c5c4d]"
                    : "bg-white text-black border-black hover:bg-[#9FE2BF] hover:text-[#2c5c4d] hover:border-[#2c5c4d]"
                }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      {/* Placeholder for future project display component */}
      <article className="mt-6 p-4 bg-[#9FE2BF] rounded-lg border-2 border-black">
        <p className="font-bold mb-2">
          Selected category:{" "}
          <span className="text-yellow-600">{activeCategory}</span>
        </p>
        <menu className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: DataType) => (
            <ProjectItem
              key={project.name}
              name={project.name}
              screenshot={project.screenshot}
              sourceCode={project.sourceCode}
              website={project.website}
              relevance={project.relevance}
            />
          ))}
        </menu>
      </article>
    </section>
  );
}
