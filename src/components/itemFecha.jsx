import React from "react";

const ItemFecha = ({ inputNumber, aumento, color, active, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`${
        active ? "active" : ""
      } cursor-pointer w-full flex items-center justify-around 2xl:h-16 lg:h-14 sm:h-8 xs:h-10 relative LineFather`}
    >
      <span className={`${active ? "w-5" : "w-4"} inline-block Line`}>
        <svg
          id="uuid-fb7c8be0-e2f6-4e2e-9fee-3e90986b73dc"
          data-name="Capa 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15.26 15.26"
          className={`${active ? "active" : ""}`}
        >
          <g id="uuid-ddc46b89-8ceb-499e-a632-9744fb40a320" data-name="Capa 1">
            <g style={{ opacity: "0.5" }}>
              <circle
                cx="7.63"
                cy="7.63"
                r="4.42"
                style={{
                  fill: `${active ? "#b78b67" : color}`,
                  strokeWidth: "0px",
                }}
              />
              <circle
                cx="7.63"
                cy="7.63"
                r="7.13"
                style={{
                  fill: "none",
                  stroke: `${active ? "#b78b67" : color}`,
                  strokeMiterLimit: "10",
                }}
              />
            </g>
          </g>
        </svg>
      </span>{" "}
      <span
        className="helvetica fechaIndividual absolute left-14"
        style={{ color: `${active ? "#b78b67" : color}` }}
      >
        {inputNumber + aumento}
      </span>
    </div>
  );
};

export default ItemFecha;
