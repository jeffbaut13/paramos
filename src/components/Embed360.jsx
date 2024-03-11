import React from "react";

const EmbeddedIframe = ({ customStyle, node360 }) => {
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
        title="Embedded Kuula"
        frameBorder="0"
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowFullScreen
        scrolling="no"
        src="https://kuula.co/share/collection/7clb5?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es"
      ></iframe>
    </div>
  );
};

export default EmbeddedIframe;
