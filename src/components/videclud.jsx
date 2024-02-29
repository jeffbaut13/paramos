import React from "react";

const VideoComponent = () => {
  return (
    <>
      <video className="bgvid" playsInline autoPlay muted loop>
        <source src={"/Videoniebla/neblina-3.mp4"} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoComponent;
