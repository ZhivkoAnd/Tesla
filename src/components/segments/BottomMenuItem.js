import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BottomMenuItem = ({ image, title, link, whiteColor }) => {
  return (
    <BottomMenuItemContainer whiteColor={whiteColor}>
      <Link to={link}>
        <img src={image} alt="car-icon" className="icons-main" />
        <p className="paneltextmain" style={{ fontSize: "0.8rem" }}>
          <span className="learnspan">{title}</span>
        </p>
      </Link>
    </BottomMenuItemContainer>
  );
};

export default BottomMenuItem;

const BottomMenuItemContainer = styled.div`
  margin-left: 3px;
  margin-right: 3px;
  padding: 9px;

  .learnspan {
    color: ${(props) => (props.whiteColor ? "rgba(0, 0, 0, 0.6)" : "white")};
    border-bottom: ${(props) =>
      props.whiteColor ? "1px solid rgba(0, 0, 0, 0.6)" : "1px solid white"};
  }
`;
