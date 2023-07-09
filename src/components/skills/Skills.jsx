import "./skills.css";
import { skills } from "../../Data";
import ShapeOne from "../../assets/shape-1.png";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title text-cs">Professional skills</h2>
      <p className="section__subtitle text-cs">
        My <span>talent</span>
      </p>
      <div className="skills__container container grid">
        {skills.map(({ name, percentage, description }, index) => {
          return (
            <div key={index} className="skills__item">
              <div className="skills__titles">
                <h3 className="skills__name">{name}</h3>
                <span className="skills__number">
                  {percentage} <span>%</span>
                </span>
              </div>
              <p className="skills__description">{description}</p>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ width: `${percentage}%` }}>
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section__deco deco__left">
        <img src={ShapeOne} alt="" className="shape" />
      </div>
    </section>
  );
};

export default Skills;
