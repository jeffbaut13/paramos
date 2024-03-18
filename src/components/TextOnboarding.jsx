import React from "react";

export const TextOnboarding = ({ parrafo, TextEfect }) => {
  return (
    <div className="z-[3] pointer-events-none flex-center ">
      <p
        ref={TextEfect}
        className="parrafoOnboarding"
        dangerouslySetInnerHTML={{ __html: parrafo ? parrafo : "agrega texto" }}
      />
    </div>
  );
};
