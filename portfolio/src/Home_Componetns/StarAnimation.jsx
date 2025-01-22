import React from "react";
import "./StarAnimation.css"; // Base styles for stars

const StarAnimation = () => {
  const starCount = 10; // Number of stars to render
  const generateRandomTop = (index) => {
    const topValues = ["10%", "20%", "30%", "-40%", "-50%", "-30%", "70%", "-60%", "10%", "-20%","10%", "20%", "30%", "-40%", "-50%", "-30%", "70%", "-60%", "10%", "-20%","10%", "20%", "30%", "-40%", "-50%", "-30%", "70%", "-60%", "10%", "-20%"];
    return topValues[index % topValues.length];
  };

  const generateRandomDelay = (index) => {
    const delayValues = [0, 1, 2, 3, 4];
    return `${delayValues[index % delayValues.length]}s`;
  };

  return (
    <div className="stars opacity-[0.3]">
      {Array.from({ length: starCount }).map((_, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: generateRandomTop(index),
            animationDelay: generateRandomDelay(index),
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarAnimation;
