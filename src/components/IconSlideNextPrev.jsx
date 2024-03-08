import React from "react";

const IconSlideNextPrev = ({ reverse }) => {
  return (
    <span className="inline-block w-10 bg-white rounded-full bg-opacity-50">
      <svg
        style={{ transform: `${reverse ? "rotate(0deg)" : "rotate(180deg)"}` }}
        id="uuid-5eb2189d-3c62-4695-bd8e-998ad113d87b"
        data-name="Capa 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 29.12 29.12"
      >
        <g id="uuid-a3d667fd-0332-457e-a25d-81a541623668" data-name="Capa 1">
          <g>
            <path
              d="M16.59,19.74c-.19,0-.39-.06-.56-.17l-4.98-3.4c-.53-.36-.87-.98-.92-1.68-.05-.72.21-1.42.7-1.87l4.76-4.36c.41-.37,1.04-.34,1.41.06.37.41.34,1.04-.06,1.41l-4.76,4.36s-.06.1-.06.21c0,.13.04.21.06.22l4.97,3.39c.46.31.57.93.26,1.39-.19.28-.51.44-.83.44Z"
              style={{
                fill: "#000",
                strokeWidth: "0px",
              }}
            />
          </g>
        </g>
      </svg>
    </span>
  );
};

export default IconSlideNextPrev;
