import profileImg from "../../assets/profile-img.png";
import ShapeOne from "../../assets/shape-1.png";
import ShapeTwo from "../../assets/shape-2.png";
import "./home.css";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>ZOÉ</span> MILLER
          </h1>
          <p className="home__jop">
            <span className="text-cs">I Am</span> <b>Web Develober</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>
            <p className="home__data home__data-one">
              <span className="text-lg">
                12 <b>+</b>
              </span>
              <span className="text-sm text-cs">
                Years of <span>Experience</span>
              </span>
            </p>
            <p className="home__data home__data-two">
              <span className="text-lg">330</span>
              <span className="text-sm text-cs">
                Completed <span>Projects</span>
              </span>
            </p>

            <img src={ShapeOne} alt="" className="shape shape__1" />
            <img src={ShapeTwo} alt="" className="shape shape__2" />
            <img src={ShapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            From France, Paris. I have rich expoerince in web design , also Iam
            good at wordpress. Iove to talk with you about unique
          </p>
          <div className="home__socials">
            <a href="" className="home__socials-link">
              <FaTwitter />
            </a>
            <a href="" className="home__socials-link">
              <FaDribbble />
            </a>
            <a href="" className="home__socials-link">
              <FaBehance />
            </a>
          </div>
          <div className="home__btns">
            <a href="" className="btn text-cs">
              Download
            </a>
            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={ShapeOne} alt="" className="shape" />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Web Developer</span>
      </div>
    </section>
  );
};

export default Home;
