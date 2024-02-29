import { scrollEffects } from "./gsap";
import gsap from "gsap";
export const timeLine = (
  main,
  setImageBg,
  setNumFrailejon,
  setTravesiaReverse
) => {
  const tl = scrollEffects(main);

  /***************Conoce los paramos */
  tl.fromTo(".BoxConoceText", { width: "50%" }, { width: "100%", duration: 2 });
  tl.fromTo(
    ".BoxConoceImg",
    { width: "50%" },
    { width: "0", duration: 2 },
    "<"
  );
  tl.to(".montaña", { display: "block" });
  tl.to(".BoxConoceImg", { width: "100%", duration: 4 });
  tl.from(".blurParamos", { opacity: 0, duration: 4 });
  tl.to(".BoxConoceText", { width: "0", duration: 4 }, "<");
  tl.delay(3);
  tl.to(".conoce", { padding: 0, duration: 5 }, "<");

  tl.delay(3);

  tl.to(".m4", { scale: 2, opacity: 0, x: "-80%", duration: 5 });
  tl.fromTo(
    ".m1",
    { opacity: 0.3, width: "30%" },
    { opacity: 1, width: "100%", duration: 5 },
    "<"
  );
  tl.to(
    ".conoce .titulo1",
    { scale: 2, opacity: 0, x: "-80%", duration: 5 },
    "<"
  );
  tl.to(".circulo1", { display: "none", duration: 1 }, "<");
  tl.to(".circulo2", { display: "block", duration: 4 });
  tl.to(".circulo3", { display: "block", duration: 4 }, "<");

  tl.fromTo(
    ".conoce .titulo2",
    { opacity: 0, width: "30%" },
    { opacity: 1, width: "100%", duration: 3 },
    "<"
  );

  tl.to(".m1", { scale: 2, opacity: 0, x: "-80%", duration: 5 });
  tl.delay(3); // Pausa de 1 segundo
  tl.fromTo(
    ".m2",
    { opacity: 0.3, width: "30%" },
    { opacity: 1, width: "100%", duration: 5 },
    "<"
  );
  tl.to(
    ".conoce .titulo2",
    { scale: 2, opacity: 0, x: "-80%", duration: 5 },
    "<"
  );
  tl.to(".circulo2", { display: "none", duration: 1 }, "<");
  tl.to(".circulo3", { display: "none", duration: 1 }, "<");
  tl.to(".circulo4", { display: "block", duration: 4 });
  tl.to(".circulo5", { display: "block", duration: 4 }, "<");

  tl.fromTo(
    ".conoce .titulo3",
    { opacity: 0, width: "30%" },
    { opacity: 1, width: "100%", duration: 2 },
    "<"
  );
  tl.to(".m2", { scale: 2, opacity: 0, x: "80%", duration: 5 });
  tl.delay(3); // Pausa de 1 segundo
  tl.fromTo(
    ".m3",
    { opacity: 0.3, width: "30%" },
    { opacity: 1, width: "100%", duration: 5 },
    "<"
  );
  tl.to(".circulo6", { display: "none", duration: 4 }, "<");
  tl.to(".circulo7", { display: "none", duration: 4 }, "<");

  tl.to(
    ".conoce .titulo3",
    { scale: 2, opacity: 0, x: "-80%", duration: 5 },
    "<"
  );
  tl.to(".circulo4", { display: "none", duration: 4 }, "<");
  tl.to(".circulo5", { display: "none", duration: 4 }, "<");

  tl.fromTo(
    ".conoce .titulo4",
    { opacity: 0, width: "30%" },
    { opacity: 1, width: "100%", duration: 5 },
    "<"
  );
  tl.delay(3);
  tl.to(".circulo6", { display: "block" });
  tl.to(".circulo7", { display: "block" }, "<");
  tl.to(".conoce", { opacity: 0, duration: 1 }, "<+=3");
  tl.to(".conoce", { display: "none" });
  tl.from(".blurParamos", { opacity: 1, duration: 8 }, "<+=0.5");
  tl.add(() => {
    setImageBg("/Conoce/fondoConoce.webp");
  }, "<+=0.2");
  tl.add(() => {
    setImageBg("/bgParamos/360.webp");
  }, "<+=0.2");

  /**************Origen */

  tl.fromTo(".BoxOrigenText", { width: "50%" }, { width: "0", duration: 4 });
  tl.fromTo(
    ".BoxOrigenImg",
    { width: "50%" },
    { width: "100%", duration: 4 },
    "<"
  );
  tl.from(".blurParamos", { opacity: 0, duration: 4 }, "<-=1");
  tl.from(".embeded", { opacity: 0 }).addLabel("embebido");
  tl.to(".origen", { padding: 0 }, "<");
  tl.to(".origen", { opacity: 0, duration: 1 }, "embebido+=8").addLabel(
    "outOrigen"
  );
  tl.to(".origen", { display: "none" }, "outOrigen");

  /********************DosMil frailejones */

  tl.add(() => {
    setImageBg("/bgParamos/360.webp");
  }, "outOrigen-=0.5");
  tl.add(() => {
    setImageBg("/bgParamos/Bg20mil.webp");
  }, "outOrigen-=0.5");

  tl.fromTo(".BoxDosmilImage", { width: "0%" }, { width: "50%", duration: 4 });
  tl.fromTo(
    ".BoxDosmilTexto",
    { width: "0%" },
    { width: "50%", duration: 4 },
    "<+=1"
  );
  tl.to(".blurParamos", { opacity: 0, duration: 4 });
  tl.from(".bgvid", { opacity: 0, duration: 3 }, "+=3").addLabel("niebla1");
  tl.fromTo(
    ".BoxDosmilTexto",
    { width: "50%" },
    { width: "0%", duration: 4 },
    "niebla1+=3"
  );
  tl.fromTo(
    ".BoxDosmilImage",
    { width: "50%" },
    { width: "0%", duration: 4 },
    "niebla1+=6"
  );

  tl.to(".BoxDosmilTexto", { opacity: 0 }, "niebla1+=6");
  tl.to(".BoxDosmilTexto", { x: "210%", width: "50%", duration: 4 });
  tl.to(".PrimerTextoDosmil", { display: "none" }).addLabel("cambioTitulo");
  tl.from(".SegundoTextoDosmil", { display: "none" }, "cambioTitulo");
  tl.add(() => {
    setNumFrailejon(0);
  }, "cambioTitulo");
  tl.add(() => {
    setNumFrailejon(1);
  }, "cambioTitulo");
  tl.to(".imgFrailejon", { display: "block" }, "cambioTitulo");
  tl.to(".BoxDosmilTexto", {
    opacity: 1,
    x: 0,
    width: "100%",
    duration: 4,
  });
  tl.to(".bgvid", { opacity: 0, duration: 4 }, "+=3").addLabel("nuevascajas");
  tl.to(".BoxDosmilTexto", { width: "50%", duration: 4 }, "nuevascajas+=6");
  tl.to(".BoxDosmilImage", { width: "50%", duration: 4 }, "nuevascajas+=6");
  tl.fromTo(
    ".BoxDosmilImage span",
    { opacity: 0 },
    { opacity: 1, duration: 4 }
  );

  tl.to(".bgvid", { opacity: 1, duration: 4 }, "+=6").addLabel("niebla2");
  tl.fromTo(
    ".BoxDosmilImage span",
    { opacity: 1 },
    { opacity: 0, duration: 4 },
    "niebla2"
  );
  tl.to(".BoxDosmilTexto", { width: "100%", duration: 4 }, "niebla2+=6");
  tl.to(".BoxDosmilImage", { width: "0%", duration: 4 }, "niebla2+=6");
  tl.add(() => {
    setNumFrailejon(1);
  });
  tl.add(() => {
    setNumFrailejon(2);
  }, "<");
  tl.to(".bgvid", { opacity: 0, duration: 4 }, "+=3");
  tl.to(".BoxDosmilTexto", { width: "50%", duration: 4 }, "+=6");
  tl.to(".BoxDosmilImage", { width: "50%", duration: 4 }, "<");
  tl.fromTo(
    ".BoxDosmilImage span",
    { opacity: 0 },
    { opacity: 1, duration: 4 }
  );
  tl.to(".bgvid", { opacity: 1 }, "+=3");
  tl.fromTo(
    ".BoxDosmilImage span",
    { opacity: 1 },
    { opacity: 0, duration: 4 }
  );
  tl.to(".BoxDosmilTexto", { width: "100%", duration: 4 });
  tl.to(".BoxDosmilImage", { width: "0%", duration: 4 }, "<");
  tl.add(() => {
    setNumFrailejon(2);
  }),
    "+=2";
  tl.add(() => {
    setNumFrailejon(3);
  }, "<");
  tl.to(".bgvid", { opacity: 0, duration: 4 }, "+=3");
  tl.to(".BoxDosmilTexto", { width: "50%", duration: 4 }, "+=6");
  tl.to(".BoxDosmilImage", { width: "50%", duration: 4 }, "<");
  tl.fromTo(".BoxDosmilImage span", { opacity: 0 }, { opacity: 1 });
  tl.to(".blurParamos", { opacity: 1, duration: 8 });
  tl.to(".dosmilFrailejones", { opacity: 0, duration: 4 }).addLabel(
    "entradaMoises"
  );
  tl.to(
    ".dosmilFrailejones",
    { display: "none", duration: 0.1 },
    "entradaMoises+=1"
  );

  /*************Capitulo Moises */
  tl.add(() => {
    setImageBg("/bgParamos/Bg20mil.webp");
  }, "entradaMoises");
  tl.add(() => {
    setImageBg("/contruccionVivero.webp");
  }, "entradaMoises");

  tl.to(".capituloMoises", { opacity: 1, padding: 0 }, "entradaMoises");

  tl.to(".capituloMoises", { opacity: 0, duration: 1 }, "+=12").addLabel(
    "entradatravesia"
  );
  tl.add(() => {
    setTravesiaReverse(false);
  }, "entradatravesia");
  tl.add(() => {
    setTravesiaReverse(true);
  }, "entradatravesia");
  tl.to(
    ".capituloMoises",
    { display: "none", duration: 0.1 },
    "entradatravesia"
  );
  /*************Entrada tarjetas slide */
  tl.fromTo(
    ".travesia",
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    "entradatravesia+=1"
  );
  tl.add(() => {
    setImageBg("/bgParamos/Bg20mil.webp");
  }, "entradatravesia");
  tl.add(() => {
    setImageBg("/bgParamos/bg-travesia1.webp");
  }, "entradatravesia");

  tl.to(".travesia", { opacity: 0, duration: 1 }, "+=6");

  tl.to(".travesia", { display: "none" });
  tl.to(".blurParamos", { opacity: 0, duration: 2 });
  tl.add(() => {
    setImageBg("/bgParamos/bg-travesia1.webp");
  }, "<");
  tl.add(() => {
    setImageBg("/contacto/contacto.webp");
  }, "<");
  tl.add(() => {
    setTravesiaReverse(true);
  }, "<");
  tl.add(() => {
    setTravesiaReverse(false);
  }, "<");
  /************Contact */

  tl.fromTo(
    ".contacto .textoContacto",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
    }
  ),
    "<";
  tl.fromTo(
    ".contacto .parrafoContacto",
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power1.inOut",
    }
  );

  tl.to(
    ".contacto",
    {
      display: "none",
    },
    "+=3"
  );

  tl.to(".blurParamos", { opacity: 1, duration: 0.5 });
  /********Descargable */

  tl.add(() => {
    setImageBg("/contacto/contacto.webp");
  }, "<");
  tl.add(() => {
    setImageBg("/contacto/descargable.webp");
  }, "<");

  tl.fromTo(
    ".descargable .textoContacto",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
    }
  );
  tl.fromTo(
    ".descargable .textoContacto2",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
    }
  );
  tl.fromTo(
    ".descargable .BotonContacto",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
    }
  );
};
