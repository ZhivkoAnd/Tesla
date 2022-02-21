import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/tesla_logo_icon.png";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="container">
      <div className="bar">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        {/* <motion.div animate={{y:0}} initial={{y:-250}} transition={{duration:0.5},{type:'spring',stiffness:50}}> */}
        <div className="social-buttons">
          <Link
            to="/modelS"
            className="social-buttons__button social-button social-button--facebook"
            aria-label="model S"
          >
            <span className="social-button__inner inner1">
              <p className="icontext icon1">S</p>
            </span>
          </Link>
          <Link
            to="/model3"
            className="social-buttons__button social-button social-button--linkedin "
            aria-label="model 3"
          >
            <span className="social-button__inner inner2">
              <p className="icontext icon2">3</p>
            </span>
          </Link>
          <Link
            to="/modelX"
            className="social-buttons__button social-button social-button--instagram"
            aria-label="model X"
          >
            <span className="social-button__inner inner3">
              <p className="icontext icon3">X</p>
            </span>
          </Link>
          <Link
            to="/modelY"
            className="social-buttons__button social-button social-button--instagram"
            aria-label="model Y"
          >
            <span className="social-button__inner inner4">
              <p className="icontext icon4">Y</p>
            </span>
          </Link>
        </div>
        {/* </motion.div> */}
        <Navigation></Navigation>
      </div>
    </div>
  );
};

export default Header;
