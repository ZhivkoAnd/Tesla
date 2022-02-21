import React from "react";
import Header from "./Header";
import Opacity from "./Opacity";
import styled from "styled-components";
import BottomMenuItem from "./segments/BottomMenuItem";
import Upcoming_BackgroundPic from "../img/Lineup_BackgroundPic.jpg";
import Upcoming_Mobile_BackgroundPic from "../img/Lineup_Mobile_BackgroundPic.jpg";
import { motion } from "framer-motion";
import S_icon from "../img/S_icon_black.png";
import future_icon from "../img/cybertruck_black.png";
import solar_icon from "../img/solar.png";

const Upcoming = () => {
  return (
    <div className="page">
      <Opacity />
      <UpcomingContainer>
        <HeaderContainer className="sexy">
          <Header />
        </HeaderContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="soon">Coming Soon...</h1>
        </motion.div>
        <BottomMenuContainer>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <BottomMenuItem
              whiteColor
              image={S_icon}
              title="Lineup"
              link="/lineup"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <BottomMenuItem
              whiteColor
              image={future_icon}
              title="Upcoming"
              link="/upcoming"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <BottomMenuItem
              whiteColor
              image={solar_icon}
              title="Utilities"
              link="/utilities"
            />
          </motion.div>
        </BottomMenuContainer>
      </UpcomingContainer>
    </div>
  );
};

export default Upcoming;

const HeaderContainer = styled.div``;

const UpcomingContainer = styled.div`
  background-repeat: no-repeat fixed;
  background-color: whitesmoke;
  background-position: center;
  width: 100vw;
  height: 100vh;
  transition: 0.5s;
  background-size: cover;
  z-index: 3;
  text-align: center;
  display: flex;
  justify-content: center;
  /* background-image: url(${Upcoming_BackgroundPic}); */

  .soon {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100vh;
  }

  .icons-main {
    height: 30px;
  }

  @media (max-width: 767px) {
    /* background-image: url(${Upcoming_Mobile_BackgroundPic}); */
  }
`;
const BottomMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 15px;
  position: fixed;
  bottom: 15px;
  margin-bottom: 20px;
`;
