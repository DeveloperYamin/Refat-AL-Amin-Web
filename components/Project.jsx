import React from "react";
import ProjectItem from "./ProjectItem";

export default function Project() {
  return (
    <section className="bg-white dark:bg-gray-900 w-full p-6">
      <header id="projects">
        <h2 className="text-4xl font-bold dark:text-gray-200 text-center pb-10">
          Projects
        </h2>
      </header>
      <section className="flex flex-wrap justify-center items-center gap-6">
        {[1, 2, 3, 4].map((_, index) => (
          <ProjectItem key={index} />
        ))}
      </section>
    </section>
  );
}
