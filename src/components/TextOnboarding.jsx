import React from "react";

export const TextOnboarding = ({ parrafo, TextEfect }) => {
  return (
    <div>
      <p
        ref={TextEfect}
        className="parrafoOnboarding"
        dangerouslySetInnerHTML={{ __html: parrafo ? parrafo : "agrega texto" }}
      />
      <span>
        <img src="" alt="" />
      </span>
    </div>
  );
};
