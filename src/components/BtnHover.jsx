import React from "react";
const isMobile = window.innerWidth <= 1024;

export const BtnHover = ({
  customStyles,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <>
      {isMobile ? (
        <span onClick={handleClick} className={`punto ${customStyles}`}></span>
      ) : (
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`punto ${customStyles}`}
        ></span>
      )}
    </>
  );
};
