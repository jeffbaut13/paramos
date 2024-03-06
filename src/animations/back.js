if (isMobile) {
  tl.fromTo(
    ".BoxConoceText",
    { height: "50%" },
    { height: "100%", duration: 2 }
  );
} else {
  tl.fromTo(".BoxConoceText", { width: "50%" }, { width: "100%", duration: 2 });
}
if (isMobile) {
  tl.fromTo(
    ".BoxConoceImg",
    { height: "50%" },
    { height: "0", duration: 2 },
    "<"
  );
} else {
  tl.fromTo(
    ".BoxConoceImg",
    { width: "50%" },
    { width: "0", duration: 2 },
    "<"
  );
}

tl.to(".montaña", { display: "block" });
if (isMobile) {
  tl.to(".BoxConoceImg", { height: "100%", duration: 4 });
} else {
  tl.to(".BoxConoceImg", { width: "100%", duration: 4 });
}
tl.from(".blurParamos", { opacity: 0, duration: 4 });
if (isMobile) {
  tl.to(".BoxConoceText", { height: "0", duration: 4 }, "<");
} else {
  tl.to(".BoxConoceText", { width: "0", duration: 4 }, "<");
}
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

if (isMobile) {
  tl.fromTo(".BoxOrigenText", { height: "50%" }, { height: "0", duration: 4 });
  tl.fromTo(
    ".BoxOrigenImg",
    { height: "50%" },
    { height: "100%", duration: 4 },
    "<"
  );
} else {
  tl.fromTo(".BoxOrigenText", { width: "50%" }, { width: "0", duration: 4 });
  tl.fromTo(
    ".BoxOrigenImg",
    { width: "50%" },
    { width: "100%", duration: 4 },
    "<"
  );
}

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

if (isMobile) {
  tl.fromTo(
    ".BoxDosmilImage",
    { height: "0%" },
    { height: "50%", duration: 4 }
  );
  tl.fromTo(
    ".BoxDosmilTexto",
    { height: "0%" },
    { height: "50%", duration: 4 },
    "<+=1"
  );
} else {
  tl.fromTo(".BoxDosmilImage", { width: "0%" }, { width: "50%", duration: 4 });
  tl.fromTo(
    ".BoxDosmilTexto",
    { width: "0%" },
    { width: "50%", duration: 4 },
    "<+=1"
  );
}
tl.to(".blurParamos", { opacity: 0, duration: 4 });
tl.from(".bgvid", { opacity: 0, duration: 3 }, "+=3").addLabel("niebla1");
if (isMobile) {
  tl.fromTo(
    ".BoxDosmilTexto",
    { height: "50%" },
    { height: "0%", duration: 4 },
    "niebla1+=3"
  );
  tl.fromTo(
    ".BoxDosmilImage",
    { height: "50%" },
    { height: "0%", duration: 4 },
    "niebla1+=6"
  );
} else {
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
}

tl.to(".BoxDosmilTexto", { opacity: 0 }, "niebla1+=6");
if (isMobile) {
  tl.to(".BoxDosmilTexto", { y: "120%", height: "50%", duration: 4 });
} else {
  tl.to(".BoxDosmilTexto", { x: "210%", width: "50%", duration: 4 });
}
tl.to(".PrimerTextoDosmil", { display: "none" }).addLabel("cambioTitulo");
tl.from(".SegundoTextoDosmil", { display: "none" }, "cambioTitulo");
tl.add(() => {
  setNumFrailejon(0);
}, "cambioTitulo");
tl.add(() => {
  setNumFrailejon(1);
}, "cambioTitulo");
tl.to(".imgFrailejon", { display: "block" }, "cambioTitulo");
if (isMobile) {
  tl.to(".BoxDosmilTexto", {
    opacity: 1,
    y: 0,
    height: "100%",
    duration: 4,
  });
} else {
  tl.to(".BoxDosmilTexto", {
    opacity: 1,
    x: 0,
    width: "100%",
    duration: 4,
  });
}
tl.to(".bgvid", { opacity: 0, duration: 4 }, "+=3").addLabel("nuevascajas");
if (isMobile) {
  tl.to(".BoxDosmilTexto", { height: "50%", duration: 4 }, "nuevascajas+=6");
  tl.to(".BoxDosmilImage", { height: "50%", duration: 4 }, "nuevascajas+=6");
} else {
  tl.to(".BoxDosmilTexto", { width: "50%", duration: 4 }, "nuevascajas+=6");
  tl.to(".BoxDosmilImage", { width: "50%", duration: 4 }, "nuevascajas+=6");
}
tl.fromTo(".BoxDosmilImage span", { opacity: 0 }, { opacity: 1, duration: 4 });

tl.to(".bgvid", { opacity: 1, duration: 4 }, "+=6").addLabel("niebla2");
tl.fromTo(
  ".BoxDosmilImage span",
  { opacity: 1 },
  { opacity: 0, duration: 4 },
  "niebla2"
);
if (isMobile) {
  tl.to(".BoxDosmilTexto", { height: "100%", duration: 4 }, "niebla2+=6");
  tl.to(".BoxDosmilImage", { height: "0%", duration: 4 }, "niebla2+=6");
} else {
  tl.to(".BoxDosmilTexto", { width: "100%", duration: 4 }, "niebla2+=6");
  tl.to(".BoxDosmilImage", { width: "0%", duration: 4 }, "niebla2+=6");
}
tl.add(() => {
  setNumFrailejon(1);
});
tl.add(() => {
  setNumFrailejon(2);
}, "<");
tl.to(".bgvid", { opacity: 0, duration: 4 }, "+=3");
if (isMobile) {
  tl.to(".BoxDosmilTexto", { height: "50%", duration: 4 }, "+=6");
  tl.to(".BoxDosmilImage", { height: "50%", duration: 4 }, "<");
} else {
  tl.to(".BoxDosmilTexto", { width: "50%", duration: 4 }, "+=6");
  tl.to(".BoxDosmilImage", { width: "50%", duration: 4 }, "<");
}
tl.fromTo(".BoxDosmilImage span", { opacity: 0 }, { opacity: 1, duration: 4 });
tl.to(".bgvid", { opacity: 1 }, "+=3");
tl.fromTo(".BoxDosmilImage span", { opacity: 1 }, { opacity: 0, duration: 4 });
if (isMobile) {
  tl.to(".BoxDosmilTexto", { height: "100%", duration: 4 });
  tl.to(".BoxDosmilImage", { height: "0%", duration: 4 }, "<");
} else {
  tl.to(".BoxDosmilTexto", { width: "100%", duration: 4 });
  tl.to(".BoxDosmilImage", { width: "0%", duration: 4 }, "<");
}
tl.add(() => {
  setNumFrailejon(2);
}),
  "+=2";
tl.add(() => {
  setNumFrailejon(3);
}, "<");
tl.to(".bgvid", { opacity: 0, duration: 4 }, "+=3");
if (isMobile) {
  tl.to(".BoxDosmilTexto", { height: "50%", duration: 4 }, "+=6");
  tl.to(".BoxDosmilImage", { height: "50%", duration: 4 }, "<");
} else {
  tl.to(".BoxDosmilTexto", { width: "50%", duration: 4 }, "+=6");
  tl.to(".BoxDosmilImage", { width: "50%", duration: 4 }, "<");
}
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

tl.to(".capituloMoises", { display: "none", duration: 0.1 }, "entradatravesia");
/*************Entrada Travesia  */
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
if (isMobile) {
  tl.fromTo(
    ".BoxTravesiaTexto",
    {
      height: "0%",
    },
    {
      height: "100%",
      ease: "power1.inOut",
      duration: 2,
    }
  );
  tl.to(".BoxTravesiaTexto", {
    height: "50%",
    ease: "power1.inOut",
    duration: 2,
  });
  tl.to(
    ".BoxTravesiaCards",
    {
      height: "50%",
      ease: "power1.inOut",
      duration: 2,
    },
    "<"
  );
  tl.to(".BoxTravesiaCards", {
    height: "100%",
    ease: "power1.inOut",
    duration: 2,
  });
  tl.to(".BoxTravesiaTexto", {
    height: "0%",
    ease: "power1.inOut",
    duration: 2,
  }).addLabel("cambioTravesia");
} else {
  tl.fromTo(
    ".BoxTravesiaTexto",
    {
      width: "0%",
    },
    {
      width: "100%",
      ease: "power1.inOut",
      duration: 2,
    }
  ),
    "cambioTravesia";
  tl.to(".BoxTravesiaTexto", {
    width: "50%",
    ease: "power1.inOut",
    duration: 2,
  });
  tl.to(
    ".BoxTravesiaCards",
    {
      width: "50%",
      ease: "power1.inOut",
      duration: 2,
    },
    "<"
  );

  tl.to(".BoxTravesiaCards", {
    width: "100%",
    ease: "power1.inOut",
    duration: 2,
  });
  tl.to(".BoxTravesiaTexto", {
    width: "0%",
    ease: "power1.inOut",
    duration: 2,
  }).addLabel("cambioTravesia");
}
tl.add(() => {
  setTravesiaReverse(false);
}, "cambioTravesia");
tl.add(() => {
  setTravesiaReverse(true);
}, "cambioTravesia");
tl.add(() => {
  setImageBg("/bgParamos/bg-travesia1.webp");
}, "cambioTravesia");

tl.to(".travesia", { padding: 0, duration: 1 });

if (isMobile) {
  tl.to(".cards1", { display: "block" }, "<");
} else {
  tl.to(".cards", { display: "block" }, "<");
}

tl.to(".caminante", { display: "block", opacity: 1 });
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

tl5.to(".conoce", { zIndex: "10" }).addLabel("z2");
tl5.to(".origen", { zIndex: "100" }, "z2");
tl5.to(".dosmilFrailejones", { zIndex: "10" }, "z2");
tl5.to(".capituloMoises", { zIndex: "10" }, "z2");
tl5.to(".travesia", { zIndex: "10" }, "z2");
tl5.to(".contacto", { zIndex: "10" }, "z2");
tl5.to(".descargable", { zIndex: "10" }, "z2");

tl6.to(".conoce", { zIndex: "10" }).addLabel("z3");
tl6.to(".origen", { zIndex: "10" }, "z3");
tl6.to(".dosmilFrailejones", { zIndex: "100" }, "z3");
tl6.to(".capituloMoises", { zIndex: "10" }, "z3");
tl6.to(".travesia", { zIndex: "10" }, "z3");
tl6.to(".contacto", { zIndex: "10" }, "z3");
tl6.to(".descargable", { zIndex: "10" }, "z3");

tl10.to(".conoce", { zIndex: "10" }).addLabel("z4");
tl10.to(".origen", { zIndex: "10" }, "z4");
tl10.to(".dosmilFrailejones", { zIndex: "10" }, "z4");
tl10.to(".capituloMoises", { zIndex: "100" }, "z4");
tl10.to(".travesia", { zIndex: "10" }, "z4");
tl10.to(".contacto", { zIndex: "10" }, "z4");
tl10.to(".descargable", { zIndex: "10" }, "z4");

tl11.to(".conoce", { zIndex: "10" }).addLabel("z5");
tl11.to(".origen", { zIndex: "10" }, "z5");
tl11.to(".dosmilFrailejones", { zIndex: "10" }, "z5");
tl11.to(".capituloMoises", { zIndex: "10" }, "z5");
tl11.to(".travesia", { zIndex: "100" }, "z5");
tl11.to(".contacto", { zIndex: "10" }, "z5");
tl11.to(".descargable", { zIndex: "10" }, "z5");

tl13.to(".conoce", { zIndex: "10" }).addLabel("z6");
tl13.to(".origen", { zIndex: "10" }, "z6");
tl13.to(".dosmilFrailejones", { zIndex: "10" }, "z6");
tl13.to(".capituloMoises", { zIndex: "10" }, "z6");
tl13.to(".travesia", { zIndex: "10" }, "z6");
tl13.to(".contacto", { zIndex: "100" }, "z6");
tl13.to(".descargable", { zIndex: "10" }, "z6");

tl14.to(".conoce", { zIndex: "10" }).addLabel("z6");
tl14.to(".origen", { zIndex: "10" }, "z6");
tl14.to(".dosmilFrailejones", { zIndex: "10" }, "z6");
tl14.to(".capituloMoises", { zIndex: "10" }, "z6");
tl14.to(".travesia", { zIndex: "10" }, "z6");
tl14.to(".contacto", { zIndex: "10" }, "z6");
tl14.to(".descargable", { zIndex: "100" }, "z6");
