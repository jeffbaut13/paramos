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

  tl.fromTo(".BoxConoceText", { width: "50%" }, { width: "100%" });
  tl.fromTo(".BoxConoceImg", { width: "50%" }, { width: "0%" }, "<");
  tl.to(".montaña", { display: "block" });
  tl.to(".BoxConoceText", { width: "50%" }, "<");
  tl.to(".BoxConoceImg", { width: "50%" }, "<");
  tl.from(".btnconoce", {
    opacity: 0,
    duration: 1,
  });

  const tl2 = scrollEffects(main, 14.28);
  tl2.to(".blurParamos", { opacity: 0, duration: rapido }, "<");
  if (isMobile) {
    tl2.fromTo(".BoxOrigenText", { height: "100%" }, { height: "50%" });
    tl2.fromTo(".BoxOrigenImg", { height: "0%" }, { height: "50%" }, "<");
  } else {
    tl2.fromTo(".BoxOrigenText", { width: "100%" }, { width: "50%" });
    tl2.fromTo(".BoxOrigenImg", { width: "0%" }, { width: "50%" }, "<");
  }

  const tl3 = scrollEffects(main, 25.4);
  tl3.to(".blurParamos", { opacity: 0, duration: rapido }, "<");

  if (isMobile) {
    tl3.fromTo(
      ".BoxDosmilTexto",
      { height: "100%" },
      { height: "50%" },
      "dosMil"
    );
    tl3.fromTo(".BoxDosmilImage", { height: "0%" }, { height: "50%" }, "<");
  } else {
    tl3.fromTo(
      ".BoxDosmilTexto",
      { width: "100%" },
      { width: "50%" },
      "dosMil"
    );
    tl3.fromTo(".BoxDosmilImage", { width: "0%" }, { width: "50%" }, "<");
  }
  tl3.to(".blurParamos", { opacity: 1, duration: rapido }, "<");
  tl3.add(() => {
    setNumFrailejon(null);
  }, "<");

  const tl11 = scrollEffects(main, 49);

  tl11.add(() => {
    setNumFrailejon(null);
  });
  tl11.add(() => {
    setTravesiaReverse(false);
  });
  tl11.add(() => {
    setTravesiaReverse(true);
  });

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
};
