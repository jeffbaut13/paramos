import { useEffect } from "react";
import { scrollEffects } from "./gsap";
import gsap from "gsap";

const isMobile = window.innerWidth <= 1024;
const rapido = 0.5;
const normal = 1;
const medio = 1.5;
const lento = 2;

export const timeLine = (
  main,
  setTranslate,
  translate,
  setNumFrailejon,
  numFrailejon,
  setTravesiaReverse
) => {
  const tl = scrollEffects(main, 3);

  if (isMobile) {
    tl.fromTo(".BoxConoceText", { height: "50%" }, { height: "100%" });
    tl.fromTo(
      ".BoxConoceImg",
      { height: "50%", borderRadius: "0 0 1.5rem 1.5rem" },
      { height: "0%" },
      "<"
    );
  } else {
    tl.fromTo(".BoxConoceText", { width: "50%" }, { width: "100%" });
    tl.fromTo(
      ".BoxConoceImg",
      { width: "50%", borderRadius: "0 1.5rem 1.5rem 0" },
      { width: "0%" },
      "<"
    );
  }
  tl.to(".montaña", { display: "block" });
  if (isMobile) {
    tl.to(".BoxConoceText", { height: "50%" }, "<");
    tl.to(".BoxConoceImg", { height: "50%" }, "<");
  } else {
    tl.to(".BoxConoceText", { width: "50%" }, "<");
    tl.to(".BoxConoceImg", { width: "50%" }, "<");
  }
  tl.from(".BoxConoceText .btnconoce", {
    opacity: 0,
    duration: 1,
  });

  const tl2 = scrollEffects(main, 9.5);

  if (isMobile) {
    tl2.fromTo(".BoxOrigenText", { height: "100%" }, { height: "50%" }, "<+=1");
    tl2.fromTo(".BoxOrigenImg", { height: "0%" }, { height: "50%" }, "<");
  } else {
    tl2.fromTo(".BoxOrigenText", { width: "100%" }, { width: "50%" }, "<+=1");
    tl2.fromTo(".BoxOrigenImg", { width: "0%" }, { width: "50%" }, "<");
  }

  const tl3 = scrollEffects(main, 19);

  if (isMobile) {
    tl3.fromTo(
      ".BoxDosmilTexto",
      { height: "100%" },
      { height: "50%" },
      "<+=1"
    );
    tl3.fromTo(".BoxDosmilImage", { height: "0%" }, { height: "50%" }, "<");
  } else {
    tl3.fromTo(".BoxDosmilTexto", { width: "100%" }, { width: "50%" }, "<+=1");
    tl3.fromTo(".BoxDosmilImage", { width: "0%" }, { width: "50%" }, "<");
  }
  // tl3.to(".blurParamos", { opacity: 1, duration: rapido }, "<");

  tl3.from(
    ".BoxDosmilTexto .btnconoce",
    {
      opacity: 0,
      duration: 1,
    },
    "<+=0.5"
  );

  const tl11 = scrollEffects(main, 38.5);

  if (isMobile) {
    tl11.fromTo(
      ".BoxTravesiaCards",
      { height: "0%" },
      { height: "50%" },
      "<+=1"
    );
    tl11.fromTo(
      ".BoxTravesiaTexto",
      { height: "100%" },
      { height: "50%" },
      "<"
    );
  } else {
    tl11.fromTo(".BoxTravesiaCards", { width: "0%" }, { width: "50%" }, "<+=1");
    tl11.fromTo(".BoxTravesiaTexto", { width: "100%" }, { width: "50%" }, "<");
  }

  tl11.from(
    ".travesia .btnconoce",
    {
      opacity: 0,
      duration: 1,
    },
    "<+=0.5"
  );

  const tl14 = scrollEffects(main, 47.5);
  if (isMobile) {
    tl14.fromTo(
      ".experienciaTextoBox",
      {
        height: "100%",
      },
      {
        height: "50%",
      },
      "<+=1"
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
      },
      "<+=1"
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
  const tl19 = scrollEffects(main, 58.2);
  if (isMobile) {
    tl19.fromTo(
      ".BoxMoisesText",
      {
        height: "100%",
      },
      {
        height: "50%",
      },
      "<+=1"
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
  } else {
    tl19.fromTo(
      ".BoxMoisesText",
      {
        width: "100%",
      },
      {
        width: "50%",
      },
      "<+=1"
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
  const tl30 = scrollEffects(main, 76);
  tl30.to(".blurParamos", { opacity: 1, duration: 1 });
};
