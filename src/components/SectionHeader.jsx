export default function SectionHeader({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`mx-auto mb-10 flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <p className="section-tag">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
