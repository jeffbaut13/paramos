import React from "react";

export const BtnFrailejones = ({ Estil, numFrailejon, setNumFrailejon }) => {
  return (
    <div
      className={`${
        Estil ? Estil : ""
      } boxBntSlide w-full min-h-1 flex justify-between z-50`}
    >
      <span
        onClick={() => {
          if (numFrailejon <= 1) {
            setNumFrailejon(0);
          } else {
            setNumFrailejon(numFrailejon - 1);
          }
        }}
        className={`${
          numFrailejon == 1
            ? " ocult pointer-events-none "
            : "sho pointer-events-auto"
        } btnSlide cursor-pointer`}
      >
        <span className="previw btnBorderyellow xl:text-xs xs:text-[0.5rem] max-xl:bg-white">
          atras
        </span>
      </span>
      <span
        onClick={() => {
          if (numFrailejon >= 3) {
            setNumFrailejon(3);
          } else {
            setNumFrailejon(numFrailejon + 1);
          }
        }}
        className={`${
          numFrailejon == 3
            ? " ocult pointer-events-none "
            : "sho pointer-events-auto"
        } btnSlide cursor-pointer`}
      >
        <span className="previw btnBorderyellow xl:text-xs xs:text-[0.5rem] max-xl:bg-white">
          Siguiente
        </span>
      </span>
    </div>
  );
};
