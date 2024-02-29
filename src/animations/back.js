useEffect(() => {
  let ctx = gsap.context(() => {
    const tl = scrollEffects(main);
    /***************Conoce los paramos */

    /**************Origen */

    tl.fromTo(".BoxOrigenText", { width: "50%" }, { width: "0", duration: 4 });
    tl.fromTo(
      ".BoxOrigenImg",
      { width: "50%" },
      { width: "100%", duration: 4 },
      "<"
    );
    tl.from(".embeded", { opacity: 0 }).addLabel("embebido");
    tl.from(".blurParamos", { opacity: 0, duration: 4 }, "<");
    tl.to(".origen", { padding: 0 }, "<");
    tl.to(".origen", { opacity: 0 }, "embebido+=8").addLabel("outOrigen");
    tl.to(".origen", { display: "none" }, "outOrigen");
    /*************Dosmil Frailejones */

    tl.fromTo(
      ".dosmilFrailejones",
      { display: "none", opacity: 0 },
      { display: "", opacity: 1 },
      "outOrigen"
    );

    tl.add(() => {
      setImageBg("/bgParamos/360.webp");
    }, "outOrigen-=0.5");
    tl.add(() => {
      setImageBg("/bgParamos/Bg20mil.webp");
    }, "outOrigen-=0.5");

    tl.fromTo(
      ".BoxDosmilImage",
      { width: "0%" },
      { width: "50%", duration: 4 }
    );
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
    tl.to(".capituloMoises", { display: "flex" }, "entradaMoises+=1");
    /*************Capitulo Moises */
    tl.add(() => {
      setImageBg("/bgParamos/Bg20mil.webp");
    }, "entradaMoises");
    tl.add(() => {
      setImageBg("/contruccionVivero.webp");
    }, "entradaMoises");

    tl.to(".capituloMoises", { opacity: 1, padding: 0 }, "entradaMoises");

    /*************Entrada tarjetas slide */

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

    tl.to(".travesia", { display: "flex" }, "entradatravesia");
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
  }, main);

  return () => ctx.revert(); // cleanup!
}, [main, numFrailejon]);
