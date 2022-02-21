import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuSegmentItem = ({ link, model, image }) => {
  return (
    <Link to={link}>
      <MenuSegmentItemContainer>
        <h4 className="menuItemHeading">{model}</h4>
        <img src={image} className="menuItemPic" />
      </MenuSegmentItemContainer>
    </Link>
  );
};

export default MenuSegmentItem;

const MenuSegmentItemContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  /* background: white;
    box-shadow: rgb(0 0 0 / 20%) 0 3px 1px -2px, rgb(0 0 0 / 14%) 0 2px 2px 0,
      rgb(0 0 0 / 12%) 0 1px 5px 0; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  justify-content: space-between;

  .menuItemPic {
    width: 130px;
    margin-left: 15px;
    margin-right: 5px;
  }

  .menuItemHeading {
    margin-bottom: 0rem;
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.3rem;
  }
`;
