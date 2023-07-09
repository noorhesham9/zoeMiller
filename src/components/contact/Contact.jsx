import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from "react-icons/fa";

import ShapeOne from "../../assets/shape-1.png";

import axios from "axios";
import "./contact.css";
import { useState } from "react";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/94558164-5c1d-4e04-87a3-541f4267f52d",
        form
      )
      .then((response) => {
        console.log(response);
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      });
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs">Contact Me</h2>
      <p className="section__subtitle text-cs">
        Let's <span>Talk about Ideas</span>
      </p>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap />
            </span>
            <h3 className="contact__card-title">Address</h3>
            <p className="contact__card-data">North Tower, Toronto, canada</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegUser />
            </span>
            <h3 className="contact__card-title">Freelance</h3>
            <p className="contact__card-data">Available Right Now</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope />
            </span>
            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-data">Zoe.miller@gmail.com</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegAddressBook />
            </span>
            <h3 className="contact__card-title">Phone</h3>
            <p className="contact__card-data">+1 900 - 900 - 9000</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} action="" className="contact__form">
          <div className="contact__form-groub grid">
            <div className="conatct__form-div">
              <label htmlFor="namee" className="contact__form-tag text-cs">
                Your full Name <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="contact__form-input"
                id="namee"
              />
            </div>

            <div className="conatct__form-div">
              <label htmlFor="emaill" className="contact__form-tag text-cs">
                Your Email Address <b>*</b>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={handleChange}
                name="email"
                className="contact__form-input"
                id="emaill"
              />
            </div>
          </div>

          <div className="conatct__form-div">
            <label htmlFor="subject" className="contact__form-tag text-cs">
              Your Subject <b>*</b>
            </label>
            <input
              type="text"
              value={form.subject}
              onChange={handleChange}
              name="subject"
              className="contact__form-input"
              id="subject"
            />
          </div>

          <div className="conatct__form-div contact__form-area">
            <label htmlFor="message" className="contact__form-tag text-cs">
              Your Message <b>*</b>
            </label>
            <textarea
              value={form.message}
              onChange={handleChange}
              name="message"
              className="contact__form-input"
              id="message"></textarea>
          </div>

          <div className="contact__submit">
            <p>* Accept the terms and conditions</p>
            <button type="submit" className="btn text-cs">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="section__deco deco__left">
        <img src={ShapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Contact Me</span>
      </div>
    </section>
  );
};

export default Contact;
