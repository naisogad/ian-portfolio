"use client";

import { useState } from "react";
import type { Project } from "../data/portfolio";
import { ProjectCard } from "./ProjectCard";

type ProjectFilter = "Live" | "Private";

export function WorkSection({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectFilter>("Live");
  const visibleProjects = projects.filter((project) => project.status === filter);
  const counts = {
    Live: projects.filter((project) => project.status === "Live").length,
    Private: projects.filter((project) => project.status === "Private").length,
  };

  return (
    <section id="work" className="editorial-container section-block work-section" aria-labelledby="work-heading">
      <div className="work-section-ghost" aria-hidden="true">WORK</div>
      <div className="work-topline">
        <p className="work-kicker"><span aria-hidden="true" />Featured</p>
        <div className="work-filter" aria-label="Project visibility">
          {(["Live", "Private"] as const).map((option) => (
            <button
              className={`work-filter-option${filter === option ? " is-active" : ""}`}
              type="button"
              aria-pressed={filter === option}
              key={option}
              onClick={() => setFilter(option)}
            >
              {option} <small>{String(counts[option]).padStart(2, "0")}</small>
            </button>
          ))}
        </div>
      </div>
      <div className="work-intro">
        <h2 id="work-heading">Projects built with care, context, and a clear purpose.</h2>
        <p>Live products and private builds across websites, platforms, and practical applications.</p>
      </div>

      <div className="project-list" aria-live="polite">
        {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}
