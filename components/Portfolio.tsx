"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import data, { PortfolioCategories } from "@/constants/portfolio";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = Object.values(PortfolioCategories);

  const projects = data.projectSet;

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <Section id="portfolio" title="PORTFOLIO">
      <div className="flex justify-center mt-8 mb-12 space-x-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
            className="rounded-md"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
