import { Link } from "react-router-dom";

export default function ProjectSection() {
  return (
    <section classsName="project-section" id="project">
      <h1>PROJECT</h1>
      <div className="project-section-wrapper">
        <BoxLink name="chain-z">Chain Z Project</BoxLink>
        <BoxLink name="thriving-thunder">Thriving Thunder Project</BoxLink>
      </div>
    </section>
  );
}
export function ProjectPage({ name, header, link, children }) {
  return (
    <section className="page">
      <div className="project-page">
        <div className="project-page-header">{header}</div>
        <div className="project-page-wrapper">
          <div className={"project-page-img project-page-img-" + name}></div>
          <div className="project-page-content">
            <h2>BACKGROUND</h2>
            <p>{children}</p>
            <a className="project-page-button" href={link}>
              VISIT IT!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BoxLink({ name, children }) {
  return (
    <div className="project-section-item">
      <Link
        to={"project/" + name}
        className={"project-section-img project-section-img-" + name}
      ></Link>
      <p>{children}</p>
    </div>
  );
}
