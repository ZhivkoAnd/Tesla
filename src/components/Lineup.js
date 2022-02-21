import React from "react";
import Header from "./Header";
import Opacity from "./Opacity";
import styled from "styled-components";
import MenuSegmentItem from "../components/segments/MenuSegmentItem";
import modelStrans from "../img/model_S.png";
import model3trans from "../img/model_3.png";
import modelXtrans from "../img/model_X.png";
import modelYtrans from "../img/model_Y.png";
import BottomMenuItem from "./segments/BottomMenuItem";
import Lineup_BackgroundPic from "../img/Lineup_BackgroundPic.jpg";
import Lineup_Mobile_BackgroundPic from "../img/Lineup_Mobile_BackgroundPic.jpg";
import { motion } from "framer-motion";
import S_icon from "../img/S_icon_black.png";
import future_icon from "../img/cybertruck_black.png";
import solar_icon from "../img/solar.png";

const Lineup = () => {
  return (
    <div className="page">
      <Opacity />
      <LineupContainer>
        <HeaderContainer className="sexy">
          <Header />
        </HeaderContainer>
        <MenuSegmentContainer>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <MenuSegmentItem
              model="Tesla model S"
              image={modelStrans}
              link={"/models"}
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <MenuSegmentItem
              model="Tesla model 3"
              image={model3trans}
              link={"/model3"}
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <MenuSegmentItem
              model="Tesla model X"
              image={modelXtrans}
              link={"/modelx"}
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <MenuSegmentItem
              model="Tesla model Y"
              image={modelYtrans}
              link={"/modely"}
            />
          </motion.div>
        </MenuSegmentContainer>
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
      </LineupContainer>
    </div>
  );
};

export default Lineup;

const HeaderContainer = styled.div``;

const LineupContainer = styled.div`
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
  /* background-image: url(${Lineup_BackgroundPic}); */

  .icons-main {
    height: 30px;
  }

  @media (max-width: 767px) {
    /* background-image: url(${Lineup_Mobile_BackgroundPic}); */
  }
`;

const MenuSegmentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
