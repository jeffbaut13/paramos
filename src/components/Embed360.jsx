import React from "react";

const EmbeddedIframe = ({ customStyle, node360, urlKuala }) => {
  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "0",
  };

  return (
    <div
      ref={node360}
      className={customStyle}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <iframe
        style={iframeStyle}
        frameBorder="0"
        title="Embedded Kuula"
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowFullScreen
        scrolling="no"
        src={urlKuala}
      ></iframe>
    </div>
  );
};

export default EmbeddedIframe;
