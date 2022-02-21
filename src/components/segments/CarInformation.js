import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const CarInformation = ({
  title_1,
  title_2,
  title_3,
  subTitle_1,
  subTitle_2,
  subTitle_3,
  whiteColor,
}) => {
  return (
    <CarInformationContainer
      whiteColor={whiteColor}
      className="container buttons"
    >
      <motion.div>
        <div className="modelinfo">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="element  elem-border"
          >
            <div className="panel">
              <h4 className="panelbigtext">{title_1}</h4>
              <p className="panelsmalltext">{subTitle_1}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="element  elem-border"
          >
            <div className="panel">
              <h4 className="panelbigtext">{title_2}</h4>
              <p className="panelsmalltext">{subTitle_2}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="element"
          >
            <div className="panel">
              <h4 className="panelbigtext">{title_3}</h4>
              <p className="panelsmalltext">{subTitle_3}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div role="button" className="button_black">
        Order Now
      </div>
      {/* <div role='button'className='button_white'> Read More</div> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <a href="#goDown" className="learn">
          <span className="learnspan">Learn More</span>
          <i className="fas fa-angle-down"></i>
        </a>
      </motion.div>
    </CarInformationContainer>
  );
};

export default CarInformation;

const CarInformationContainer = styled.div`
  .panelbigtext {
    color: ${(props) => (props.whiteColor ? "#fff" : "#212121")};
  }
  .panelsmalltext {
    color: ${(props) => (props.whiteColor ? "#fff" : "#212121")};
  }
  .elem-border {
    border-right: ${(props) =>
      props.whiteColor ? "1px solid #000" : "1px solid #000;"};
  }
  a.learn {
    color: ${(props) => (props.whiteColor ? "#fdfdfc" : "#171a20")};
  }
  .learnspan {
    border-bottom: ${(props) =>
      props.whiteColor ? "1px solid rgb(253, 253, 252)" : "1px solid #393c41;"};
  }
`;
