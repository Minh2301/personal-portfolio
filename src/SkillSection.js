export default function SkillSection() {
  return (
    <section className="skill-section">
      <h2>My Skills</h2>
      <div className="skill-section-wrapper">
        <SkillLine name="HTML" percent={50} />
        <SkillLine name="CSS" percent={50} />
        <SkillLine name="JAVASCRIPT" percent={60} />
        <SkillLine name="C" percent={25} />
        <SkillLine name="C++" percent={30} />
        <SkillLine name="PYTHON" percent={25} />
        <SkillLine name="JAVA" percent={10} />
      </div>
    </section>
  );
}

function SkillLine({ name, percent }) {
  return (
    <div className="skill-line-wrapper">
      <div className="skill-line-name">{name}</div>
      <div className="skill-line">
        <div className="skill-line-item" style={{ width: percent + "%" }}></div>
      </div>
    </div>
  );
}
