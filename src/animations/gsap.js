import gsap from "gsap";

export const TextoAbajoArriba = (ref) => {
  if (ref.current) {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
      }
    );
  }
};
export const Opacidad = (ref, Num) => {
  gsap.to(ref.current, {
    opacity: Num,
    ease: "power2.out",
    duration: 1,
  });
};
export const transitionSection = (ref, Num, duration) => {
  gsap.to(ref, {
    y: `-${Num}%`,
    ease: "power2.out",
    duration: duration,
  });
};

export const scrolltrigerFunction = (ref, Function) => {
  gsap.to(ref.current, {
    scrollTrigger: {
      trigger: ref.current,
      ease: "power2.inOut",
      start: "top top", // Comienza en la parte superior del contenedor
      end: "bottom bottom", // Termina en la parte inferior del contenedor
      scrub: true,
      onUpdate: Function,
    },
  });
};

export const scrollEffects = (component, time, istrue, Function) => {
  gsap.defaults({ ease: "power1.inOut" });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: component.current,
      start: `${time}% 0"`,
      end: "bottom 0",
      toggleActions: "play none none reverse",
      markers: istrue ? true : false,
      onUpdate: Function,
    },
  });
  return tl;
};

export const frailejon = (
  espelitia,
  amarillo,
  blanco,
  rapido,
  normal,
  isMobile
) => {
  const tl7 = gsap.timeline({ ease: "power1.inOut" });
  tl7.fromTo(".bgvid", { opacity: 0 }, { opacity: 1, duration: rapido });
  if (isMobile) {
    tl7.to(".BoxDosmilTexto", { height: "100%" }).addLabel("titulo1");
    tl7.to(".BoxDosmilImage", { height: "0%" }, "<");
  } else {
    tl7.to(".BoxDosmilTexto", { width: "100%" }).addLabel("titulo1");
    tl7.to(".BoxDosmilImage", { width: "0%" }, "<");
  }
  tl7.to(
    ".PrimerTextoDosmil",
    {
      opacity: 0,
      y: "-100%",
      display: "none",
      duration: rapido,
    },
    "titulo1-=0.5"
  );

  tl7.to(
    ".btnSlide",
    {
      opacity: 1,
      duration: 2,
    },
    "titulo1-=0.5"
  );
  tl7.to(
    ".dosmilFrailejones .btnconoce",
    {
      display: "none",
    },
    "titulo1-=0.5"
  );

  tl7.fromTo(
    ".SegundoTextoDosmil",
    { display: "none", opacity: 0, y: "20%" },
    { display: "block", opacity: 1, y: "0%" },
    "titulo1"
  );

  tl7.fromTo(".bgvid", { opacity: 1 }, { opacity: 0, duration: normal }, "<");

  if (isMobile) {
    tl7.to(".BoxDosmilImage", { height: "50%" }, "titulo1+=0.2");
    tl7.to(".BoxDosmilTexto", { height: "50%" }, "<");
  } else {
    tl7.to(".BoxDosmilImage", { width: "50%" }, "titulo1+=0.2");
    tl7.to(".BoxDosmilTexto", { width: "50%" }, "<");
  }
  tl7.to(".Blanco", { opacity: blanco }, "titulo1");
  tl7.to(".amarillo", { opacity: amarillo }, "titulo1");
  tl7.to(".Espeletia", { opacity: espelitia }, "titulo1");

  tl7.to(".punto", { display: "block", opacity: 1 }, "titulo1");
};
