import React, { useEffect, useRef, useState } from "react";
import EmbeddedIframe from "./Embed360";
import gsap from "gsap";
import HandScroll from "./HandScroll";
const isMobile = window.innerWidth <= 1024;
const Origen = ({ active360, setActive360 }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setActive360(3);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const node360 = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    if (active360 == 2) {
      tl.to(node360.current, {
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.5,
      }).addLabel("origen");

      tl.to(".handScroll", { display: "none" }, "origen-=0.5");
      tl.to(".mainParamos", { overflow: "visible" }, "origen-=0.5");
      tl.to("body", { overflowX: "visible" }, "origen-=0.5");
      tl.to(
        ".blurParamos",
        { opacity: 1, duration: 0.5, ease: "power1.inOut" },
        "origen-=0.2"
      );
      if (isMobile) {
        tl.fromTo(
          ".BoxOrigenText",
          { height: "50%" },
          { height: "0", duration: 0.5 },
          "origen+=0.5"
        );
        tl.fromTo(
          ".BoxOrigenImg",
          { height: "50%" },
          { height: "100%", duration: 0.5 },
          "origen+=0.5"
        );
      } else {
        tl.fromTo(
          ".BoxOrigenText",
          { width: "50%" },
          { width: "0", duration: 0.5 },
          "origen-=0.5"
        );
        tl.fromTo(
          ".BoxOrigenImg",
          { width: "50%" },
          { width: "100%", duration: 0.5 },
          "origen-=0.5"
        );
      }
      tl.to(".origen", { padding: 0 }, "origen-=0.5");
    } else if (active360 == 3) {
      if (isMobile) {
        tl.to(
          ".BoxOrigenImg",

          { height: "50%", duration: 0.5 }
        ).addLabel("reverse");
        tl.to(".handScroll", { display: "none" }, "reverse-=0.5");
        tl.to(
          ".BoxOrigenText",

          { height: "50%", duration: 0.5 },
          "reverse"
        );
      } else {
        tl.to(
          ".BoxOrigenImg",

          { width: "50%", duration: 0.5 }
        ).addLabel("reverse");
        tl.to(
          ".BoxOrigenText",

          { width: "50%", duration: 0.5 },
          "<"
        );
        tl.to(".origen", { padding: "8px" }, "reverse-=0.5");
      }
      tl.to(".mainParamos", { overflow: "hidden" }, "reverse-=0.5");
      tl.to("body", { overflowX: "hidden" }, "reverse-=0.5");
      tl.to(
        ".blurParamos",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
        },
        "reverse-=0.5"
      );
      tl.to(
        node360.current,
        {
          opacity: 0,
          ease: "power1.inOut",
          duration: 0.5,
        },
        "reverse-=0.5"
      );
    }
  }, [active360]);

  return (
    <div className="origen absolute w-full h-full z-[1] flex">
      <div className=" responsive flex relative w-full h-full paddingComponentes ">
        <div className="BoxOrigenText  BoxesTextStart flex-center">
          <p className="origenTexto  font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            más de <span className="font-black">30,000</span> <br /> hectáreas{" "}
            <br /> de vegetación <br /> necesitan <br /> ayuda.
          </p>
        </div>
        <div
          style={{ backgroundImage: "url(/bgParamos/360.webp)" }}
          className="BoxOrigenImg  BoxesImgEnd bg-center relative"
        >
          {active360 != 2 && (
            <span
              onClick={() => setActive360(2)}
              className="cursor-pointer icono360 absoluteCenterParrafos inline-block w-20"
            >
              <img src="/svg/360Icon.svg" alt="" />
              <HandScroll
                customstyle={`handScroll move absolute lg:w-12 xs:w-10 ${
                  active360 < 2 ? "block" : "hidden"
                }`}
              />
            </span>
          )}

          <EmbeddedIframe node360={node360} customStyle={"embeded opacity-0"} />
        </div>
      </div>
    </div>
  );
};

export default Origen;
