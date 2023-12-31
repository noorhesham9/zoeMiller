import "./portfolio.css";
import List from "./List";
import Item from "./Item";
import { projects } from "../../Data";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ShapeOne from "../../assets/shape-1.png";

const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

const Portfolio = () => {
  const [projectItems, setMEnuItem] = useState(projects);
  const [navList, setnavList] = useState(allNavList);

  const filterItems = (category) => {
    const newProjectItems = projects.filter((item) => {
      if (category === "all") {
        return projects;
      } else {
        return item.category === category;
      }
    });
    setMEnuItem(newProjectItems);
  };
  return (
    <section className="portfolio section" id="work">
      <h2 className="section__title text-cs">Portfolio</h2>
      <p className="section__subtitle text-cs">
        My <span>Cases</span>
      </p>
      <List list={navList} filterItems={filterItems} />
      <div className="portfolio__container container grid">
        <AnimatePresence initial={false}>
          <Item projectItems={projectItems} />
        </AnimatePresence>
      </div>

      <div className="section__deco deco__right">
        <img src={ShapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Portfolio</span>
      </div>
    </section>
  );
};

export default Portfolio;
