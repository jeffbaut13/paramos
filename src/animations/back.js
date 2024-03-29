import { useEffect } from "react";
import { scrollEffects, transitionSection } from "./gsap";
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
      { height: "0", borderRadius: "1.5rem", duration: rapido },
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
  tl.to(".mouseScroll", { opacity: 0, duration: lento }, "<");

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

  tl2
    .to(".circulo1", { display: "none", duration: normal }, "m4-=1")
    .addLabel("circulo1");
  tl2.to(".circulo2", { display: "block", duration: rapido }, "m4+=1");
  tl2.to(".circulo3", { display: "block", duration: rapido }, "m4+=1");
  tl2.to(
    ".moveTwo",
    {
      display: "none",
    },
    "circulo1-=1"
  );

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
  tl4.to(".mouseScroll", { opacity: 1, duration: lento });
  tl4.to(".mainParamos", { overflow: "hidden" });

  const tl5 = scrollEffects(main, tipoScroll * 5.4);

  tl5.to(".blurParamos", { opacity: 0, duration: rapido }, "<");

  if (isMobile) {
    tl5.fromTo(".BoxOrigenText", { height: "100%" }, { height: "50%" });
    tl5.fromTo(".BoxOrigenImg", { height: "0%" }, { height: "50%" }, "<");
  } else {
    tl5.fromTo(".BoxOrigenText", { width: "100%" }, { width: "50%" });
    tl5.fromTo(".BoxOrigenImg", { width: "0%" }, { width: "50%" }, "<");
  }

  const tl6 = scrollEffects(main, tipoScroll * 6.33);
  tl6.to(".mainParamos", { overflow: "hidden" }).addLabel("dosMil");

  if (isMobile) {
    tl6.fromTo(
      ".BoxDosmilTexto",
      { height: "100%" },
      { height: "50%" },
      "dosMil"
    );
    tl6.fromTo(".BoxDosmilImage", { height: "0%" }, { height: "50%" }, "<");
  } else {
    tl6.fromTo(
      ".BoxDosmilTexto",
      { width: "100%" },
      { width: "50%" },
      "dosMil"
    );
    tl6.fromTo(".BoxDosmilImage", { width: "0%" }, { width: "50%" }, "<");
  }

  const tl7 = scrollEffects(main, tipoScroll * 7);
  tl7.add(() => {
    setNumFrailejon(0);
  });
  tl7.from(".bgvid", { opacity: 0, duration: normal }, "<").addLabel("niebla");
  if (isMobile) {
    tl7.to(".BoxDosmilImage", { height: "0%" }, "niebla-=0.5");
    tl7.to(".BoxDosmilTexto", { height: "100%" }, "niebla-=0.5");
  } else {
    tl7.to(".BoxDosmilImage", { width: "0%" }, "niebla-=0.5");
    tl7.to(".BoxDosmilTexto", { width: "100%" }, "niebla-=0.5");
  }
  if (numFrailejon) {
    tl7.to(".imgFrailejon", {
      display: `${numFrailejon == 0 ? "none" : "block"}`,
    });
  }
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

  const tl11 = scrollEffects(main, tipoScroll * 11);

  tl11.to(".blurParamos", { opacity: 1, duration: rapido });

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

  const tl12 = scrollEffects(main, tipoScroll * 11.3);

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

  const tl13 = scrollEffects(main, tipoScroll * 12);
  tl13.add(() => {
    setTravesiaReverse(true);
  });
  tl13.add(() => {
    setTravesiaReverse(false);
  }, "<");

  tl13.to(".blurParamos", { opacity: 0, duration: rapido }, "<");

  const tl14 = scrollEffects(main, tipoScroll * 12.8);

  tl14.to(".blurParamos", { opacity: 1, duration: rapido }, "<");
};

/********************************** */

tl.fromTo(".BoxConoceText", { width: "50%" }, { width: "100%" }, "inicio-=1");
tl.fromTo(".BoxConoceImg", { width: "50%" }, { width: "0%" }, "inicio-=1");
tl.to(".montaña", { display: "block" });
tl.to(".BoxConoceText", { width: "50%" }, "<");
tl.to(".BoxConoceImg", { width: "50%" }, "<");

const tl7 = scrollEffects(main, 30);
tl7.add(() => {
  setNumFrailejon(0);
});
tl7.from(".bgvid", { opacity: 0, duration: normal }, "<").addLabel("niebla");
if (isMobile) {
  tl7.to(".BoxDosmilImage", { height: "0%" }, "niebla-=0.5");
  tl7.to(".BoxDosmilTexto", { height: "100%" }, "niebla-=0.5");
} else {
  tl7.to(".BoxDosmilImage", { width: "0%" }, "niebla-=0.5");
  tl7.to(".BoxDosmilTexto", { width: "100%" }, "niebla-=0.5");
}
if (numFrailejon) {
  tl7.to(".imgFrailejon", {
    display: `${numFrailejon == 0 ? "none" : "block"}`,
  });
}
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
const tl8 = scrollEffects(main, 35);
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

const tl9 = scrollEffects(main, 36.7, true);
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

/****************************scroll */

useEffect(() => {
  gsap.to(main.current, {
    scrollTrigger: {
      trigger: main.current,
      start: "top top", // Comienza en la parte superior del contenedor
      end: "bottom bottom", // Termina en la parte inferior del contenedor

      onUpdate: (self) => {
        const scroll = self.progress * 100;
        setScrollPercentageTwo(scroll);
        //console.log("scroll Padre " + scroll);
        //switchProcentageZindex(scrollPercentage);

        if (scroll >= 0 && scroll < 14.28) {
          setActiveButton("Origen");
          setScrollPercentage(1);
        } else if (scroll >= 14.28 && scroll < 28.56) {
          setItemActive(0);
          setActiveButton("Nuestro propósito");
          setScrollPercentage(2);
        } else if (scroll >= 28.56 && scroll < 42.84) {
          setActiveButton("2.000 Frailejones");
          setScrollPercentage(3);
        } else if (scroll >= 42.84 && scroll < 57.12) {
          setActiveButton("Los páramos");
          setScrollPercentage(4);
        } else if (scroll >= 57.12 && scroll < 71.4) {
          setActiveButton("Contacto");
          setScrollPercentage(5);
        } else if (scroll >= 71.4 && scroll < 85.68) {
          setScrollPercentage(6);
        } else if (scroll >= 85.68) {
          setActiveButton("Cuéntale a todos");
          setScrollPercentage(7);
        }
      },
    },
  });
  if (scrollPercentage == 1) {
    transitionSection(".contenedor", 0, 1);
  }
  if (scrollPercentage == 2) {
    transitionSection(".contenedor", 100, 1);
    setItemActive(false);
  }
  if (scrollPercentage == 3) {
    transitionSection(".contenedor", 200, 1);
  }
  if (scrollPercentage == 4) {
    transitionSection(".contenedor", 300, 1);
  }
  if (scrollPercentage == 5) {
    transitionSection(".contenedor", 400, 1);
  }
  if (scrollPercentage == 6) {
    transitionSection(".contenedor", 500, 1);
  }
  if (scrollPercentage == 7) {
    transitionSection(".contenedor", 600, 1);
  }
}, [main, activeButton, numFrailejon, scrollPercentage]);

useEffect(() => {
  gsap.to(main.current, {
    scrollTrigger: {
      trigger: main.current,
      start: "top top", // Comienza en la parte superior del contenedor
      end: "bottom bottom", // Termina en la parte inferior del contenedor

      onUpdate: (self) => {
        const scroll = self.progress * 100;
        setScrollPercentageTwo(scroll);
        //console.log("scroll Padre " + scroll);
        //switchProcentageZindex(scrollPercentage);

        if (scroll >= 1 && scroll < 11.11) {
          setActiveButton("Origen");
          setScrollPercentage(1);
        } else if (scroll >= 11.11 && scroll < 22.22) {
          setItemActive(0);
          setActiveButton("Nuestro propósito");
          setScrollPercentage(2);
          setNumFrailejon(null);
          gsap.to(".blurParamos", { opacity: 0, duration: 1 });
        } else if (scroll >= 22.22 && scroll < 33.33) {
          setActiveButton("2.000 Frailejones");
          setScrollPercentage(3);
          setPlayCapitulo(false);
          gsap.to(".blurParamos", { opacity: 0, duration: 1 });
        } else if (scroll >= 33.33 && scroll < 44.44) {
          setActiveButton("Los páramos");
          setPlayCapitulo(true);
          setScrollPercentage(4);
          setTravesiaReverse(false);
          gsap.to(".blurParamos", { opacity: 0, duration: 1 });
        } else if (scroll >= 44.44 && scroll < 55.55) {
          setPlayCapitulo(false);
          setScrollPercentage(5);
          setTravesiaReverse(true);
          setPlay(false);
          gsap.to(".blurParamos", { opacity: 0, duration: 1 });
        } else if (scroll >= 55.55 && scroll < 66.66) {
          setActiveButton("Más allá de la siembra");
          setScrollPercentage(6);
          setPlayMoises(false);
          gsap.to(".blurParamos", { opacity: 0, duration: 1 });
        } else if (scroll >= 66.66 && scroll < 77.77) {
          setActiveButton("Primer guardián");
          setScrollPercentage(7);
          setPlay(false);
          gsap.to(".blurParamos", { opacity: 0, duration: 1 });
        } else if (scroll >= 77.77 && scroll < 88.88) {
          setActiveButton("Contacto");
          setScrollPercentage(8);
          setPlayMoises(false);
          gsap.to(".blurParamos", { opacity: 0, duration: 1 });
        } else if (scroll >= 88.88) {
          setActiveButton("Cuéntale a todos");
          setScrollPercentage(9);
        }
      },
    },
  });
  if (scrollPercentage == 1) {
    transitionSection(".contenedor", 0, 1);
  }
  if (scrollPercentage == 2) {
    transitionSection(".contenedor", 100, 1);
    setItemActive(false);
  }
  if (scrollPercentage == 3) {
    transitionSection(".contenedor", 200, 1);
  }
  if (scrollPercentage == 4) {
    transitionSection(".contenedor", 300, 1);
  }
  if (scrollPercentage == 5) {
    transitionSection(".contenedor", 400, 1);
  }
  if (scrollPercentage == 6) {
    transitionSection(".contenedor", 500, 1);
  }
  if (scrollPercentage == 7) {
    transitionSection(".contenedor", 600, 1);
  }
  if (scrollPercentage == 8) {
    transitionSection(".contenedor", 700, 1);
  }
  if (scrollPercentage == 9) {
    transitionSection(".contenedor", 800, 1);
  }
}, [main, activeButton, numFrailejon, scrollPercentage]);

useEffect(() => {
  let ctx = gsap.context(() => {
    timeLine(main);
  }, main);
  return () => ctx.revert(); // cleanup!
}, [main]);

import React, { useState } from "react";

const TouchDetector = () => {
  const [startTouchY, setStartTouchY] = useState(0);

  const handleTouchStart = (e) => {
    // Guarda la posición inicial del toque en Y
    setStartTouchY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    // Opcional: Aquí podrías manejar la lógica mientras el usuario está deslizando el dedo
  };

  const handleTouchEnd = (e) => {
    // Calcula la diferencia entre la posición inicial y final del toque
    const endTouchY = e.changedTouches[0].clientY;
    const diff = startTouchY - endTouchY;

    // Determina la dirección del deslizamiento y muestra un mensaje
    if (diff > 0) {
      console.log("Deslizó hacia arriba");
    } else if (diff < 0) {
      console.log("Deslizó hacia abajo");
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ height: "100vh", width: "100%", backgroundColor: "#f0f0f0" }}
    >
      Desliza hacia arriba o hacia abajo en esta área
    </div>
  );
};

export default TouchDetector;

useEffect(() => {
  if (trasladar == 0) {
    timeLine();
    gsap.to(".contenedor", {
      y: "-0",
      ease: "power1.inOut",
      duration: velocidadTransicion,
    });
    setScrollPercentageTwo(0);
    setActiveButton("2,000 Frailejones");
    setScrollPercentage(1);
  } else if (trasladar == 1) {
    gsap.to(".contenedor", {
      y: "-100%",
      ease: "power1.inOut",
      duration: velocidadTransicion,
    });
    setScrollPercentageTwo(porcentaje);
    setItemActive(0);
    setActiveButton("los expertos");
    setScrollPercentage(2);
    setNumFrailejon(null);

    gsap.to(".blurParamos", { opacity: 0, duration: 1 });
  } else if (trasladar == 2) {
    gsap.to(".contenedor", {
      y: "-200%",
      ease: "power1.inOut",
      duration: velocidadTransicion,
    });
    setScrollPercentageTwo(porcentaje * 2);
    setActiveButton("Las especies");
    setScrollPercentage(3);
    setPlayCapitulo(false);

    gsap.to(".blurParamos", { opacity: 0, duration: 1 });
  } else if (trasladar == 3) {
    gsap.to(".contenedor", {
      y: "-300%",
      ease: "power1.inOut",
      duration: velocidadTransicion,
    });
    setScrollPercentageTwo(porcentaje * 3);
    setActiveButton("Primera siembra");

    setScrollPercentage(4);
    setTravesiaReverse(false);

    gsap.to(".blurParamos", { opacity: 0, duration: 1 });
  } else if (trasladar == 4) {
    gsap.to(".contenedor", {
      y: "-400%",
      ease: "power1.inOut",
      duration: velocidadTransicion,
    });
    setPlayCapitulo(false);
    setScrollPercentageTwo(porcentaje * 4);
    setScrollPercentage(5);
    setTravesiaReverse(true);
    setPlay(false);

    gsap.to(".blurParamos", { opacity: 0, duration: 1 });
  } else if (trasladar == 5) {
    gsap.to(".contenedor", {
      y: "-500%",
      ease: "power1.inOut",
      duration: velocidadTransicion,
    });
    setActiveButton("Campamento");
    setScrollPercentageTwo(porcentaje * 5);
    setScrollPercentage(6);
    setPlayMoises(false);

    gsap.to(".blurParamos", { opacity: 0, duration: 1 });
  } else if (trasladar == 6) {
    gsap.to(".contenedor", {
      y: "-600%",
      ease: "power1.inOut",
      duration: velocidadTransicion,
    });
    setActiveButton("Moisés Moreno");
    setScrollPercentageTwo(porcentaje * 6);
    setScrollPercentage(7);
    setPlay(false);

    gsap.to(".blurParamos", { opacity: 0, duration: 1 });
  } else if (trasladar == 7) {
    gsap.to(".contenedor", {
      y: "-700%",
      ease: "power1.inOut",
      duration: velocidadTransicion,
    });
    setActiveButton("¿Preguntas?");
    setScrollPercentageTwo(porcentaje * 7);
    setScrollPercentage(8);
    setPlayMoises(false);

    gsap.to(".blurParamos", { opacity: 0, duration: 1 });
  } else if (trasladar == 8) {
    gsap.to(".contenedor", {
      y: "-800%",
      ease: "power1.inOut",
      duration: velocidadTransicion,
    });
    setActiveButton("Descargable");
    setScrollPercentageTwo(porcentaje * 8);
    setScrollPercentage(9);
    gsap.fromTo(".blurParamos", { opacity: 0 }, { opacity: 1, duration: 1 });
  }
  if (active360 === 2) {
    setActive360(3);
  }
}, [trasladar, main, activeButton, numFrailejon, scrollPercentage]);
