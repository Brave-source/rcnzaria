import React, { memo, useEffect } from "react";

const Carousel = ({ children, getChildrenLength }) => {
  const total = children.length;
  useEffect(() => {
    getChildrenLength(total);
  }, [total, getChildrenLength]);

  return <div className="carousel w-full select-none">{children}</div>;
};

export default memo(Carousel);
