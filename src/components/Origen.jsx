import React from "react";
import EmbeddedIframe from "./Embed360";

const Origen = () => {
  return (
    <div className="origen flex relative h-full p-8 ">
      <div className="BoxOrigenText flex-center">
        <p className="origenTexto font-bold uppercase text-5xl tracking-widest whitespace-nowrap">
          más de <span className="font-black">30,000</span> <br /> hectáreas{" "}
          <br /> de vegetación <br /> necesitan <br /> ayuda.
        </p>
      </div>
      <div
        style={{ backgroundImage: "url(/360/360.webp)" }}
        className="BoxOrigenImg"
      >
        <EmbeddedIframe customStyle={"embeded"} />
      </div>
    </div>
  );
};

export default Origen;
