import gsap from "gsap";

export const getContainerClass = (inicio, isMobile) => {
  switch (inicio) {
    case 3:
      return `bg${isMobile ? "3m" : "3"}`;
    case 4:
      return `bg${isMobile ? "4m" : "4"}`;
    case 5:
      return `bg${isMobile ? "5m" : "5"}`;
    case 6:
      return `bg${isMobile ? "6m" : "6"}`;
    case 7:
      return `bg${isMobile ? "7m" : "7"}`;
    case 8:
      return `bg${isMobile ? "8m" : "8"}`;
    case 9:
      return `bg${isMobile ? "10m" : "10"}`;
    case 10:
      return `bg${isMobile ? "11m" : "11"}`;
    /* case 11:
      return `bg${isMobile ? "11m" : "11"}`; */
    default:
      return "";
  }
};

export const switchProcentage = (setinicio, scrollPercentage) => {
  switch (true) {
    /*  case scrollPercentage >= 88:
      setinicio(11);
      break; */
    case scrollPercentage >= 77:
      setinicio(10);
      break;
    case scrollPercentage >= 66:
      setinicio(9);
      break;
    case scrollPercentage >= 55:
      setinicio(8);
      break;
    case scrollPercentage >= 44:
      setinicio(7);
      break;
    case scrollPercentage >= 33:
      setinicio(6);
      break;
    case scrollPercentage >= 22:
      setinicio(5);
      break;
    case scrollPercentage >= 11:
      setinicio(4);
      break;
    case scrollPercentage >= 10 && scrollPercentage < 11:
      setinicio(3);

      break;
    default:
      // El caso por defecto si ninguno de los anteriores se cumple
      break;
  }
};

export const switchProcentageZindex = (scrollPercentage) => {
  switch (true) {
    case scrollPercentage < 37:
      gsap.to(".conoce", { zIndex: "100", display: "block", y: "0%" });
      gsap.to(".origen", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".dosmilFrailejones", {
        zIndex: "10",
        display: "none",
        y: "100%",
      });
      gsap.to(".capituloMoises", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".travesia", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".contacto", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".descargable", { zIndex: "10", display: "none", y: "100%" });
      break;

    case scrollPercentage >= 37 && scrollPercentage < 44:
      gsap.to(".conoce", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".origen", { zIndex: "100", display: "block", y: "0%" });
      gsap.to(".dosmilFrailejones", {
        zIndex: "10",
        display: "none",
        y: "100%",
      });
      gsap.to(".capituloMoises", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".travesia", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".contacto", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".descargable", { zIndex: "10", display: "none", y: "100%" });
      break;

    case scrollPercentage >= 44 && scrollPercentage < 69:
      gsap.to(".conoce", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".origen", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".dosmilFrailejones", {
        zIndex: "100",
        display: "block",
        y: "0%",
      });
      gsap.to(".capituloMoises", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".travesia", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".contacto", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".descargable", { zIndex: "10", display: "none", y: "100%" });
      break;

    case scrollPercentage >= 69 && scrollPercentage < 76:
      gsap.to(".conoce", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".origen", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".dosmilFrailejones", {
        zIndex: "10",
        display: "none",
        y: "-100%",
      });
      gsap.to(".capituloMoises", { zIndex: "100", display: "block", y: "0%" });
      gsap.to(".travesia", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".contacto", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".descargable", { zIndex: "10", display: "none", y: "100%" });
      break;

    case scrollPercentage >= 76 && scrollPercentage < 84:
      gsap.to(".conoce", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".origen", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".dosmilFrailejones", {
        zIndex: "10",
        display: "none",
        y: "-100%",
      });
      gsap.to(".capituloMoises", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".travesia", { zIndex: "100", display: "block", y: "0%" });
      gsap.to(".contacto", { zIndex: "10", display: "none", y: "100%" });
      gsap.to(".descargable", { zIndex: "10", display: "none", y: "100%" });
      break;

    case scrollPercentage >= 84 && scrollPercentage < 90:
      gsap.to(".conoce", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".origen", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".dosmilFrailejones", {
        zIndex: "10",
        display: "none",
        y: "-100%",
      });
      gsap.to(".capituloMoises", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".travesia", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".contacto", { zIndex: "100", display: "block", y: "0%" });
      gsap.to(".descargable", { zIndex: "10", display: "none", y: "100%" });
      break;

    case scrollPercentage >= 90:
      gsap.to(".conoce", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".origen", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".dosmilFrailejones", {
        zIndex: "10",
        display: "none",
        y: "-100%",
      });
      gsap.to(".capituloMoises", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".travesia", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".contacto", { zIndex: "10", display: "none", y: "-100%" });
      gsap.to(".descargable", { zIndex: "100", display: "block", y: "0%" });
      break;

    default:
      // Acciones por defecto si no se cumple ningún caso
      break;
  }
};
