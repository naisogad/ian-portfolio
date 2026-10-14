import Image from "next/image";
import type { Project } from "../data/portfolio";

function PlaceholderArtwork({ project }: { project: Project }) {
  return (
    <div className={`project-artwork ${project.artworkClassName}`} role="img" aria-label={project.image.alt}>
      <div className="artwork-grid" aria-hidden="true" />
      <div className="artwork-window" aria-hidden="true">
        <div className="artwork-window-top"><span /><span /><span /></div>
        <div className="artwork-window-body">
          <span className="artwork-line artwork-line-long" />
          <span className="artwork-line artwork-line-short" />
          <div className="artwork-blocks"><span /><span /><span /></div>
        </div>
      </div>
      <span className="artwork-label">{project.image.placeholderLabel}</span>
      <span className="artwork-corner" aria-hidden="true">0{project.number}</span>
    </div>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  if (!project.gallery?.length) {
    return project.image.src ? (
      <Image
        className="project-image"
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(max-width: 800px) 100vw, 66vw"
      />
    ) : <PlaceholderArtwork project={project} />;
  }

  return (
    <div className="project-gallery">
      {project.gallery.map((image, index) => (
        <div className={`project-gallery-item project-gallery-item-${index + 1}`} key={image.src}>
          <Image
            className="project-gallery-image"
            src={image.src}
            alt={image.alt}
            fill
            sizes={index === 0 ? "(max-width: 800px) 100vw, 40vw" : "(max-width: 800px) 25vw, 14vw"}
          />
        </div>
      ))}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-image-frame">
        <ProjectGallery project={project} />
        <span className={`project-status project-status-${project.status.toLowerCase()}`}><span aria-hidden="true" />{project.status}</span>
        {project.links?.[0] ? (
          <a className="project-image-link" href={project.links[0].href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
            <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>

      <div className="project-details">
        <div className="project-heading-row">
          <div>
            <span className="project-number">0{project.number}</span>
            <h3>{project.title}</h3>
          </div>
        </div>
        <p className="project-summary">{project.summary}</p>
        <div className="project-card-meta">
          <span className="project-category">{project.category}</span>
          <ul className="project-tags" aria-label={`${project.title} technologies`}>
            {project.technologies.slice(0, 3).map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        {project.links?.length ? (
          <div className="project-links">
            <span className="project-links-label">Explore project links</span>
            <ul>
              {project.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
