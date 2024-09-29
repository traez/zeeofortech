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
      <p className="text-lg font-bold">
        I&apos;m well-suited to software development as a lifelong learning path
        because I am constantly building and experimenting with new projects.
        Below are some of my notable public works.
      </p>
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
