import React, { useState, useEffect } from "react";
import hehe from "../img/tesla_blink.jpg";

const Loading = () => {
  const [opacity, setOpacity] = useState({ opacity: 1, zIndex: 3 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity({ opacity: 0 });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading" style={opacity}>
      <div className="container load">
        <img src={hehe} alt="tire"></img>
      </div>
    </div>
  );
};

export default Loading;
