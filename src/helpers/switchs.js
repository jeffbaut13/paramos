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
      return `bg${isMobile ? "9m" : "9"}`;
    case 10:
      return `bg${isMobile ? "10m" : "10"}`;
    case 11:
      return `bg${isMobile ? "11m" : "11"}`;
    default:
      return "";
  }
};

export const switchProcentage = (setinicio, scrollPercentage) => {
  switch (true) {
    case scrollPercentage >= 88:
      setinicio(11);
      break;
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
    case scrollPercentage >= 0:
      setinicio(3);

      break;
    default:
      // El caso por defecto si ninguno de los anteriores se cumple
      break;
  }
};
