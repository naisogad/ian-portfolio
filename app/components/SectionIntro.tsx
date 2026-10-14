type SectionIntroProps = {
  description?: string;
  eyebrow: string;
  index: string;
  title: string;
  titleId: string;
};

export function SectionIntro({ description, eyebrow, index, title, titleId }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <span className="section-index">{index}</span>
      <div className="section-intro-main">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId} className="display-heading section-heading">{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
    </div>
  );
}
