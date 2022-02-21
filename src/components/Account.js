import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import Opacity from "./Opacity";

const Account = () => {
  return (
    <div className="page">
      <Opacity />
      <div className="background background3">
        <Header />
        <div className="upper">
          <div className="letter">
            <h1 className="modelh" style={{ marginRight: "5px" }}>
              MODEL
            </h1>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="modelh" style={{ marginLeft: "5px" }}>
                3
              </h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h6 className="modelsub">
              Order Online for{" "}
              <span className="touchless">Touchless Delivery</span>
            </h6>
          </motion.div>
        </div>
      </div>
      <div className="background backgroundS">
        <p id="myid">Test</p>
      </div>
    </div>
  );
};

export default Account;
