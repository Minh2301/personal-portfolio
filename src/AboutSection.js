import SkillSection from "./SkillSection.js";
export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <h1>ABOUT ME</h1>
      <div className="about-section-wrapper">
        <div className="about-section-img"></div>
        <div className="about-section-content">
          <h2>Background</h2>
          <p>
            Hi, my name is Minh. I like to play sports and hit the gym (but not
            too often). I really enjoy coding and love exploring new things. I
            can be useful when it comes to building basic websites, and I'm
            currently interested in learning more about backend development.
            Please continue to scroll to know more about me!
          </p>
        </div>
      </div>
      <SkillSection />
    </section>
  );
}
