import { useEffect } from "react";
import { scrollEffects } from "./gsap";
import gsap from "gsap";

const isMobile = window.innerWidth <= 1024;
const rapido = 0.6;
const normal = 1;
const medio = 1.5;
const lento = 2;

export const timeLine = () => {
  const tl = gsap.timeline();
  tl.delay(rapido);

  tl.to(".montaña", { display: "block" });
  if (isMobile) {
    tl.fromTo(".BoxConoceText", { height: "100%" }, { height: "50%" }, "<");
    tl.fromTo(".BoxConoceImg", { height: "0%" }, { height: "50%" }, "<");
  } else {
    tl.fromTo(".BoxConoceText", { width: "100%" }, { width: "50%" }, "<");
    tl.fromTo(".BoxConoceImg", { width: "0%" }, { width: "50%" }, "<");
  }

  const tl2 = gsap.timeline();
  tl2.delay(rapido);

  if (isMobile) {
    tl2.fromTo(".BoxOrigenText", { height: "100%" }, { height: "50%" });
    tl2.fromTo(".BoxOrigenImg", { height: "0%" }, { height: "50%" }, "<");
  } else {
    tl2.fromTo(".BoxOrigenText", { width: "100%" }, { width: "50%" });
    tl2.fromTo(".BoxOrigenImg", { width: "0%" }, { width: "50%" }, "<");
  }

  const tl3 = gsap.timeline();
  tl3.delay(rapido);
  if (isMobile) {
    tl3.fromTo(".BoxDosmilTexto", { height: "100%" }, { height: "50%" });
    tl3.fromTo(".BoxDosmilImage", { height: "0%" }, { height: "50%" }, "<");
  } else {
    tl3.fromTo(".BoxDosmilTexto", { width: "100%" }, { width: "50%" });
    tl3.fromTo(".BoxDosmilImage", { width: "0%" }, { width: "50%" }, "<");
  }

  const tl11 = gsap.timeline();
  tl11.delay(rapido);

  if (isMobile) {
    tl11.fromTo(".BoxTravesiaCards", { height: "0%" }, { height: "50%" });
    tl11.fromTo(
      ".BoxTravesiaTexto",
      { height: "100%" },
      { height: "50%" },
      "<"
    );
  } else {
    tl11.fromTo(".BoxTravesiaCards", { width: "0%" }, { width: "50%" });
    tl11.fromTo(".BoxTravesiaTexto", { width: "100%" }, { width: "50%" }, "<");
  }

  const tl14 = gsap.timeline();
  tl14.delay(rapido);
  if (isMobile) {
    tl14.fromTo(
      ".experienciaTextoBox",
      {
        height: "100%",
      },
      {
        height: "50%",
      }
    );
    tl14.fromTo(
      ".experienciaImagen",
      {
        height: "0%",
      },
      {
        height: "50%",
      },
      "<"
    );
  } else {
    tl14.fromTo(
      ".experienciaTextoBox",
      {
        width: "100%",
      },
      {
        width: "50%",
      }
    );
    tl14.fromTo(
      ".experienciaImagen",
      {
        width: "0%",
      },
      {
        width: "50%",
      },
      "<"
    );
  }
  const tl19 = gsap.timeline();
  tl19.delay(rapido);
  if (isMobile) {
    tl19.fromTo(
      ".BoxMoisesText",
      {
        height: "100%",
      },
      {
        height: "50%",
      }
    );
    tl19.fromTo(
      ".BoxMoisesImg",
      {
        height: "0%",
      },
      {
        height: "50%",
      },
      "<"
    );
  } else {
    tl19.fromTo(
      ".BoxMoisesText",
      {
        width: "100%",
      },
      {
        width: "50%",
      }
    );
    tl19.fromTo(
      ".BoxMoisesImg",
      {
        width: "0%",
      },
      {
        width: "50%",
      },
      "<"
    );
  }

  return tl, tl2, tl3, tl11, tl14, tl19;
};
