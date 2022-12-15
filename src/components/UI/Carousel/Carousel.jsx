import React from "react";

const Carousel = ({ children, getChildrenLength }) => {
  const total = children.length;
  const handler = () => {
    getChildrenLength(total);
  };

  return (
    <div className="carousel w-full select-none" onClick={handler}>
      {children}
    </div>
  );
};

export default Carousel;
