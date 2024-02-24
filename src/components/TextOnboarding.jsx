import React from "react";

export const TextOnboarding = ({ parrafo, TextEfect }) => {
  return (
    <>
      <p
        ref={TextEfect}
        className="parrafoOnboarding"
        dangerouslySetInnerHTML={{ __html: parrafo ? parrafo : "agrega texto" }}
      />
    </>
  );
};
