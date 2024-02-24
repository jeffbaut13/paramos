import React from "react";

const EmbeddedIframe = ({ customStyle }) => {
  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "0",
  };

  return (
    <div
      className={customStyle}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <iframe
        title="Embedded Kuula"
        style={iframeStyle}
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowFullScreen
        scrolling="no"
        src="https://kuula.co/share/collection/7cmnz?logo=1&info=1&fs=1&vr=0&thumbs=3&margin=7&inst=es"
      ></iframe>
    </div>
  );
};

export default EmbeddedIframe;
