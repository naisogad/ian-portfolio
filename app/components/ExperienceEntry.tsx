import type { Experience } from "../data/portfolio";

export function ExperienceEntry({ entry, index }: { entry: Experience; index: number }) {
  return (
    <details className="experience-entry" open={entry.id === "gunita-experience"}>
      <summary className="experience-summary">
        <span className="experience-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="experience-summary-main">
          <span className="experience-role">{entry.role}</span>
          <span className="experience-organisation">{entry.organisation}</span>
        </span>
        <span className="experience-summary-side">
          <span>{entry.meta}</span>
          <span className="experience-toggle" aria-hidden="true" />
        </span>
      </summary>
      <div className="experience-content">
        <p className="experience-label">{entry.label}</p>
        <ul>
          {entry.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
        </ul>
      </div>
    </details>
  );
}
