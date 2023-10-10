import React from "react";

import "./footer.scss";

// import { a } from "react-router-dom";

import bg from "./../../assets/footer-bg.jpg";



const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJV8o6WqlDiYhUlLyRcwKxRvj1S36C6a3_g&usqp=CAU'} alt="logo" />
            <a href="#">POL</a>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <a href="#">Home</a>
            <a href="#">Contact us</a>
            <a href="#">Term of service</a>
            <a href="#">About us</a>
          </div>
          <div className="footer__content__menu">
            <a href="#">Live</a>
            <a href="#">FAQ</a>
            <a href="#">Premium</a>
            <a href="#">Privacy policy</a>
          </div>
          <div className="footer__content__menu">
            <a href="#">You must watch</a>
            <a href="#">Recent release</a>
            <a href="#">Top IMDB</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
