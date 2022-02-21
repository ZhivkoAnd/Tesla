import React from "react";
import Header from "./Header";
import Opacity from "./Opacity";
import styled from "styled-components";
import MenuSegmentItem from "../components/segments/MenuSegmentItem";
import cybertruck from "../img/cybertruck.png";
import roadster from "../img/roadster.png";
import semi from "../img/semi.png";
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

        <MenuSegmentContainer>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <MenuSegmentItem
              model="Tesla Roadster"
              image={roadster}
              link={"/roadster"}
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <MenuSegmentItem
              model="Tesla Cybertruck"
              image={cybertruck}
              link={"/upcoming/cybertruck"}
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <MenuSegmentItem model="Tesla Semi" image={semi} link={"/semi"} />
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

  .icons-main {
    height: 30px;
  }

  @media (max-width: 767px) {
    /* background-image: url(${Upcoming_Mobile_BackgroundPic}); */
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
