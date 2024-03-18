import React from "react";

export const IconPlay = ({ handleClick }) => {
  return (
    <span
      onClick={handleClick}
      className="play cursor-pointer flex items-center justify-center font-normal absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] lg:w-20 lg:h-10 xs:w-16 xs:h-8 py-2 flex-center-col text-center bg-[#B78B67] rounded-lg hover:bg-white transition-all ease duration-300"
    >
      <svg
        id="uuid-433ace1b-e96f-404f-9ec6-afe6f04d4d5f"
        data-name="Capa 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16.2 19.06"
      >
        <g id="uuid-ed807192-3682-40ea-8a94-a1b5cb9c2e05" data-name="Capa 1">
          <path
            className="fill-white"
            d="M0,1.46v16.15c0,1.07.92,1.78,1.72,1.31l13.8-8.07c.9-.53.9-2.09,0-2.62L1.72.15C.92-.32,0,.38,0,1.46Z"
            style={{ strokeWidth: "0px" }}
          />
        </g>
      </svg>
    </span>
  );
};
