export const handleScrollEvent = (
  scrollEnabled,
  setScrollEnabled,
  state,
  setState
) => {
  const scroller = () => {
    if (state === 8) {
      setState(8);
    } else {
      setState(state + 1);
    }
  };

  const scrollerResta = () => {
    if (state === 0) {
      setState(0);
    } else {
      setState(state - 1);
    }
  };

  // Función para capturar eventos de desplazamiento del mouse
  function handleMouseWheel(event) {
    if (!scrollEnabled) return;

    const delta = Math.max(-1, Math.min(1, event.deltaY || -event.detail));
    if (delta > 0) {
      scroller();
      // Realiza acciones cuando se desplaza hacia abajo
    } else {
      scrollerResta();
      // Realiza acciones cuando se desplaza hacia arriba
    }

    disableScrollTemporarily();
  }

  // Función para capturar eventos de desplazamiento del touchpad en portátiles
  function handleTouchpadScroll(event) {
    if (!scrollEnabled) return;

    const delta = event.deltaY;
    if (delta > 0) {
      scroller();
      // Realiza acciones cuando se desplaza hacia abajo
    } else {
      scrollerResta();
      // Realiza acciones cuando se desplaza hacia arriba
    }

    disableScrollTemporarily();
  }

  // Función para capturar eventos de desplazamiento táctil en dispositivos móviles
  function handleTouchScroll(event) {
    if (!scrollEnabled) return;

    const delta = event.changedTouches[0].clientY - event.touches[0].clientY;
    if (delta > 0) {
      scroller();
      // Realiza acciones cuando se desplaza hacia abajo
    } else {
      scrollerResta();
      // Realiza acciones cuando se desplaza hacia arriba
    }

    disableScrollTemporarily();
  }

  function disableScrollTemporarily() {
    setScrollEnabled(false);
    setTimeout(() => {
      setScrollEnabled(true);
    }, 10000); // Habilita nuevamente después de 2 segundos
  }

  // Agregar event listeners
  document.addEventListener("wheel", handleMouseWheel);
  document.addEventListener("mousewheel", handleMouseWheel); // Para navegadores antiguos
  document.addEventListener("DOMMouseScroll", handleMouseWheel); // Para Firefox
  document.addEventListener("wheel", handleTouchpadScroll); // Evento de desplazamiento del touchpad en portátiles
  document.addEventListener(
    "touchstart",
    function (event) {
      startY = event.touches[0].clientY;
    },
    false
  );
  document.addEventListener(
    "touchend",
    function (event) {
      handleTouchScroll(event);
    },
    false
  );

  // Cleanup
  return () => {
    document.removeEventListener("wheel", handleMouseWheel);
    document.removeEventListener("mousewheel", handleMouseWheel);
    document.removeEventListener("DOMMouseScroll", handleMouseWheel);
    document.removeEventListener("wheel", handleTouchpadScroll);
    document.removeEventListener(
      "touchstart",
      function (event) {
        startY = event.touches[0].clientY;
      },
      false
    );
    document.removeEventListener(
      "touchend",
      function (event) {
        handleTouchScroll(event);
      },
      false
    );
  };
};
