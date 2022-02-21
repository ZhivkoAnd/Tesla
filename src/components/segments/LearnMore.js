import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const LearnMore = ({ text, whiteColor }) => {
  return (
    <LearnMoreContainer whiteColor={whiteColor} className="container buttons">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="element elem-border"
      >
        <p class="text">{text}</p>
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
    </LearnMoreContainer>
  );
};

export default LearnMore;

const LearnMoreContainer = styled.div`
  .text {
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;
  }
  .button_black {
    border: 3px solid white;
    border-radius: 0;
  }
  a.learn {
    color: ${(props) => (props.whiteColor ? "#fdfdfc" : "#171a20")};
  }
  .learnspan {
    border-bottom: ${(props) =>
      props.whiteColor ? "1px solid rgb(253, 253, 252)" : "1px solid #393c41;"};
  }
`;
