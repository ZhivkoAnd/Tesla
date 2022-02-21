import React, { useContext } from "react";
import Loading from "./Loading";
import Header from "./Header";
import BottomMenuItem from "./segments/BottomMenuItem";
import { motion } from "framer-motion";
import firebaseConfig from "./Firebase";
import { AuthContext } from "./AuthContext";
// import {ToastDemo} from './ToastDemo'
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import styled from "styled-components";
import LandingPage_BackgroundPic from "../img/LandingPage_BackgroundPic.jpg";
import LandingPage_Mobile_BackgroundPic from "../img/LandingPage_Mobile_BackgroundPic.jpg";
import solar_icon from "../img/solar.svg";
import S_icon from "../img/S_icon_white.png";
import future_icon from "../img/cyberr.png";

const LandingPage = () => {
  const { currentUser } = useContext(AuthContext);

  const signOutButton = {};

  if (!currentUser) {
    signOutButton.display = "none";
  }

  const signInButton = {};

  if (currentUser) {
    signInButton.display = "none";
  }

  const signOut = () => {
    firebaseConfig.auth().signOut();
  };

  // const [background,setBackground] = useState({backgroundImage: `url(${model3})`})
  // style={background}

  return (
    <div className="page">
      <LandingPageBackground>
        {/* <Loading/>  */}

        <div className="sexy">
          <Header />
        </div>
        <div className="upper">
          <div className="letter">
            {/* <ToastDemo/> */}

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="modelhmain" style={{ marginLeft: "5px" }}>
                TESLA
              </h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h6 className="modelsub">
              Welcome to the <span className="touchless">Future</span>
            </h6>
          </motion.div>
        </div>
        <BottomMenuContainer>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <BottomMenuItem image={S_icon} title="Lineup" link="/lineup" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <BottomMenuItem
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
              image={solar_icon}
              title="Utilities"
              link="/utilities"
            />
          </motion.div>
        </BottomMenuContainer>
      </LandingPageBackground>
    </div>
  );
};

export default LandingPage;

const LandingPageBackground = styled.div`
  background-repeat: no-repeat fixed;
  background-color: black;
  background-position: center;
  width: 100vw;
  height: 100vh;
  transition: 0.5s;
  background-size: cover;
  z-index: 3;
  text-align: center;
  display: flex;
  justify-content: center;
  background-image: url(${LandingPage_BackgroundPic});

  @media (max-width: 767px) {
    background-image: url(${LandingPage_Mobile_BackgroundPic});
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
