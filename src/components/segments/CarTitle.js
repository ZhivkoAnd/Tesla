import React from "react";
import { motion } from "framer-motion";

const CarTitle = ({ model_name, model_sign, text_1, text_2 }) => {
  return (
    <div className="upper">
      <div className="letter">
        <h1 className="modelh" style={{ marginRight: "5px" }}>
          {model_name}
        </h1>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="modelh" style={{ marginLeft: "5px" }}>
            {model_sign}
          </h1>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h6 className="modelsub">
          {text_1}
          <span className="touchless">{text_2}</span>
        </h6>
      </motion.div>
    </div>
  );
};

export default CarTitle;
