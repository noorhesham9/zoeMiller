import "./blog.css";
import { FaArrowRight } from "react-icons/fa";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
import ShapeOne from "../../assets/shape-1.png";

const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <h2 className="section__title text-cs">Latest Blog</h2>
      <p className="section__subtitle">
        My <span>Articles and Advice</span>
      </p>
      <div className="blog__container container grid">
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">OCTOBER 31, 2022</span>
          <h3 className="blog__title">The Main Thing For The Designer</h3>
          <p className="blog__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium enim eum iusto, labore nam maxime, dignissimos aliquid
            aut tempora.
          </p>
          <a href="" className="link">
            Read more <FaArrowRight className="link__icon" />
          </a>

          <img src={Blog1} className="blog__img" alt="" />
        </div>
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">OCTOBER 31, 2022</span>
          <h3 className="blog__title">Follow Your Own Design Process</h3>
          <p className="blog__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium enim eum iusto, labore nam maxime, dignissimos aliquid
            aut tempora.
          </p>
          <a href="" className="link">
            Read more <FaArrowRight className="link__icon" />
          </a>

          <img src={Blog2} className="blog__img" alt="" />
        </div>
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">NOVEMBER 28, 2022</span>
          <h3 className="blog__title">
            Usability Secrets to Create Better Interfaces
          </h3>
          <p className="blog__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium enim eum iusto, labore nam maxime, dignissimos aliquid
            aut tempora.
          </p>
          <a href="" className="link">
            Read more <FaArrowRight className="link__icon" />
          </a>

          <img src={Blog3} className="blog__img" alt="" />
        </div>
      </div>

      <div className="section__deco deco__right">
        <img src={ShapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Blog</span>
      </div>
    </section>
  );
};

export default Blog;
