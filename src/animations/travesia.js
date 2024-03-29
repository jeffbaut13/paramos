import gsap from "gsap";

const Mobile = window.innerWidth <= 600;
const Tablet = window.innerWidth > 600 && window.innerWidth < 1024;
const laptop = window.innerWidth >= 1024 && window.innerWidth <= 1400;
const full = window.innerWidth > 1400;

export const primerEfecto2 = (
  padre,
  cardInicial,
  cardSecundaria,
  cardTerciaria
) => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline();
    if (full || laptop) {
      tl.to(`.${cardInicial}`, {
        x: "-50%",
        left: "50%",
        duration: 1,
        transformOrigin: "50% 50%",
        ease: "power1.inOut",
      }).addLabel("first");
    } else if (Mobile || Tablet) {
      tl.to(`.${cardInicial}`, {
        display: "block",
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }).addLabel("first");
    }

    tl.to(
      `.${cardInicial}`,
      {
        zIndex: 3,
        className: `cards ${cardInicial} max-lg:hidden `,
        pointerEvents: "all",
      },
      "first-=1"
    );
    tl.to(
      `.${cardSecundaria}`,
      {
        zIndex: 4,
        className: `hoverCard ${cardSecundaria} cards max-lg:hidden `,
        pointerEvents: "none",
      },
      "first-=1"
    );

    tl.to(
      `.${cardTerciaria}`,
      {
        zIndex: 2,
        className: `cards ${cardTerciaria} max-lg:hidden `,
        pointerEvents: "all",
      },
      "first-=1"
    );

    /**********ampliacion de caja */
    if (full || laptop) {
      tl.to(
        `.${cardSecundaria}`,
        {
          x: "-30%",
          zIndex: 4,
          left: "100%",
          opacity: 1,
          pointerEvents: "all",
          duration: 1,
          ease: "power1.inOut",
        },
        "first-=0.7"
      );
    } else if (Mobile || Tablet) {
      tl.to(
        `.${cardSecundaria}`,
        {
          display: "none",
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
        },
        "first-=0.7"
      );
    }

    if (full || laptop) {
      tl.to(
        `.${cardInicial}`,
        {
          x: "0",
          y: "0",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          ease: "power1.inOut",
          duration: 0.4,
        },
        "first"
      );
      tl.to(
        `.${cardTerciaria}`,
        {
          opacity: 0,
          x: "105%",
          y: "-70%",
          top: "50%",
          left: "100%",
          width: "20%",
          height: "50%",
        },
        "first+=1.2"
      );
    } else if (Mobile || Tablet) {
      tl.to(
        `.${cardInicial}`,
        {
          x: "0",
          y: "0",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          ease: "power1.inOut",
          duration: 0.4,
        },
        "first"
      );
      tl.to(
        `.${cardTerciaria}`,
        {
          opacity: 0,
          display: "none",
        },
        "first+=1.2"
      );
    }

    tl.to(
      `.${cardInicial} .imgpasto`,
      {
        opacity: 0,
        ease: "power1.in",
        duration: 0.1,
      },
      "first-=1"
    );
    tl.to(
      ".imgComplete",
      {
        opacity: 1,
      },
      "first-=1"
    );
    tl.to(
      `.${cardSecundaria} .imgComplete`,
      {
        opacity: 0.5,
      },
      "first-=1"
    );
    tl.to(
      `.${cardTerciaria}`,
      {
        opacity: 0,
        duration: 1,
      },
      "first-=1"
    );

    /************titulos y punto */
    tl.to(
      `.${cardTerciaria} .cajaTitulos .titulo`,
      {
        color: "#ffffff",
        textAlign: "start",
        marginRight: "0",
        y: "100%",
      },
      "first+=1.2"
    );
    tl.to(
      `.${cardTerciaria} .punto`,
      {
        opacity: 1,
      },
      "first+=1.2"
    );
    tl.to(
      `.${cardTerciaria} .cajaTitulos .titulo2`,
      {
        display: "none",
        padding: "0",
      },
      "first+=1.2"
    );
    tl.to(
      `.${cardTerciaria} .cajaTitulos .parrafo`,
      {
        display: "none",
        opacity: 0,
      },
      "first+=1.2"
    );

    tl.fromTo(
      `.${cardTerciaria} .bg-degradadoTravesia `,
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
      "first+=1.2"
    );

    tl.fromTo(
      `.${cardTerciaria} .cajaIconos`,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        display: "none",
      },
      "first+=1.2"
    );

    /************ Imagenes */

    tl.to(
      `.${cardInicial} .punto`,
      {
        opacity: 0,
        ease: "power1.in",
        duration: 0.5,
      },
      "first"
    );
    tl.to(
      `.${cardInicial} .caminante2`,
      {
        display: "block",
      },
      "first+=0.2"
    );
    tl.to(
      `.${cardTerciaria} .caminante2`,
      {
        display: "none",
      },
      "first+=0.2"
    );
    tl.fromTo(
      `.${cardInicial} .caminante2`,
      {
        opacity: 0,
        zIndex: 1,
      },
      {
        opacity: 1,
        zIndex: 1,
        ease: "none",
        duration: 0.1,
      },
      "first+=0.6"
    );
    tl.fromTo(
      ".caminante",
      {
        opacity: 1,
        display: "block",
      },
      {
        opacity: 0,
        display: "none",
        ease: "none",
        duration: 0.1,
      },
      "first+=0.7"
    );
    tl.fromTo(
      `.${cardInicial} .bg-degradadoTravesia `,
      {
        opacity: 0,
        zIndex: 2,
      },
      {
        opacity: 1,
        zIndex: 4,
        ease: "power1.in",
        duration: 1,
      },
      "first+=0.4"
    );
    /***************************titulos */

    tl.to(
      `.${cardInicial} .cajaTitulos .titulo`,
      {
        opacity: 0,
        ease: "power1.in",
        duration: 0.5,
      },
      "first-=0.7"
    );
    tl.to(
      `.${cardInicial} .cajaTitulos .titulo`,
      {
        color: "#ffffff",
        textAlign: "start",
        lineHeight: 1,
      },
      "first"
    );
    tl.to(
      `.${cardSecundaria} .cajaTitulos .titulo`,
      {
        color: "#ffffff",
        fontSize: `${(full && "1.875rem") || (laptop && "1.5rem")}`,
        lineHeight: `${(full && "2.25rem") || (laptop && "2rem")}`,
        textAlign: "start",
        paddingLeft: "6%",
        ease: "power1.in",
        marginRight: 0,
        width: "fit-content",
        y: "100%",
        duration: 1,
      },
      "first"
    );
    tl.to(
      `.${cardTerciaria} .cajaTitulos .titulo`,
      {
        textAlign: "start",
        fontSize: `${(full && "1.875rem") || (laptop && "1.5rem")}`,
        lineHeight: `${(full && "2.25rem") || (laptop && "2rem")}`,
      },
      "first"
    );
    if (full) {
      tl.to(
        `.${cardInicial} .cajaTitulos`,
        {
          padding: "6% 0 0 16%",
        },
        "first+=0.1"
      );
    }
    tl.to(
      `.${cardSecundaria} .cajaTitulos`,
      {
        padding: "0",
      },
      "first+=0.1"
    );
    tl.to(
      `.${cardTerciaria} .cajaTitulos`,
      {
        padding: "0",
      },
      "first+=0.1"
    );

    tl.to(
      `.${cardInicial} .cajaTitulos .titulo `,
      {
        opacity: 1,
        zIndex: 5,
        textAlign: `${
          (laptop && "start") || (full && "start") || (Mobile && "center")
        }`,
        width: "fit-content",
        fontSize: `${
          (laptop && "3rem") || (full && "4rem") || (Mobile && "22px")
        }`,
        lineHeight: 1,
        y: 0,
        ease: "power1.in",
        color: "#ffffff",
        marginRight: `${
          (laptop && "4rem") || (full && "6rem") || (Mobile && "0")
        }`,
        duration: 1,
      },
      "first+=0.3"
    );
    tl.to(
      `.${cardInicial} .cajaTitulos .titulo2`,
      {
        display: "block",
        opacity: 1,
        ease: "power1.in",
        duration: 0.5,
      },
      "first+=0.3"
    );
    tl.to(
      `.${cardInicial} .cajaTitulos .parrafo`,
      {
        display: "block",
      },
      "first+=1.5"
    );
    tl.to(
      `.${cardInicial} .cajaTitulos .parrafo`,
      {
        opacity: 1,
        ease: "power1.in",
        duration: 1,
      },
      "first+=1"
    );

    /*****************Caja de iconos */
    tl.to(
      `.${cardInicial} .cajaIconos `,
      {
        opacity: 1,
        display: "flex",
      },
      "first+=1"
    );

    tl.fromTo(
      `.${cardInicial} .cajaIconos .svgIcono1`,
      {
        y: 100,
      },
      {
        opacity: 1,
        y: 1,
        ease: "power1.in",
      },
      "first+=0.9"
    );
    tl.fromTo(
      `.${cardInicial} .cajaIconos .svgIcono2`,
      {
        y: 100,
      },
      {
        opacity: 1,
        y: 1,
        ease: "power1.in",
      },
      "first+=1.1"
    );
    tl.fromTo(
      `.${cardInicial} .cajaIconos .svgIcono3`,
      {
        y: 100,
      },
      {
        opacity: 1,
        y: 1,
        ease: "power1.in",
      },
      "first+=1.3"
    );
  }, padre);
  return () => ctx.revert();
};

export const reverseAction = (padre) => {
  let ctx = gsap.context(() => {
    gsap.to(`.punto`, {
      opacity: 1,
    });
    gsap.to(`.cards2 .cajaTitulos .parrafo`, {
      display: "none",
      opacity: 0,
    });
    gsap.to(".cajaIconos", {
      opacity: 0,
    });
    gsap.to(
      ".travesia .iconContinue",

      { opacity: 0, right: "-2.5rem", duration: 1 }
    );
    gsap.to(".textoUno", { display: "block", opacity: 1 });
    gsap.to(".btnTravesia", { opacity: 1 });
    gsap.to(".cards", {
      display: "none",
    });
    gsap.to(".iconoCaminante", {
      display: "block",
      opacity: 1,
    });

    if (full || laptop) {
      gsap.to(".cards1", {
        width: "25%",
        height: "50%",
        top: "50%",
        left: "50%",
        y: "-70%",
        x: "-50%",
        opacity: 0,
      });

      gsap.to(".cards2", {
        width: "25%",
        height: "50%",
        top: "50%",
        left: "50%",
        y: "-70%",
        x: "-50%",

        opacity: 0,
      });
      gsap.to(".cards3", {
        width: "25%",
        height: "50%",
        top: "50%",
        left: "unset",
        right: "8%",
        y: "-70%",
        x: "0%",
        opacity: 0,
      });
    } else if (Mobile || Tablet) {
      gsap.to(".cards1", {
        width: "100%",
        height: "100%",
        top: "0%",
        left: "0%",
        y: "0%",
        x: "0%",
        opacity: 0,
      });
      gsap.to(".cards2", {
        width: "100%",
        height: "100%",
        top: "0%",
        left: "0%",
        y: "0%",
        x: "0%",
        opacity: 0,
      });
      gsap.to(".cards3", {
        width: "100%",
        height: "100%",
        top: "0%",
        left: "0%",
        y: "0%",
        x: "0%",
        opacity: 0,
      });
    }
  }, padre);
  return () => ctx.revert();
};

export const EfectoTravesia = (card1, card2, card3) => {
  const tl = gsap.timeline();

  tl.to(".slideCard", {
    x: "0%",
  }).addLabel("cada");

  tl.to(
    `.slideCard .${card1}`,
    {
      order: 1,
    },
    "cada-=1"
  );
  tl.to(
    `.slideCard .${card2}`,
    {
      order: 2,
    },
    "cada-=1"
  );
  tl.to(
    `.slideCard .${card3}`,
    {
      order: 3,
    },
    "cada-=1"
  );
  tl.to(
    ".slideCard",
    {
      x: "30%",
    },
    "cada-=1"
  );
  tl.fromTo(
    ".travesia .textoTitulo",
    {
      y: "100%",
    },
    {
      y: "0%",
      duration: 0.5,
      ease: "power1.inOut",
    },
    "cada+=1.5"
  );
  tl.fromTo(
    ".travesia .titulo2",
    {
      x: "10%",
      opacity: 0,
    },
    {
      x: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
    },
    "<+=0.2"
  );
  tl.fromTo(
    ".travesia .imgCompleteOne",
    {
      scale: 1,
    },
    {
      scale: 1.05,

      duration: 0.5,
      ease: "power1.inOut",
    },
    "cada+=1.5"
  );
  tl.fromTo(
    ".travesia .parrafo",
    {
      opacity: 0,
      y: "30%",
    },
    {
      opacity: 1,
      y: "0%",
      duration: 1.5,
      ease: "power1.inOut",
    },
    "cada+=1.5"
  );
  tl.fromTo(
    ".travesia .svgIcono ",
    {
      opacity: 0,
      x: "-10%",
    },
    {
      opacity: 1,
      x: "0%",
      stagger: 0.1, // El retraso entre cada elemento
      duration: 1,
      ease: "power1.inOut",
    },
    "cada+=1.5"
  );
};
