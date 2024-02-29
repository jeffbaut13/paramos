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

export const scrollEffects = (component) => {
  gsap.defaults({ ease: "power1.inOut" });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: component.current,
      start: "top 0",
      end: "95% 0",
      scrub: 5,

      markers: true,
    },
  });
  return tl;
};
