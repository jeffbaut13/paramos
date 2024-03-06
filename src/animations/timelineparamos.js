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
  setTravesiaReverse
) => {
  const tipoScroll = 6;

  const tl = scrollEffects(main, tipoScroll);

  /***************Conoce los paramos */

  if (isMobile) {
    tl.fromTo(
      ".BoxConoceText",
      { height: "50%" },
      { height: "100%", duration: rapido }
    );
  } else {
    tl.fromTo(
      ".BoxConoceText",
      { width: "50%" },
      { width: "100%", duration: rapido }
    );
  }
  if (isMobile) {
    tl.fromTo(
      ".BoxConoceImg",
      { height: "50%" },
      { height: "0", duration: rapido },
      "<"
    );
  } else {
    tl.fromTo(
      ".BoxConoceImg",
      { width: "50%" },
      { width: "0", duration: rapido },
      "<"
    );
  }

  tl.to(".montaña", { display: "block" });
  if (isMobile) {
    tl.to(".BoxConoceText", { height: "0", duration: rapido });
  } else {
    tl.to(".BoxConoceText", { width: "0", duration: rapido });
  }
  if (isMobile) {
    tl.to(".BoxConoceImg", { height: "100%", duration: rapido }, "<");
  } else {
    tl.to(".BoxConoceImg", { width: "100%", duration: rapido }, "<");
  }
  tl.to(".blurParamos", { opacity: 1, duration: rapido });

  tl.to(".conoce", { padding: 0, duration: rapido }, "<");

  const tl2 = scrollEffects(main, tipoScroll * 2);

  tl2
    .to(".m4", { scale: 2, opacity: 0, x: "-80%", duration: rapido })
    .addLabel("m4");
  tl2.fromTo(
    ".m1",
    { opacity: 0.3, width: "30%" },
    { opacity: 1, width: "100%", duration: normal },
    "m4-=0.5"
  );
  tl2.to(
    ".conoce .titulo1",
    { scale: 2, opacity: 0, x: "-80%", duration: rapido },
    "m4-=0.5"
  );

  tl2.to(".circulo1", { display: "none", duration: normal }, "m4-=1");
  tl2.to(".circulo2", { display: "block", duration: rapido }, "m4+=1");
  tl2.to(".circulo3", { display: "block", duration: rapido }, "m4+=1");

  tl2.fromTo(
    ".conoce .titulo2",
    { opacity: 0, width: "30%" },
    { opacity: 1, width: "100%", duration: rapido },
    "<"
  );

  const tl3 = scrollEffects(main, tipoScroll * 3);

  tl3
    .to(".m1", { scale: 2, opacity: 0, x: "-80%", duration: rapido })
    .addLabel("m2");
  tl3.to(".circulo2", { display: "none" }, "m2-=0.5");
  tl3.to(".circulo3", { display: "none" }, "m2-=0.5");

  tl3.fromTo(
    ".m2",
    { opacity: 0.3, width: "30%" },
    { opacity: 1, width: "100%", duration: normal },
    "m2-=0.5"
  );
  tl3.to(
    ".conoce .titulo2",
    { scale: 2, opacity: 0, x: "-80%", duration: rapido },
    "m2-=0.5"
  );

  tl3.to(".circulo4", { display: "block", duration: rapido }, "m2+=1");
  tl3.to(".circulo5", { display: "block", duration: rapido }, "m2+=1");

  tl3.fromTo(
    ".conoce .titulo3",
    { opacity: 0, width: "30%" },
    { opacity: 1, width: "100%", duration: rapido },
    "<"
  );

  const tl4 = scrollEffects(main, tipoScroll * 4);

  tl4.to(".m2", { scale: 2, opacity: 0, x: "80%", duration: rapido });

  tl4.fromTo(
    ".m3",
    { opacity: 0.3, width: "30%" },
    { opacity: 1, width: "100%", duration: normal },
    "<"
  );
  tl4.to(".circulo6", { display: "none", duration: rapido }, "<");
  tl4.to(".circulo7", { display: "none", duration: rapido }, "<");

  tl4.to(
    ".conoce .titulo3",
    { scale: 2, opacity: 0, x: "-80%", duration: rapido },
    "<"
  );
  tl4.to(".circulo4", { display: "none", duration: rapido }, "<");
  tl4.to(".circulo5", { display: "none", duration: rapido }, "<");

  tl4.fromTo(
    ".conoce .titulo4",
    { opacity: 0, width: "30%" },
    { opacity: 1, width: "100%", duration: rapido },
    "<"
  );

  tl4.to(".circulo6", { display: "block" });
  tl4.to(".circulo7", { display: "block" }, "<");

  const tl5 = scrollEffects(main, tipoScroll * 5);

  tl5.to(".blurParamos", { opacity: 0, duration: lento });

  /* tl5.to(".conoce", { y: "-100%", duration: normal });
  tl5.fromTo(".origen", { y: "100%" }, { y: "0%", duration: normal }); */

  if (isMobile) {
    tl5.fromTo(".BoxOrigenText", { height: "100%" }, { height: "50%" });
    tl5.fromTo(".BoxOrigenImg", { height: "0%" }, { height: "50%" }, "<");
  } else {
    tl5.fromTo(".BoxOrigenText", { width: "100%" }, { width: "50%" });
    tl5.fromTo(".BoxOrigenImg", { width: "0%" }, { width: "50%" }, "<");
  }

  const tl6 = scrollEffects(main, tipoScroll * 6);

  if (isMobile) {
    tl6.fromTo(".BoxDosmilTexto", { height: "100%" }, { height: "50%" });
    tl6.fromTo(".BoxDosmilImage", { height: "0%" }, { height: "50%" }, "<");
  } else {
    tl6.fromTo(".BoxDosmilTexto", { width: "100%" }, { width: "50%" });
    tl6.fromTo(".BoxDosmilImage", { width: "0%" }, { width: "50%" }, "<");
  }

  const tl7 = scrollEffects(main, tipoScroll * 7);
  tl7.from(".bgvid", { opacity: 0, duration: normal }).addLabel("niebla");
  if (isMobile) {
    tl7.to(".BoxDosmilImage", { height: "0%" }, "niebla-=0.5");
    tl7.to(".BoxDosmilTexto", { height: "100%" }, "niebla-=0.5");
  } else {
    tl7.to(".BoxDosmilImage", { width: "0%" }, "niebla-=0.5");
    tl7.to(".BoxDosmilTexto", { width: "100%" }, "niebla-=0.5");
  }
  tl7.to(".imgFrailejon", { display: "block" });
  tl7.to(".bgvid", { opacity: 0, duration: rapido });
  tl7
    .to(
      ".PrimerTextoDosmil",
      {
        opacity: 0,
        y: "-100%",
        display: "none",
        duration: rapido,
      },
      "<-=0.5"
    )
    .addLabel("titulo1");

  tl7.from(
    ".SegundoTextoDosmil",
    { display: "none", opacity: 0, y: "0%", duration: rapido },
    "titulo1-=0.5"
  );
  tl7.add(() => {
    setNumFrailejon(0);
  }, "titulo1-=0.1");
  tl7.add(() => {
    setNumFrailejon(1);
  }, "titulo1-=0.1");
  if (isMobile) {
    tl7.to(".BoxDosmilImage", { height: "50%" });
    tl7.to(".BoxDosmilTexto", { height: "50%" }, "<");
  } else {
    tl7.to(".BoxDosmilImage", { width: "50%" });
    tl7.to(".BoxDosmilTexto", { width: "50%" }, "<");
  }

  const tl8 = scrollEffects(main, tipoScroll * 8);
  tl8.to(".bgvid", { opacity: 1, duration: normal }).addLabel("niebla2");

  if (isMobile) {
    tl8.to(".BoxDosmilImage", { height: "0%" }, "niebla2-=0.5");
    tl8.to(".BoxDosmilTexto", { height: "100%" }, "niebla2-=0.5");
  } else {
    tl8.to(".BoxDosmilImage", { width: "0%" }, "niebla2-=0.5");
    tl8.to(".BoxDosmilTexto", { width: "100%" }, "niebla2-=0.5");
  }
  tl8.add(() => {
    setNumFrailejon(1);
  }, "niebla2+=0.5");
  tl8.add(() => {
    setNumFrailejon(2);
  }, "niebla2+=0.5");
  tl8.to(".bgvid", { opacity: 0, duration: normal }, "niebla2+=0.6");
  if (isMobile) {
    tl8.to(".BoxDosmilImage", { height: "50%" });
    tl8.to(".BoxDosmilTexto", { height: "50%" }, "<");
  } else {
    tl8.to(".BoxDosmilImage", { width: "50%" });
    tl8.to(".BoxDosmilTexto", { width: "50%" }, "<");
  }

  const tl9 = scrollEffects(main, tipoScroll * 9);
  tl9.to(".bgvid", { opacity: 1, duration: normal }).addLabel("niebla3");

  if (isMobile) {
    tl9.to(".BoxDosmilImage", { height: "0%" }, "niebla3-=0.5");
    tl9.to(".BoxDosmilTexto", { height: "100%" }, "niebla3-=0.5");
  } else {
    tl9.to(".BoxDosmilImage", { width: "0%" }, "niebla3-=0.5");
    tl9.to(".BoxDosmilTexto", { width: "100%" }, "niebla3-=0.5");
  }
  tl9.add(() => {
    setNumFrailejon(2);
  }, "niebla3+=0.5");
  tl9.add(() => {
    setNumFrailejon(3);
  }, "niebla3+=0.5");
  tl9.to(".bgvid", { opacity: 0, duration: normal }, "niebla3+=0.6");
  if (isMobile) {
    tl9.to(".BoxDosmilImage", { height: "50%" });
    tl9.to(".BoxDosmilTexto", { height: "50%" }, "<");
  } else {
    tl9.to(".BoxDosmilImage", { width: "50%" });
    tl9.to(".BoxDosmilTexto", { width: "50%" }, "<");
  }
  const tl10 = scrollEffects(main, tipoScroll * 10);

  /*  tl10.to(".dosmilFrailejones", {
    y: "-100%",

    duration: normal,
  });

  tl10.fromTo(".capituloMoises", { y: "100%" }, { y: "0%", duration: normal }); */

  const tl11 = scrollEffects(main, tipoScroll * 11);

  if (isMobile) {
    tl11.to(".BoxTravesiaTexto", { height: "100%" });
  } else {
    tl11.to(".BoxTravesiaTexto", { width: "100%" });
  }
  /*  tl11.to(".capituloMoises", { y: "-100%", duration: normal });

  tl11.fromTo(".travesia", { y: "100%" }, { y: "0%", duration: normal });
 */
  if (isMobile) {
    tl11.to(".BoxTravesiaCards", { height: "50%" });
    tl11.to(".BoxTravesiaTexto", { height: "50%" }, "<");
  } else {
    tl11.to(".BoxTravesiaCards", { width: "50%" });
    tl11.to(".BoxTravesiaTexto", { width: "50%" }, "<");
  }
  const tl12 = scrollEffects(main, tipoScroll * 12);

  if (isMobile) {
    tl12.to(".BoxTravesiaCards", { height: "100%" });
    tl12
      .to(".BoxTravesiaTexto", { height: "0%" }, "<")
      .addLabel("cambioTravesia");
  } else {
    tl12.to(".BoxTravesiaCards", { width: "100%" });
    tl12
      .to(".BoxTravesiaTexto", { width: "0%" }, "<")
      .addLabel("cambioTravesia");
  }
  tl12.to(".blurParamos", { opacity: 1, duration: rapido });
  tl12.add(() => {
    setTravesiaReverse(false);
  }, "cambioTravesia");
  tl12.add(() => {
    setTravesiaReverse(true);
  }, "cambioTravesia");
  tl12.to(".travesia > div", { padding: 0, duration: 1 }, "<-=0.5");

  if (isMobile) {
    tl12.fromTo(
      ".cards1",
      { display: "none", opacity: 0 },
      { display: "block", opacity: 1, duration: rapido }
    );
  } else {
    tl12.fromTo(
      ".cards",
      { display: "none", opacity: 0 },
      { display: "block", opacity: 1, duration: rapido }
    );
  }
  tl12.to(".caminante", { display: "block", opacity: 1 });

  const tl13 = scrollEffects(main, tipoScroll * 13);
  tl13.add(() => {
    setTravesiaReverse(true);
  });
  tl13.add(() => {
    setTravesiaReverse(false);
  }, "<");

  /* tl13.to(".travesia", { y: "-100%", duration: normal });
  tl13.fromTo(".contacto", { y: "100%" }, { y: "0%", duration: normal }); */
  tl13.to(".blurParamos", { opacity: 0, duration: rapido }, "<");

  const tl14 = scrollEffects(main, tipoScroll * 14);

  /* tl14.to(".contacto", { y: "-100%", duration: normal });

  tl14.fromTo(".descargable", { y: "100%" }, { y: "0%", duration: normal }); */
  tl14.to(".blurParamos", { opacity: 1, duration: rapido }, "<");
};
