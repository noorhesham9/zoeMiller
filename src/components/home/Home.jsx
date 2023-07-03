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
          <a href="" className="btn">
            Download
          </a>
          <a href="" className="btn">
            My Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
