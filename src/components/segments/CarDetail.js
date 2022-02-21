import React from "react";
import styled from "styled-components";

const CarDetail = ({ smallheading, bigheading, text }) => {
  return (
    <CarDetailContainer>
      <div className="container" id="goDown">
        <h3 className="SmallHeading">{smallheading}</h3>
        <h1 className="BigHeading">{bigheading}</h1>
        <p>{text}</p>
        <Buttons>
          <button className="LearnMore">Learn more</button>
          <div role="button" className="OrderNow">
            Order Now
          </div>
          {/* <a id="back2Top" title="Back to top" href="#">&#10148;</a> */}
        </Buttons>
      </div>
      <div className="Pic"></div>
    </CarDetailContainer>
  );
};

export default CarDetail;

const CarDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  text-align: left;
  padding: 5px;

  .SmallHeading {
    font-size: 1rem;
    margin-top: 20px;
    margin-bottom: 0.2rem;
    color: #0000009e;
  }
  .BigHeading {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  /* .Pic {
    width: 75vw;
    background-image: url("./img/qwe.jpg");
    background-position: center;
    background-size: contain;
  } */
`;

const Buttons = styled.div`
  margin-bottom: 20px;

  .LearnMore {
    padding: 7px;
    color: black;
    text-transform: uppercase;
    -webkit-letter-spacing: 0.1rem;
    -moz-letter-spacing: 0.1rem;
    -ms-letter-spacing: 0.1rem;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    margin-bottom: 20px;
    background: none;
    border: 1px solid #969696;
  }
  .OrderNow {
    background: rgba(0, 0, 0, 0.65);
    padding: 7px;
    color: #fdfdfc;
    margin-bottom: 20px;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-align: center;
  }
`;
